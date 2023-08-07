import { prisma } from "@/src/libs/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const books = await prisma.book.findMany({
    orderBy: {
      created_at: "desc",
    },
    include: {
      ratings: true,
      categories: true,
    },
  });

  const booksWithAverageRate = books.map((book) => {
    const totalRatings = book.ratings.length;
    const sumOfRatings = book.ratings.reduce(
      (acc, rating) => acc + rating.rate,
      0,
    );
    const averageRate = totalRatings ? sumOfRatings / totalRatings : 0;

    return {
      ...book,
      rate: averageRate,
    };
  });

  return NextResponse.json({ books: booksWithAverageRate });
}
