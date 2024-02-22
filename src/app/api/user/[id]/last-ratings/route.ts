import { prisma } from "@/src/libs/prisma";
import { Rating, Book, User } from "@prisma/client";
import { NextResponse } from "next/server";

type RatingWithAverageRate = Rating & {
  book: Book & {
    rate: number;
  };
  user: User;
};

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const userId = params.id;
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get("page") ?? "1", 10) || 1;
  const limit = parseInt(url.searchParams.get("limit") ?? "10", 10) || 10;
  const search = url.searchParams.get("search") ?? "";
  const skip = (page - 1) * limit;

  const totalRatingsCount = await prisma.rating.count();

  const ratings = await prisma.rating.findMany({
    skip,
    take: limit,
    where: {
      user_id: userId,
      ...(search
        ? {
            book: {
              name: {
                contains: search,
              },
            },
          }
        : {}),
    },
    orderBy: {
      created_at: "desc",
    },
    include: {
      book: true,
      user: true,
    },
  });

  const bookRatingsMap: Record<string, { totalRate: number; count: number }> =
    {};

  ratings.forEach((rating) => {
    const bookId = rating.book.id;
    if (!bookRatingsMap[bookId]) {
      bookRatingsMap[bookId] = { totalRate: 0, count: 0 };
    }
    bookRatingsMap[bookId].totalRate += rating.rate;
    bookRatingsMap[bookId].count += 1;
  });

  const ratingsWithAverageRate: RatingWithAverageRate[] = ratings.map(
    (rating) => ({
      ...rating,
      book: {
        ...rating.book,
        rate:
          bookRatingsMap[rating.book.id].totalRate /
          bookRatingsMap[rating.book.id].count,
      },
    }),
  );

  return NextResponse.json({
    books: ratingsWithAverageRate,
    page,
    limit,
    totalPages: Math.ceil(totalRatingsCount / limit),
    hasMore: skip + limit < totalRatingsCount,
  });
}
