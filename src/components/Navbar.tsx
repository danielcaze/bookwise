import Image from "next/image";
import NavigationList from "./NavigationList";
import LoginStatus from "./LoginStatus";

export default function Navbar() {
  return (
    <nav className="fixed top-5 bottom-5 left-5 bg-gradient-vertical-opaque bg-gray700 h-[calc(100%_-_2.5rem)] w-[14.5rem] rounded-2xl flex flex-col justify-between pt-10 pb-6 px-14">
      <div className="flex flex-col gap-16">
        <Image alt="" src="/assets/logo.svg" width={128} height={32} />
        <NavigationList />
      </div>
      <LoginStatus />
    </nav>
  );
}
