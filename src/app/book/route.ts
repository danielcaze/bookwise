import { prisma } from "@/src/libs/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const bookId = searchParams.get("bookId");

  if (!bookId)
    return NextResponse.json(
      { message: "Book ID not provided." },
      { status: 400 },
    );

  const book = await prisma.book.findUnique({
    where: {
      id: bookId,
    },
  });

  return NextResponse.json({ book });
}
