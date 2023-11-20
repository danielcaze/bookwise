import ActionButton from "@/src/components/ActionButton";
import Heading from "@/src/components/Heading";
import SmallCard from "@/src/components/SmallCard";
import LastRead from "./components/LastRead";
import { Book, Rating } from "@prisma/client";
import { getLastRatedMovies } from "./actionts";
import { LastRatedBooks } from "./components/LastRatedBooks";

type RatingWithAverageRate = Book & {
  rate: number;
  rating: Rating;
};

export default async function Home() {
  const [lastRatedBooks, popularBooksResponse] = await Promise.all([
    getLastRatedMovies(),
    fetch(`${process.env.NEXTAUTH_URL}/api/books/popular`, {
      cache: "no-store",
    }).then((response) => response.json()),
  ]);

  const popularBooks: RatingWithAverageRate[] =
    popularBooksResponse?.books ?? [];

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
            <LastRatedBooks initialBooks={lastRatedBooks} />
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
