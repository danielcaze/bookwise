"use client";

import { useSession } from "next-auth/react";

export default function Home() {
  const { data } = useSession();
  console.log(data);
  return <h1>Ola mundo</h1>;
}
