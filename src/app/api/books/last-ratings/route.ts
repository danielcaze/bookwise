import { prisma } from "@/src/libs/prisma";
import { Rating, Book, User } from "@prisma/client";
import { NextResponse } from "next/server";

type RatingWithAverageRate = Rating & {
  book: Book & {
    rate: number;
  };
  user: User;
};

export async function GET() {
  const ratings = await prisma.rating.findMany({
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

  return NextResponse.json({ books: ratingsWithAverageRate });
}
