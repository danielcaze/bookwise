import Heading from "@/src/components/Heading";
import { ProfileInfo } from "@/src/components/ProfileInfo";
import { Search } from "@/src/components/Search";
import ProfileHeading from "./components/ProfileHeading";

type ProfileProps = { params: { id: string } };

export default function Profile({ params }: ProfileProps) {
  return (
    <>
      <main className="flex flex-col gap-10">
        <ProfileHeading />
        <section className="">
          <Search />
        </section>
      </main>

      <aside className="flex flex-col gap-8">
        <ProfileInfo />
      </aside>
    </>
  );
}
