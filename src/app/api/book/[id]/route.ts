import { prisma } from "@/src/libs/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const urlSplitted = request.url.split("/");
  const bookId = urlSplitted[urlSplitted.length - 1];

  if (!bookId)
    return NextResponse.json(
      { message: "Book ID not provided." },
      { status: 400 },
    );

  const book = await prisma.book.findUnique({
    where: {
      id: bookId,
    },
    include: {
      ratings: true,
    },
  });

  if (!book) {
    return NextResponse.json({ message: "Book not found." }, { status: 404 });
  }

  const totalRatings = book.ratings.length;
  const sumOfRatings = book.ratings.reduce(
    (acc, rating) => acc + rating.rate,
    0,
  );
  const averageRate = totalRatings ? sumOfRatings / totalRatings : 0;

  return NextResponse.json({
    book: {
      ...book,
      rate: averageRate,
    },
  });
}
