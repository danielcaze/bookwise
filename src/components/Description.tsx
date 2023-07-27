"use client";

import { useState } from "react";
import { truncate } from "../utils";

type DescriptionProps = {
  text: string;
};

export default function Description({ text }: DescriptionProps) {
  const [showMore, setShowMore] = useState(false);

  return (
    <p
      className={`text-gray300 leading-base text-sm ${
        showMore ? "truncate-4" : "truncate-4"
      }`}
    >
      {text.length > 230 ? truncate(text, showMore ? 230 : text.length) : text}{" "}
      {text.length > 230 && (
        <button
          onClick={(e) => {
            e.preventDefault();
            setShowMore((state) => !state);
          }}
          className="text-purple100 font-bold leading-base text-sm"
        >
          {showMore ? "ver mais" : "ver menos"}
        </button>
      )}
    </p>
  );
}
