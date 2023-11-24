import { ReactNode } from "react";
import Navbar from "@/src/components/Navbar";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-[calc(14.5rem_+_1.25rem)_1fr] gap-24 bg-gray800">
      <div className="relative">
        <Navbar />
      </div>
      <div className="mt-[4.5rem] [&_>_aside:last-child]:mt-[4.625rem] grid grid-cols-[2fr_1fr] gap-16 mr-24">
        {children}
      </div>
    </div>
  );
}
