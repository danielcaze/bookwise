import { prisma } from "@/src/libs/prisma";
import { Category } from "@prisma/client";
import { NextResponse } from "next/server";

type CategoryCount = {
  [categoryId: string]: {
    count: number;
    category: Category | null;
  };
};

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const userId = String(params.id);

  const user = await prisma.user.findUniqueOrThrow({
    where: {
      id: userId,
    },
  });

  const ratings = await prisma.rating.findMany({
    where: {
      user_id: userId,
    },
    include: {
      book: {
        include: {
          categories: {
            include: {
              category: true,
            },
          },
        },
      },
    },
  });

  let pagesRead = 0;
  const authorsRead = new Set();
  const categoryCounts: CategoryCount = {};

  ratings.forEach((rating) => {
    pagesRead += rating.book.total_pages;
    authorsRead.add(rating.book.author);

    rating.book.categories.forEach((cob) => {
      const { category } = cob;
      if (category) {
        if (!categoryCounts[category.id]) {
          categoryCounts[category.id] = { count: 1, category };
        } else {
          categoryCounts[category.id].count += 1;
        }
      }
    });
  });

  const mostReadCategoryEntry = Object.entries(categoryCounts).reduce(
    (prev, current) => {
      return prev[1].count > current[1].count ? prev : current;
    },
    ["", { count: 0, category: null }],
  );

  const mostReadCategory = mostReadCategoryEntry
    ? mostReadCategoryEntry[1].category
    : null;

  return NextResponse.json({
    pagesRead,
    booksReviewed: ratings.length,
    authorsRead: authorsRead.size,
    mostReadCategory,
    user,
  });
}
