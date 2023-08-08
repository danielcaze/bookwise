"use client";

import ActionButton from "@/src/components/ActionButton";
import Card from "@/src/components/Card";
import { Book, Rating, User } from "@prisma/client";
import { useSession } from "next-auth/react";
import { Suspense, useEffect, useState } from "react";

type BookWithRatings = Book & {
  ratings: Rating[];
  rate: number;
  user: User;
};

export default function LastRead() {
  const [lastBookRated, setLastBookRated] = useState<BookWithRatings | null>(
    null,
  );
  const { data: sessionData } = useSession();

  useEffect(() => {
    const getLastBookRated = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXTAUTH_URL}/api/user/${sessionData?.user.id}/last-book-rated`,
        );
        const data = await response.json();
        const lastBookRates = data.book as BookWithRatings;
        setLastBookRated(lastBookRates);
      } catch (error) {
        console.error(error);
      }
    };
    if (sessionData) {
      getLastBookRated();
    }
  }, [sessionData]);

  return (
    <Suspense>
      {sessionData && lastBookRated && (
        <section className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <strong className="font-regular text-gray200 text-sm">
              Sua última leitura
            </strong>
            <ActionButton text="Ver todas" />
          </div>
          <Card
            variation="light"
            post={{
              book: {
                author: lastBookRated.author,
                cover_url: lastBookRated.cover_url,
                description: lastBookRated.summary,
                id: lastBookRated.id,
                name: lastBookRated.name,
                rating: lastBookRated.rate,
              },
              created_at: lastBookRated.created_at,
              user: {
                avatar_url: String(lastBookRated.user.avatar_url),
                id: lastBookRated.user.id,
                name: lastBookRated.user.name,
              },
            }}
          />
        </section>
      )}
    </Suspense>
  );
}
