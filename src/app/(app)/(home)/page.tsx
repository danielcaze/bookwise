import Card from "@/src/components/Card";
import SmallCard from "@/src/components/SmallCard";

export default function Home() {
  return (
    <>
      <div>
        <Card />
      </div>
      <div>
        <SmallCard
          book={{
            id: "1",
            name: "14 Hábitos de Desenvolvedores Altamente produtivos escrito por R. K. Simmons.",
            image_url: "/assets/Book.png",
            author: "George Orwell",
            rating: 4,
          }}
        />
        <SmallCard
          book={{
            id: "1",
            name: "A revolução dos bichos",
            image_url: "/assets/Book.png",
            author: "George Orwell",
            rating: 4,
          }}
        />
        <SmallCard
          book={{
            id: "1",
            name: "A revolução dos bichos",
            image_url: "/assets/Book.png",
            author: "George Orwell",
            rating: 4,
          }}
        />
        <SmallCard
          book={{
            id: "1",
            name: "A revolução dos bichos",
            image_url: "/assets/Book.png",
            author: "George Orwell",
            rating: 4,
          }}
        />
        <SmallCard
          book={{
            id: "1",
            name: "A revolução dos bichos",
            image_url: "/assets/Book.png",
            author: "George Orwell",
            rating: 4,
          }}
        />
      </div>
    </>
  );
}
