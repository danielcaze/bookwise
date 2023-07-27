import { ReactNode } from "react";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Providers from "./providers";
import "@/src/styles/globals.css";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Bookwise",
    template: "%s | Bookwise",
  },
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
