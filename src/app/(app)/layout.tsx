import { ReactNode } from "react";
import Navbar from "@/src/components/Navbar";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-[calc(14.5rem_+_1.25rem)_1fr] gap-24 bg-gray800 min-h-screen">
      <div className="relative">
        <Navbar />
      </div>

      <div className="mt-[4.5rem] mr-24 max-w-[calc(100vw_-_14.5rem_-_1.25rem_-_6rem)] overflow-x-hidden">
        {children}
      </div>
    </div>
  );
}
