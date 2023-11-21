"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Binoculars, ChartLineUp, User } from "@phosphor-icons/react";
import { useSession } from "next-auth/react";
import { useModalLogin } from "../hooks/useModalLogin";
import { LOGIN_MESSAGES } from "../enums";

export default function NavigationList() {
  const { data } = useSession();
  const pathname = usePathname();
  const { showModalWithMessage } = useModalLogin();

  const _ROUTES = [
    {
      id: 1,
      disabled: false,
      need_authentication: false,
      path: "/",
      text: "Início",
      get icon() {
        const isPath = pathname === this.path;
        return <ChartLineUp size={24} weight={isPath ? "bold" : "regular"} />;
      },
    },
    {
      id: 2,
      disabled: false,
      need_authentication: false,
      path: "/explore",
      text: "Explorar",
      get icon() {
        const isPath = pathname === this.path;
        return <Binoculars size={24} weight={isPath ? "bold" : "regular"} />;
      },
    },
    {
      id: 3,
      disabled: false,
      need_authentication: !data,
      path: `/profile/${data?.user.id}`,
      text: "Perfil",
      get icon() {
        const isPath = pathname.includes("/profile");
        return <User size={24} weight={isPath ? "bold" : "regular"} />;
      },
    },
  ];

  return (
    <ul className="flex flex-col gap-11">
      {_ROUTES
        .filter((route) => !route.disabled)
        .map((route) => {
          const currentlySelected =
            pathname === route.path ||
            (pathname.includes("/profile") && route.path.includes("/profile"));

          if (route.need_authentication) {
            return (
              <li
                key={route.id}
                className="grid grid-cols-[0.250rem_1fr] gap-4 before:block before:content-[''] before:h-6 before:w-1 before:rounded-full data-[selected='true']:before:bg-gradient-vertical [&_svg]:data-[selected='true']:text-gray100 [&_span]:data-[selected='true']:text-gray100 [&_span]:data-[selected='true']:font-bold [&_span]:hover:text-gray100 [&_svg]:hover:text-gray100"
                data-selected={currentlySelected}
              >
                <button
                  className="grid grid-cols-[1.5rem_1fr] items-center gap-3"
                  onClick={() => showModalWithMessage(LOGIN_MESSAGES.PROFILE)}
                >
                  {route.icon}
                  <span className="text-gray400 text-md max-w-full truncate leading-base text-start">
                    {route.text}
                  </span>
                </button>
              </li>
            );
          }

          return (
            <li
              key={route.id}
              className="grid grid-cols-[0.250rem_1fr] gap-4 before:block before:content-[''] before:h-6 before:w-1 before:rounded-full data-[selected='true']:before:bg-gradient-vertical [&_svg]:data-[selected='true']:text-gray100 [&_span]:data-[selected='true']:text-gray100 [&_span]:data-[selected='true']:font-bold [&_span]:hover:text-gray100 [&_svg]:hover:text-gray100"
              data-selected={currentlySelected}
            >
              <Link
                className="grid grid-cols-[1.5rem_1fr] items-center gap-3 "
                href={route.path}
              >
                {route.icon}
                <span className="text-gray400 text-md max-w-full truncate leading-base text-start">
                  {route.text}
                </span>
              </Link>
            </li>
          );
        })}
    </ul>
  );
}
