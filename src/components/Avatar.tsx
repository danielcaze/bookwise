"use client";

import React from "react";
import * as AvatarComposition from "@radix-ui/react-avatar";
import { User } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

type AvatarProps = {
  avatarUrl: string;
  redirectUrl?: string;
  variation?: "sm" | "md" | "lg";
};

export default function Avatar({
  avatarUrl,
  redirectUrl,
  variation = "sm",
}: AvatarProps) {
  const { push } = useRouter();

  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 36,
  };

  const InnerAvatar = () => (
    <AvatarComposition.Root
      data-variation={variation}
      className="bg-gray700 inline-flex select-none items-center justify-center overflow-hidden rounded-full align-middle data-[variation='sm']:h-[2rem] data-[variation='sm']:w-[2rem] data-[variation='md']:h-[2.5rem] data-[variation='md']:w-[2.5rem] data-[variation='lg']:h-[4.5rem] data-[variation='lg']:w-[4.5rem] [&_>_div]:data-[variation='sm']:p-[1px] [&_>_div]:data-[variation='md']:p-[2px] [&_>_div]:data-[variation='lg']:p-[3px]"
    >
      <div className="h-full w-full bg-gradient-vertical rounded-[inherit] overflow-hidden">
        <AvatarComposition.Image
          className="h-full w-full rounded-[inherit] object-cover"
          src={avatarUrl}
          alt=""
        />
        <AvatarComposition.Fallback
          className="flex h-full w-full items-center justify-center bg-gray700 dark:bg-gray-100 font-medium rounded-[inherit]"
          delayMs={600}
        >
          <User
            size={iconSizes[variation]}
            className="text-gray-100 dark:text-gray700"
          />
        </AvatarComposition.Fallback>
      </div>
    </AvatarComposition.Root>
  );

  return (
    <>
      {redirectUrl ? (
        <button
          className="flex gap-5"
          onClick={(e) => {
            e.preventDefault();
            push(redirectUrl);
          }}
        >
          <InnerAvatar />
        </button>
      ) : (
        <div className="flex gap-5">
          <InnerAvatar />
        </div>
      )}
    </>
  );
}
