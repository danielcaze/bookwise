"use client";
import Card from "@/src/components/Card";
import { Book, Rating, User } from "@prisma/client";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { getLastRatedBooks } from "../actions";
import { Spinner } from "@/src/components/Spinner";

type LastRatedBooksType = {
  initialBooks: Array<
    Rating & {
      book: Book;
      user: User;
    }
  >;
};

const _LIMIT = 10;

export function LastRatedBooks({ initialBooks }: LastRatedBooksType) {
  const [hasMore, setHasMore] = useState(initialBooks.length === _LIMIT);
  const [books, setBooks] = useState(initialBooks);
  const [page, setPage] = useState(1);
  const { ref, inView } = useInView();

  async function loadMoreBooks() {
    const next = page + 1;
    const books = await getLastRatedBooks({ page: next, limit: _LIMIT });

    if (books.length) {
      setPage(next);
      setBooks((state) => [...state, ...books]);
    }

    setHasMore(books.length === _LIMIT);
  }

  useEffect(() => {
    if (inView) loadMoreBooks();
  }, [inView]);

  return (
    <>
      {books.map((rating) => {
        return (
          <Card
            key={rating.id}
            post={{
              book: {
                author: rating.book.author,
                cover_url: rating.book.cover_url,
                description: rating.book.summary,
                id: rating.book_id,
                name: rating.book.name,
                rate: rating.rate,
              },
              created_at: rating.created_at,
              user: {
                avatar_url: String(rating.user.avatar_url),
                id: rating.user.id,
                name: rating.user.name,
              },
            }}
          />
        );
      })}

      {hasMore ? (
        <div role="status" className="my-5 mx-auto" ref={ref}>
          <Spinner />
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
