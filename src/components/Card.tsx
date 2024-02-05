import Image from "next/image";
import Avatar from "./Avatar";
import { Rating } from "./Rating";
import Link from "next/link";
import Description from "./Description";
import { Time } from "./Time";
import { Book, User } from "@prisma/client";

type CardProps = {
  variation?: "light" | "dark";
  post: {
    created_at: Date;
    user: Pick<User, "id" | "name" | "avatar_url">;
    book: Pick<Book, "author" | "cover_url" | "id" | "name"> & {
      description: string;
      rate: number;
    };
  };
};

export default function Card({ post, variation = "dark" }: CardProps) {
  return (
    <Link
      href="/teste"
      prefetch={false}
      data-variation={variation}
      className="flex flex-col gap-8 w-full p-6 rounded-md data-[variation='light']:bg-gray600 data-[variation='dark']:bg-gray700 border border-gray700 hover:border-gray600"
    >
      <div className="flex items-start gap-4">
        <Avatar
          avatarUrl={post.user.avatar_url}
          redirectUrl={`/profile/${post.user.id}`}
          variation="md"
        />

        <div className="flex-1">
          <p className="text-md leading-base text-gray100">{post.user.name}</p>
          <Time date={post.created_at} />
        </div>
        <Rating value={post.book.rate} />
      </div>

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

          <Description text={post.book.description} />
        </div>
      </div>
    </Link>
  );
}
