"use server";

import { Book, Category, Rating } from "@prisma/client";

type getProps = {
  limit?: number;
  page?: number;
};

export async function getCategories(
  { limit = 10, page = 1 }: getProps = { limit: 10, page: 1 },
) {
  try {
    const response = await fetch(
      `${process.env.NEXTAUTH_URL}/api/categories?limit=${limit}&page=${page}`,
      {
        cache: "no-store",
      },
    ).then((response) => response.json());

    return (response.categories ?? []) as Category[];
  } catch (error) {
    return [];
  }
}

type getExploreBooksProps = getProps & {
  search?: string;
  categories?: string[] | string;
};

type RatingWithAverageRate = Book & {
  rate: number;
  rating: Rating;
};

export async function getExploreBooks(
  {
    limit = 10,
    page = 1,
    categories = "",
    search = "",
  }: getExploreBooksProps = {
    limit: 10,
    page: 1,
    categories: "",
    search: "",
  },
) {
  try {
    const response = await fetch(
      `${process.env.NEXTAUTH_URL}/api/books/explore?limit=${limit}&page=${page}&categories=${categories}&search=${search}`,
      {
        cache: "no-store",
      },
    ).then((response) => response.json());

    return (response.books ?? []) as RatingWithAverageRate[];
  } catch (error) {
    return [];
  }
}
