import Image from "next/image";
import { Rating } from "./Rating";
import Link from "next/link";
import { Book } from "@prisma/client";

type SmallCardProps = {
  book: Pick<Book, "id" | "name" | "cover_url" | "author"> & {
    rate: number;
  };
};

export default function SmallCard({ book }: SmallCardProps) {
  return (
    <Link
      href={`/book/${book.id}`}
      prefetch={false}
      className="bg-gray700 w-full h-[8.125rem] rounded-md grid grid-cols-[4rem_1fr] gap-5 px-5 py-[1.125rem] border border-gray700 hover:border-gray600"
    >
      <Image
        alt=""
        src={book.cover_url}
        height={94}
        width={64}
        className="rounded-xs"
      />
      <div className="flex flex-col justify-between">
        <div>
          <p className="text-gray100 text-md font-bold leading-short max-h-11 truncate-2">
            {book.name}
          </p>
          <span className="text-gray400 text-sm leading-base">
            {book.author}
          </span>
        </div>
        <Rating value={book.rate} />
      </div>
    </Link>
  );
}
