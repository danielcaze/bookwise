"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";

export function Search() {
  return (
    <div className="inner-focus-group rounded-xs border border-gray500 px-5 py-3.5 grid grid-cols-[1fr_1.25rem] gap-2 items-center">
      <input
        type="text"
        className="all-unset !text-gray400 placeholder:text-gray400"
        placeholder="Buscar livro avaliado"
      />
      <MagnifyingGlass className="text-gray500" size={20} />
    </div>
  );
}
