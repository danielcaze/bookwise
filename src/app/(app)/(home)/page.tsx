import ActionButton from "@/src/components/ActionButton";
import Card from "@/src/components/Card";
import Heading from "@/src/components/Heading";
import SmallCard from "@/src/components/SmallCard";
import LastRead from "./components/LastRead";
import { Book, Rating, User } from "@prisma/client";

type RatingsWithBookAndUser = Rating & {
  book: Book;
  user: User;
};

type RatingWithAverageRate = Book & {
  rate: number;
  rating: Rating;
};

export default async function Home() {
  const [lastRatedBooksResponse, popularBooksResponse] = await Promise.all([
    fetch("http://localhost:3000/api/books/last-ratings", {
      cache: "no-store",
    }),
    fetch("http://localhost:3000/api/books/popular", {
      cache: "no-store",
    }),
  ]);
  const [lastRatingsData, popularData] = await Promise.all([
    lastRatedBooksResponse.json(),
    popularBooksResponse.json(),
  ]);

  const lastRatedBooks = lastRatingsData.books as RatingsWithBookAndUser[];
  const popularBooks = popularData.books as RatingWithAverageRate[];

  return (
    <>
      <main className="flex flex-col gap-10">
        <Heading text="Início" icon="ChartLineUp" />

        <LastRead />

        <section className="flex flex-col gap-4">
          <div>
            <strong className="font-regular text-gray200 text-sm">
              Avaliações mais recentes
            </strong>
          </div>
          <div className="flex flex-col gap-3">
            {lastRatedBooks.map((rating) => {
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
                      rating: rating.rate,
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
          </div>
        </section>
      </main>

      <aside className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <strong className="font-regular text-gray200 text-sm">
            Livros populares
          </strong>
          <ActionButton text="Ver todos" />
        </div>
        <div className="flex flex-col gap-3">
          {popularBooks.map((book) => {
            return (
              <SmallCard
                key={book.id}
                book={{
                  id: book.id,
                  name: book.name,
                  cover_url: book.cover_url,
                  author: book.author,
                  rating: book.rate,
                }}
              />
            );
          })}
        </div>
      </aside>
    </>
  );
}
