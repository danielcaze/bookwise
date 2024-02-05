"use server";

import { Book, Category, Rating, User } from "@prisma/client";

type RatingsWithBookAndUser = Rating & {
  book: Book;
  user: User;
};

type getBooksProps = {
  limit?: number;
  page?: number;
};

export async function getUserLastRatedBooksById(
  { limit = 10, page = 1, userId }: getBooksProps & { userId: string } = {
    limit: 10,
    page: 1,
    userId: "",
  },
) {
  try {
    if (!userId) throw new Error("User ID not provided");
    const response = await fetch(
      `${process.env.NEXTAUTH_URL}/api/user/${userId}/last-ratings?limit=${limit}&page=${page}`,
      {
        cache: "no-store",
      },
    ).then((response) => response.json());

    return (response.books ?? []) as Array<
      RatingsWithBookAndUser & { book: { rate: number } }
    >;
  } catch (error) {
    return [];
  }
}

type UserProfileInfo = {
  pagesRead: number;
  booksReviewed: number;
  authorsRead: number;
  mostReadCategory: Category;
  user: User;
};

export async function getUserProfileInfoById(userId: string) {
  try {
    if (!userId) throw new Error("User ID not provided");
    const response = await fetch(
      `${process.env.NEXTAUTH_URL}/api/user/${userId}/profile-info`,
      {
        cache: "no-store",
      },
    ).then((response) => response.json());

    return response as UserProfileInfo;
  } catch (error) {
    return null;
  }
}
