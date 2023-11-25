import { prisma } from "@/src/libs/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get("page") ?? "1", 10) || 1;
  const limit = parseInt(url.searchParams.get("limit") ?? "10", 10) || 10;

  const skip = (page - 1) * limit;

  const totalCategoriesCount = await prisma.category.count();

  const categories = await prisma.category.findMany({
    skip,
    take: limit,
    orderBy: {
      name: "asc",
    },
  });

  return NextResponse.json({
    categories,
    page,
    limit,
    totalPages: Math.ceil(totalCategoriesCount / limit),
    hasMore: skip + limit < totalCategoriesCount,
  });
}
