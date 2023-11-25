import { prisma } from "@/src/libs/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get("page") ?? "1", 10) || 1;
  const limit = parseInt(url.searchParams.get("limit") ?? "10", 10) || 10;
  const categoriesParam = url.searchParams.get("categories");
  const search = url.searchParams.get("search") ?? "";

  const categories = categoriesParam
    ? typeof categoriesParam === "string" && categoriesParam.includes(",")
      ? categoriesParam.split(",")
      : [categoriesParam]
    : [];

  const skip = (page - 1) * limit;

  const totalBooksCount = await prisma.book.count();

  const books = await prisma.book.findMany({
    ...(categories.length || search
      ? {
          where: {
            ...(search
              ? {
                  name: {
                    contains: search,
                  },
                }
              : {}),
            ...(categories.length
              ? {
                  categories: {
                    some: {
                      category: {
                        name: {
                          in: categories,
                        },
                      },
                    },
                  },
                }
              : {}),
          },
        }
      : {}),
    skip,
    take: limit,
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

  return NextResponse.json({
    books: booksWithAverageRate,
    page,
    limit,
    totalPages: Math.ceil(totalBooksCount / limit),
    hasMore: skip + limit < totalBooksCount,
  });
}
