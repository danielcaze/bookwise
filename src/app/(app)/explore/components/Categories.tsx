"use client";

import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Category } from "@prisma/client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

type CategoriesProps = {
  categories: Category[];
};

const _ALL_CATEGORIES = "all";

export function Categories({ categories }: CategoriesProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [selectedCategories, setSelectedCategories] = useState<string[]>(() => {
    const params = new URLSearchParams(searchParams);
    const queryValue = params.get("categories");
    const queryArray = queryValue
      ? typeof queryValue === "string" && queryValue.includes(",")
        ? queryValue.split(",")
        : [queryValue]
      : [];
    return queryArray;
  });
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: false,
    rtl: false,
    renderMode: "performance",
    mode: "snap",
    slides: {
      perView: "auto",
      spacing: 12,
    },
  });

  const handleToggleCategory = (categoryName: string) => {
    let newCategories: string[] = [];

    if (categoryName.toLowerCase() === _ALL_CATEGORIES) {
      newCategories = selectedCategories.includes(_ALL_CATEGORIES)
        ? []
        : [_ALL_CATEGORIES];
    } else {
      newCategories = selectedCategories.includes(_ALL_CATEGORIES)
        ? []
        : [...selectedCategories];

      if (selectedCategories.includes(categoryName.toLowerCase())) {
        newCategories = newCategories.filter(
          (item) => item.toLowerCase() !== categoryName.toLowerCase(),
        );
      } else {
        newCategories.push(categoryName);
      }
    }

    if (
      categories.every((cat) => newCategories.includes(cat.name.toLowerCase()))
    ) {
      newCategories = [_ALL_CATEGORIES];
    }

    setSelectedCategories(newCategories);

    const params = new URLSearchParams(searchParams);

    if (newCategories.toString()) {
      params.set("categories", newCategories.toString());
      router.push(`${pathname}?${params.toString()}`);
    } else {
      params.delete("categories");
      router.push(`${pathname}?${params.toString()}`);
    }
  };

  return (
    <div className="flex items-center gap-3">
      <button
        data-active={selectedCategories.includes(_ALL_CATEGORIES.toLowerCase())}
        onClick={() => handleToggleCategory(_ALL_CATEGORIES.toLowerCase())}
        className="rounded-full shrink-0 whitespace-nowrap overflow-ellipsis px-4 py-1 transition-all border border-purple100 text-purple100 data-[active='true']:border-purple200 data-[active='true']:bg-purple200 data-[active='true']:text-gray100"
      >
        Todos
      </button>
      <div ref={sliderRef} className="keen-slider flex items-center">
        {categories.map((category) => {
          return (
            <button
              key={category.id}
              data-active={selectedCategories.includes(
                category.name.toLowerCase(),
              )}
              style={{ minWidth: "fit-content" }}
              onClick={() => handleToggleCategory(category.name.toLowerCase())}
              className="keen-slider__slide rounded-full px-4 py-1 transition-all border border-purple100 text-purple100 data-[active='true']:border-purple200 data-[active='true']:bg-purple200 data-[active='true']:text-gray100"
            >
              {category.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
