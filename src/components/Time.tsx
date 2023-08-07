"use client";

import type { Dayjs } from "dayjs";
import { Suspense, TimeHTMLAttributes, useEffect, useState } from "react";
import { getFormattedDate, getRelativeTime } from "../libs/dayjs";
import { twMerge } from "tailwind-merge";

type TimeProps = TimeHTMLAttributes<HTMLTimeElement> & {
  date: string | number | Dayjs | Date | null | undefined;
};

export function Time({ date, className, ...props }: TimeProps) {
  const [formattedDate, setFormattedDate] = useState("");
  const [relativeTime, setRelativeTime] = useState("");

  useEffect(() => {
    const getTimes = async () => {
      const formattedDate = await getFormattedDate(date);
      setFormattedDate(formattedDate);
      const relativeTime = await getRelativeTime(date);
      setRelativeTime(relativeTime);
    };
    getTimes();
  }, [date]);

  return (
    <Suspense>
      <time
        {...props}
        className={twMerge("text-gray400 text-sm leading-base", className)}
        title={formattedDate}
      >
        {relativeTime}
      </time>
    </Suspense>
  );
}
