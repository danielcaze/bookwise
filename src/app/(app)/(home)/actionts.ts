"use server";

import { Book, Rating, User } from "@prisma/client";

type RatingsWithBookAndUser = Rating & {
  book: Book;
  user: User;
};

type getPopularMoviesProps = {
  limit?: number;
  page?: number;
};

export async function getLastRatedMovies({
  limit = 10,
  page = 1,
}: getPopularMoviesProps = {}) {
  const response = await fetch(
    `${process.env.NEXTAUTH_URL}/api/books/last-ratings?limit=${limit}&page=${page}`,
    {
      cache: "no-store",
    }
  ).then((response) => response.json());

  return (response.books ?? []) as RatingsWithBookAndUser[];
}
