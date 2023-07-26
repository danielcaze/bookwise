import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const bookId = searchParams.get("bookId");

  const book = await prisma.book.findUnique({
    where: {
      id: bookId,
    },
  });

  return NextResponse.json({ book });
}
