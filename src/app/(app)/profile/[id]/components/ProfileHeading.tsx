"use client";

import ActionButton from "@/src/components/ActionButton";
import Heading from "@/src/components/Heading";
import { useSession } from "next-auth/react";
import { useParams, useRouter } from "next/navigation";
import { Suspense } from "react";

export default function ProfileHeading() {
  const { data } = useSession();
  const router = useRouter();
  const params = useParams();

  const isLoggedUserPage =
    data && data.user && data.user.id && data.user.id === params.id;

  return (
    <Suspense>
      {isLoggedUserPage ? (
        <Heading text="Perfil" icon="User" />
      ) : (
        <div>
          <ActionButton
            beforeIcon
            afterIcon={false}
            text="Voltar"
            variation={{
              color: "gray",
            }}
            onClick={router.back}
          />
        </div>
      )}
    </Suspense>
  );
}
