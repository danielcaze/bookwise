"use client";

import { Book, Rating } from "@prisma/client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { getUserLastRatedBooksById } from "../../actions";
import { useParams, useSearchParams } from "next/navigation";
import BookRating from "./BookRating";
import { Spinner } from "@/src/components/Spinner";

type LastRatedBooksType = Array<
  Rating & {
    book: Book & { rate: number };
  }
>;

const _LIMIT = 10;

export function LastRatedBooks() {
  const params = useParams();
  const [hasMore, setHasMore] = useState(true);
  const [books, setBooks] = useState<LastRatedBooksType>([]);
  const [page, setPage] = useState(0);
  const { ref, inView } = useInView();
  const searchParams = useSearchParams();
  const query = new URLSearchParams(searchParams);

  const search = query.get("search") ?? "";

  const reset = () => {
    setPage(0);
    setHasMore(true);
    setBooks([]);
  };

  async function fetchBooks() {
    const next = page + 1;
    const fetchedBooks = await getUserLastRatedBooksById({
      page: next,
      limit: _LIMIT,
      userId: String(params.id),
      search,
    });

    if (fetchedBooks.length > 0) {
      const newBooks = [...books, ...fetchedBooks];
      setBooks(newBooks);
      setPage(next);
    }
    setHasMore(fetchedBooks.length === _LIMIT);
  }

  useEffect(() => {
    reset();
  }, [search]);

  useEffect(() => {
    if (inView) fetchBooks();
  }, [inView]);

  return books.length > 0 || hasMore ? (
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
