import { ProfileInfo } from "@/src/components/ProfileInfo";
import { Search } from "@/src/components/Search";
import ProfileHeading from "./components/ProfileHeading";
import { getUserLastRatedBooksById } from "../actions";
import { LastRatedBooks } from "./components/LastRatedBooks";

type ProfileProps = { params: { id: string } };

export default async function Profile({ params }: ProfileProps) {
  const lastRatedBooks = await getUserLastRatedBooksById({
    userId: "4383f783-6ce1-4f92-b1dd-7a7a693c4aef",
  });

  return (
    <div className="[&_>_aside:last-child]:mt-[4.625rem] grid grid-cols-[2fr_1fr] gap-16">
      <main className="flex flex-col gap-10">
        <ProfileHeading />
        <Search />
        <LastRatedBooks initialBooks={lastRatedBooks} />
      </main>

      <aside className="flex flex-col gap-8">
        <ProfileInfo />
      </aside>
    </div>
  );
}
