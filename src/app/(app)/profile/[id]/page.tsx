import Heading from "@/src/components/Heading";

export default function Profile() {
  return (
    <>
      <main className="flex flex-col gap-10">
        <Heading text="Profile" icon="User" />
      </main>

      <aside className="flex flex-col gap-8"></aside>
    </>
  );
}
