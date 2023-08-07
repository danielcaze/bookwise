import ActionButton from "@/src/components/ActionButton";
import Card from "@/src/components/Card";
import Heading from "@/src/components/Heading";
import SmallCard from "@/src/components/SmallCard";
import LastRead from "./components/LastRead";

export default function Home() {
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
            <Card
              post={{
                book: {
                  author: "J.K.K Moie",
                  cover_url: "/assets/Book.png",
                  description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quisquam fugit neque animi, similique in nulla eveniet placeat, totam nobis, blanditiis praesentium sint quis odit architecto error facilis explicabo doloribus.",
                  id: "1",
                  name: "Hobbit",
                  rating: 4,
                },
                created_at: new Date(),
                user: {
                  avatar_url: "https://source.unsplash.com/random",
                  id: "1",
                  name: "Daniel Caze",
                },
              }}
            />
            <Card
              post={{
                book: {
                  author: "J.K.K Moie",
                  cover_url: "/assets/Book.png",
                  description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quisquam fugit neque animi, similique in nulla eveniet placeat, totam nobis, blanditiis praesentium sint quis odit architecto error facilis explicabo doloribus.",
                  id: "1",
                  name: "Hobbit",
                  rating: 4,
                },
                created_at: new Date(),
                user: {
                  avatar_url: "https://source.unsplash.com/random",
                  id: "1",
                  name: "Daniel Caze",
                },
              }}
            />
            <Card
              post={{
                book: {
                  author: "J.K.K Moie",
                  cover_url: "/assets/Book.png",
                  description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quisquam fugit neque animi, similique in nulla eveniet placeat, totam nobis, blanditiis praesentium sint quis odit architecto error facilis explicabo doloribus.",
                  id: "1",
                  name: "Hobbit",
                  rating: 4,
                },
                created_at: new Date(),
                user: {
                  avatar_url: "https://source.unsplash.com/random",
                  id: "1",
                  name: "Daniel Caze",
                },
              }}
            />
            <Card
              post={{
                book: {
                  author: "J.K.K Moie",
                  cover_url: "/assets/Book.png",
                  description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quisquam fugit neque animi, similique in nulla eveniet placeat, totam nobis, blanditiis praesentium sint quis odit architecto error facilis explicabo doloribus.",
                  id: "1",
                  name: "Hobbit",
                  rating: 4,
                },
                created_at: new Date(),
                user: {
                  avatar_url: "https://source.unsplash.com/random",
                  id: "1",
                  name: "Daniel Caze",
                },
              }}
            />
            <Card
              post={{
                book: {
                  author: "J.K.K Moie",
                  cover_url: "/assets/Book.png",
                  description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quisquam fugit neque animi, similique in nulla eveniet placeat, totam nobis, blanditiis praesentium sint quis odit architecto error facilis explicabo doloribus.",
                  id: "1",
                  name: "Hobbit",
                  rating: 4,
                },
                created_at: new Date(),
                user: {
                  avatar_url: "https://source.unsplash.com/random",
                  id: "1",
                  name: "Daniel Caze",
                },
              }}
            />
            <Card
              post={{
                book: {
                  author: "J.K.K Moie",
                  cover_url: "/assets/Book.png",
                  description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quisquam fugit neque animi, similique in nulla eveniet placeat, totam nobis, blanditiis praesentium sint quis odit architecto error facilis explicabo doloribus.",
                  id: "1",
                  name: "Hobbit",
                  rating: 4,
                },
                created_at: new Date(),
                user: {
                  avatar_url: "https://source.unsplash.com/random",
                  id: "1",
                  name: "Daniel Caze",
                },
              }}
            />
            <Card
              post={{
                book: {
                  author: "J.K.K Moie",
                  cover_url: "/assets/Book.png",
                  description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quisquam fugit neque animi, similique in nulla eveniet placeat, totam nobis, blanditiis praesentium sint quis odit architecto error facilis explicabo doloribus.",
                  id: "1",
                  name: "Hobbit",
                  rating: 4,
                },
                created_at: new Date(),
                user: {
                  avatar_url: "https://source.unsplash.com/random",
                  id: "1",
                  name: "Daniel Caze",
                },
              }}
            />
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
          <SmallCard
            book={{
              id: "1",
              name: "14 Hábitos de Desenvolvedores Altamente produtivos escrito por R. K. Simmons.",
              cover_url: "/assets/Book.png",
              author: "George Orwell",
              rating: 4,
            }}
          />
          <SmallCard
            book={{
              id: "1",
              name: "14 Hábitos de Desenvolvedores Altamente produtivos escrito por R. K. Simmons.",
              cover_url: "/assets/Book.png",
              author: "George Orwell",
              rating: 4,
            }}
          />
          <SmallCard
            book={{
              id: "1",
              name: "14 Hábitos de Desenvolvedores Altamente produtivos escrito por R. K. Simmons.",
              cover_url: "/assets/Book.png",
              author: "George Orwell",
              rating: 4,
            }}
          />
          <SmallCard
            book={{
              id: "1",
              name: "14 Hábitos de Desenvolvedores Altamente produtivos escrito por R. K. Simmons.",
              cover_url: "/assets/Book.png",
              author: "George Orwell",
              rating: 4,
            }}
          />
        </div>
      </aside>
    </>
  );
}
