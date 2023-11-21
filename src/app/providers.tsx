"use client";

import { SessionProvider } from "next-auth/react";
import { ModalLoginProvider } from "../contexts/ModalLoginContext";

export interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <SessionProvider>
      <ModalLoginProvider>{children}</ModalLoginProvider>
    </SessionProvider>
  );
}
