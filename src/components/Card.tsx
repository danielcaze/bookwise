import Image from "next/image";
import Avatar from "./Avatar";
import { Rating } from "./Rating";
import Link from "next/link";
import Description from "./Description";

export default function Card() {
  return (
    <Link
      href="/teste"
      className="flex flex-col gap-8 w-full p-6 rounded-md bg-gray700 border border-gray700 hover:border-gray600"
    >
      <div className="flex items-start gap-4">
        <Avatar url="https://source.unsplash.com/random" variation="md" />
        <div className="flex-1">
          <p className="text-md leading-base text-gray100">Daniel Cazé</p>
          <time
            className="text-gray400 text-sm leading-base"
            title="3 de maio às 20:00h"
          >
            há ceca de um ano
          </time>
        </div>
        <Rating value={1} />
      </div>

      <div className="grid grid-cols-[6.75rem_1fr] gap-5">
        <Image
          alt=""
          src="/assets/Book.png"
          width={108}
          height={152}
          className="rounded-xs"
        />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col">
            <strong className="text-gray100 font-bold text-md leading-short">
              O Hobbit
            </strong>
            <span className="text-gray400 text-sm leading-base">
              J.R.R Tolkien
            </span>
          </div>

          <Description text="Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed vulputate massa velit nibha" />
        </div>
      </div>
    </Link>
  );
}
