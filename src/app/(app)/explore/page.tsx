import Heading from "@/src/components/Heading";
import { SearchInput } from "@/src/app/(app)/explore/components/SearchInput";
import { getCategories } from "./actions";
import { Categories } from "./components/Categories";
import { BooksList } from "./components/BooksList";

export default async function Explore() {
  const categories = await getCategories();

  return (
    <main className="flex flex-col gap-12">
      <div className="flex flex-col gap-10">
        <Heading
          text="Explorar"
          icon="Binoculars"
          customItem={<SearchInput />}
        />
        <Categories categories={categories} />
      </div>
      <BooksList />
    </main>
  );
}
