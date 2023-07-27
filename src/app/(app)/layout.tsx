import { ReactNode } from "react";
import Navbar from "@/src/components/Navbar";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-[calc(14.5rem_+_1.25rem)_2fr_1fr] gap-24 bg-gray800">
      <div className="relative">
        <Navbar />
      </div>
      {children}
    </div>
  );
}
