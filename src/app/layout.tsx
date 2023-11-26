import { ReactNode } from "react";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Providers from "./providers";
import "../libs/dayjs";
import "../styles/globals.css";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: [
    {
      url: "/assets/favicon.png",
    },
  ],
  title: {
    default: "Bookwise",
    template: "%s | Bookwise",
  },
  description:
    "Explore expert and community book reviews, ratings, and discussions. Find your next great read with personalized recommendations on Bookwise",
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
