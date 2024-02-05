import Description from "@/src/components/Description";
import { Rating as RatingComponent } from "@/src/components/Rating";
import { Time } from "@/src/components/Time";
import type { Book, Rating } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

type BookRatingProps = {
  variation?: "light" | "dark";
  post: Rating & {
    book: Book & {
      rate: number;
    };
  };
};

export default function BookRating({
  post,
  variation = "dark",
}: BookRatingProps) {
  return (
    <div className="flex flex-col gap-2">
      <Time date={post.created_at} />
      <Link
        href={`rate/${post.book.id}`}
        prefetch={false}
        data-variation={variation}
        className="flex flex-col gap-8 w-full p-6 rounded-md data-[variation='light']:bg-gray600 data-[variation='dark']:bg-gray700 border border-gray700 hover:border-gray600"
      >
        <RatingComponent value={post.book.rate} />

        <div className="grid grid-cols-[6.75rem_1fr] gap-5">
          <Image
            alt=""
            src={post.book.cover_url}
            width={108}
            height={152}
            className="rounded-xs"
          />
          <div className="flex flex-col gap-5">
            <div className="flex flex-col">
              <strong className="text-gray100 font-bold text-md leading-short">
                {post.book.name}
              </strong>
              <span className="text-gray400 text-sm leading-base">
                {post.book.author}
              </span>
            </div>

            <Description text={post.description} />
          </div>
        </div>
      </Link>
    </div>
  );
}
