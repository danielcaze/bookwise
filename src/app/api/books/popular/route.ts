import { prisma } from "@/src/libs/prisma";
import { Book, Rating } from "@prisma/client";
import { NextResponse } from "next/server";

type BookWithRatings = Book & {
  ratings: Rating[];
  rate?: number;
};

function getMostPopularBooks(books: BookWithRatings[]) {
  return books.sort((a, b) => {
    const averageRatingA =
      a.ratings.reduce((acc, curr) => acc + curr.rate, 0) / a.ratings.length;
    const averageRatingB =
      b.ratings.reduce((acc, curr) => acc + curr.rate, 0) / b.ratings.length;

    if (averageRatingA === averageRatingB) {
      return b.ratings.length - a.ratings.length;
    }

    return averageRatingB - averageRatingA;
  });
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get("page") ?? "1", 10) || 1;
  const limit = parseInt(url.searchParams.get("limit") ?? "10", 10) || 10;

  const skip = (page - 1) * limit;

  const totalRatingsCount = await prisma.book.count();

  const books = await prisma.book.findMany({
    skip,
    take: limit,
    orderBy: {
      created_at: "desc",
    },
    include: {
      ratings: true,
    },
  });

  const popularBooks = getMostPopularBooks(books);

  const popularBooksWithRate = popularBooks.map((book) => ({
    ...book,
    rate:
      book.ratings.reduce((acc, curr) => acc + curr.rate, 0) /
      book.ratings.length,
  }));

  return NextResponse.json({
    books: popularBooksWithRate,
    page,
    limit,
    totalPages: Math.ceil(totalRatingsCount / limit),
    hasMore: skip + limit < totalRatingsCount,
  });
}
