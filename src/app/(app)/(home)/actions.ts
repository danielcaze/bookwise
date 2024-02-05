"use server";

import { Book, Rating, User } from "@prisma/client";

type RatingsWithBookAndUser = Rating & {
  book: Book;
  user: User;
};

type RatingWithAverageRate = Book & {
  rate: number;
  rating: Rating;
};

type getBooksProps = {
  limit?: number;
  page?: number;
};

export async function getLastRatedBooks(
  { limit = 10, page = 1 }: getBooksProps = { limit: 10, page: 1 },
) {
  try {
    const response = await fetch(
      `${process.env.NEXTAUTH_URL}/api/books/last-ratings?limit=${limit}&page=${page}`,
      {
        cache: "no-store",
      },
    ).then((response) => response.json());

    return (response.books ?? []) as RatingsWithBookAndUser[];
  } catch (error) {
    return [];
  }
}

export async function getPopularBooks(
  { limit = 10, page = 1 }: getBooksProps = { limit: 10, page: 1 },
) {
  try {
    const response = await fetch(
      `${process.env.NEXTAUTH_URL}/api/books/popular?limit=${limit}&page=${page}`,
      {
        cache: "no-store",
      },
    ).then((response) => response.json());

    return (response.books ?? []) as RatingWithAverageRate[];
  } catch (error) {
    return [];
  }
}
