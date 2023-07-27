"use client";

import Image from "next/image";
import { PROVIDERS } from "../enum";
import { signIn } from "next-auth/react";

type ButtonLoginProps = {
  provider?: PROVIDERS;
};

export default function ButtonLogin({ provider }: ButtonLoginProps) {
  const logos = {
    [PROVIDERS.GOOGLE]: "/assets/google-icon.svg",
    [PROVIDERS.GITHUB]: "/assets/github-icon.svg",
  };

  const login = {
    [PROVIDERS.GOOGLE]: () => signIn(PROVIDERS.GOOGLE),
    [PROVIDERS.GITHUB]: () => signIn(PROVIDERS.GITHUB),
  };

  const handleLogin = async () =>
    provider ? login[provider]() : console.log("Logou");

  return (
    <button
      className="w-full flex items-center gap-5 py-5 px-6 bg-gray600 rounded-md"
      onClick={handleLogin}
    >
      <Image
        alt=""
        src={provider ? logos[provider] : "/assets/rocket-icon.svg"}
        height={32}
        width={32}
      />
      <span className="text-gray200 text-lg">
        {provider
          ? `Entrar com ${provider.charAt(0).toUpperCase() + provider.slice(1)}`
          : "Acessar como visitante"}
      </span>
    </button>
  );
}
