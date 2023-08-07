"use client";

import ActionButton from "@/src/components/ActionButton";
import Card from "@/src/components/Card";
import { useSession } from "next-auth/react";

export default function LastRead() {
  const { data } = useSession();

  if (!data) return <></>;

  return (
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
    </section>
  );
}
