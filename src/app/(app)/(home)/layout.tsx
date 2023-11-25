import { ReactNode } from "react";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="[&_>_aside:last-child]:mt-[4.625rem] grid grid-cols-[2fr_1fr] gap-16">
      {children}
    </div>
  );
}
