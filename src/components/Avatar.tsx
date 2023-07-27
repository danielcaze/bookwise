import React from "react";
import * as AvatarComposition from "@radix-ui/react-avatar";
import { User } from "@phosphor-icons/react";
const { Root, Image, Fallback } = AvatarComposition;

type AvatarProps = {
  url: string;
  variation?: "sm" | "md" | "lg";
};

export default function Avatar({ url, variation = "lg" }: AvatarProps) {
  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 36,
  };

  return (
    <div className="flex gap-5">
      <Root
        data-variation={variation}
        className="bg-gray700 inline-flex select-none items-center justify-center overflow-hidden rounded-full align-middle data-[variation='sm']:h-[2rem] data-[variation='sm']:w-[2rem] data-[variation='md']:h-[2.5rem] data-[variation='md']:w-[2.5rem] data-[variation='lg']:h-[4.5rem] data-[variation='lg']:w-[4.5rem]"
      >
        <Image
          className="h-full w-full rounded-[inherit] object-cover"
          src={url}
          alt=""
        />
        <Fallback
          className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-gray700 dark:bg-gray-100 text-[15px] font-medium"
          delayMs={600}
        >
          <User
            size={iconSizes[variation]}
            className="text-gray-100 dark:text-gray700"
          />
        </Fallback>
      </Root>
    </div>
  );
}
