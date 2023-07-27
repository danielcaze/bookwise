"use client";

import { useState } from "react";
import { truncate } from "../utils";

type DescriptionProps = {
  text: string;
};

export default function Description({ text }: DescriptionProps) {
  const [showMore, setShowMore] = useState(false);
  console.log(showMore);
  return (
    <p className="text-gray300 leading-base text-sm">
      {text.length > 200 ? truncate(text, showMore ? text.length : 200) : text}{" "}
      {text.length > 200 && (
        <button
          onClick={(e) => {
            e.preventDefault();
            setShowMore((state) => !state);
          }}
          className="text-purple100 font-bold leading-base text-sm"
        >
          {showMore ? "ver menos" : "ver mais"}
        </button>
      )}
    </p>
  );
}
