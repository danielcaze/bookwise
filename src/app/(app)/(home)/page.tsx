import ActionButton from "@/src/components/ActionButton";
import Heading from "@/src/components/Heading";
import LastRead from "./components/LastRead";
import { getLastRatedMovies, getPopularMovies } from "./actions";
import { LastRatedBooks } from "./components/LastRatedBooks";
import { PopularBooks } from "./components/PopularBooks";

export default async function Home() {
  const [lastRatedBooks, popularBooks] = await Promise.all([
    getLastRatedMovies(),
    getPopularMovies(),
  ]);

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
          <div className="flex flex-col gap-3 pb-3">
            <LastRatedBooks initialBooks={lastRatedBooks} />
          </div>
        </section>
      </main>

      <aside className="relative">
        <div className="sticky top-[calc(4.625rem_*_2)] right-24 left-0 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <strong className="font-regular text-gray200 text-sm">
              Livros populares
            </strong>
            <ActionButton text="Ver todos" />
          </div>
          <div className="flex flex-col gap-3 h-[calc(100vh_-_4.5rem_-_4.625rem_-_2.5rem_-_1rem)] overflow-y-scroll pb-3">
            <PopularBooks initialBooks={popularBooks} />
          </div>
        </div>
      </aside>
    </>
  );
}
