import { prisma } from "@/src/libs/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const urlSplitted = request.url.split("/");
  const userId = urlSplitted[urlSplitted.length - 2];

  if (!userId) {
    return NextResponse.json(
      { message: "USER ID not provided." },
      { status: 400 },
    );
  }

  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get("page") ?? "1", 10) || 1;
  const limit = parseInt(url.searchParams.get("limit") ?? "10", 10) || 10;

  const skip = (page - 1) * limit;

  const totalRatingsCount = await prisma.rating.count();

  const ratings = await prisma.rating.findMany({
    take: limit,
    skip,
    where: {
      user_id: userId,
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

  const ratingsWithAverageRate = ratings.map((rating) => ({
    ...rating,
    book: {
      ...rating.book,
      rate:
        bookRatingsMap[rating.book.id].totalRate /
        bookRatingsMap[rating.book.id].count,
    },
  }));

  return NextResponse.json({
    books: ratingsWithAverageRate,
    page,
    limit,
    totalPages: Math.ceil(totalRatingsCount / limit),
    hasMore: skip + limit < totalRatingsCount,
  });
}
