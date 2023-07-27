import { ReactNode } from "react";
import Navbar from "@/src/components/Navbar";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
