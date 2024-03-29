"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useRef, useEffect } from "react";
import { Input } from "./Input";

type SearchInputProps = {
  placeholder?: string;
};

export function SearchInput({ placeholder = "Buscar" }: SearchInputProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams);

    if (searchRef.current?.value) {
      params.set("search", searchRef.current.value);

      router.push(`${pathname}?${params.toString()}`);
    } else {
      params.delete("search");
      router.push(`${pathname}?${params.toString()}`);
    }
  };

  useEffect(() => {
    if (searchParams.has("search") && searchRef.current) {
      searchRef.current.value = searchParams.get("search")!;
    }
  }, [searchRef.current]);

  return (
    <Input
      placeholder={placeholder}
      onSubmitSearch={handleSearch}
      ref={searchRef}
      className="max-lg:w-full"
    />
  );
}
