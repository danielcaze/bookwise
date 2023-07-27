"use client";

import { Star } from "@phosphor-icons/react";

type RatingProps = {
  size?: number;
  value: number;
  setValue?(value: number): void;
};

export function Rating({ size = 5, value, setValue }: RatingProps) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: size })
        .fill(0)
        .map((_, index) => index + 1)
        .map((item) => {
          const isMarked = value >= item;
          return (
            <button
              key={item}
              disabled={!setValue}
              className="disabled:cursor-[inherit]"
              onClick={() => setValue?.(item)}
            >
              <Star
                size={16}
                weight={isMarked ? "fill" : "regular"}
                className="text-purple100"
              />
            </button>
          );
        })}
    </div>
  );
}
