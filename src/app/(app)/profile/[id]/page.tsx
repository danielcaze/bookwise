import { ProfileInfo } from "@/src/components/ProfileInfo";
import { SearchInput } from "@/src/components/SearchInput";
import ProfileHeading from "./components/ProfileHeading";
import { LastRatedBooks } from "./components/LastRatedBooks";

type ProfileProps = { params: { id: string } };

export default async function Profile({ params }: ProfileProps) {
  return (
    <div className="[&_>_aside:last-child]:mt-[4.625rem] grid grid-cols-[2fr_1fr] gap-16">
      <main className="flex flex-col gap-10">
        <ProfileHeading />
        <SearchInput placeholder="Buscar livro avaliado" />
        <LastRatedBooks />
      </main>

      <aside className="flex flex-col gap-8">
        <ProfileInfo id={params.id} />
      </aside>
    </div>
  );
}
