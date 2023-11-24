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

type getMoviesProps = {
  limit?: number;
  page?: number;
};

export async function getLastRatedMovies(
  { limit = 10, page = 1 }: getMoviesProps = { limit: 10, page: 1 },
) {
  const response = await fetch(
    `${process.env.NEXTAUTH_URL}/api/books/last-ratings?limit=${limit}&page=${page}`,
    {
      cache: "no-store",
    },
  ).then((response) => response.json());

  return (response.books ?? []) as RatingsWithBookAndUser[];
}

export async function getPopularMovies(
  { limit = 10, page = 1 }: getMoviesProps = { limit: 10, page: 1 },
) {
  const response = await fetch(
    `${process.env.NEXTAUTH_URL}/api/books/popular?limit=${limit}&page=${page}`,
    {
      cache: "no-store",
    },
  ).then((response) => response.json());

  return (response.books ?? []) as RatingWithAverageRate[];
}
