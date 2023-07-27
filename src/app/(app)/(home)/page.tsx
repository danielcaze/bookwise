import Card from "@/src/components/Card";
import SmallCard from "@/src/components/SmallCard";

export default function Home() {
  return (
    <>
      <div>
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
      <div>
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
    </>
  );
}
