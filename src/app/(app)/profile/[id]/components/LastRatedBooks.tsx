"use client";

import { Book, Rating } from "@prisma/client";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { getUserLastRatedBooksById } from "../../actions";
import { useParams } from "next/navigation";
import BookRating from "./BookRating";
import { Spinner } from "@/src/components/Spinner";

type LastRatedBooksType = {
  initialBooks: Array<
    Rating & {
      book: Book & { rate: number };
    }
  >;
};

const _LIMIT = 10;

export function LastRatedBooks({ initialBooks }: LastRatedBooksType) {
  const params = useParams();
  const [hasMore, setHasMore] = useState(initialBooks.length === _LIMIT);
  const [books, setBooks] = useState(initialBooks);
  const [page, setPage] = useState(1);
  const { ref, inView } = useInView();

  async function loadMoreBooks() {
    const next = page + 1;
    const books = await getUserLastRatedBooksById({
      page: next,
      limit: _LIMIT,
      userId: String(params.id),
    });

    if (books.length) {
      setPage(next);
      setBooks((state) => [...state, ...books]);
    }

    setHasMore(books.length === _LIMIT);
  }

  useEffect(() => {
    if (inView) loadMoreBooks();
  }, [inView]);

  return books.length > 0 ? (
    <div className="flex flex-col gap-6 h-[calc(100vh_-_4.5rem_-_3.375rem_-_2.5rem_-_2.5rem_-_2.5rem)] overflow-auto pb-10">
      {books.map((book) => {
        return <BookRating key={book.id} post={book} />;
      })}
      {hasMore ? (
        <div role="status" className="my-5 mx-auto" ref={ref}>
          <Spinner />
        </div>
      ) : (
        <></>
      )}
    </div>
  ) : (
    <p className="text-center text-gray300">
      Esse usuário ainda não fez nenhum comentário.
    </p>
  );
}
