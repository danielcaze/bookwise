"use client";

import { SignOut } from "@phosphor-icons/react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import Avatar from "./Avatar";

export default function LoginStatus() {
  const { data } = useSession();

  const handleSignOut = async () => {
    try {
      await signOut({
        callbackUrl: "http://localhost:3000",
        redirect: true,
      });
    } catch (error) {
      console.error(error);
    }
  };

  if (data) {
    return (
      <div className="grid grid-cols-[2rem_1fr_1.25rem] items-center gap-3">
        <Avatar url={data.user.avatar_url} />
        <p className="text-gray200 text-sm truncate">{data.user.name}</p>
        <button onClick={handleSignOut}>
          <SignOut size={20} className="text-danger" />
        </button>
      </div>
    );
  }

  return (
    <Link className="flex items-center gap-3" href="/login">
      <span className="text-md text-gray200">Fazer login</span>
      <SignOut size={20} className="text-green100" />
    </Link>
  );
}