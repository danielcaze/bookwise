import Image from "next/image";
import ButtonLogin from "@/src/components/ButtonLogin";
import { PROVIDERS } from "@/src/enum";

export default function Login() {
  return (
    <div className="h-screen bg-gray800 p-5 flex gap-5 items-center justify-center flex-col md:flex-row md:justify-start">
      <div className="relative w-full rounded-lg overflow-hidden md:max-w-[598px] md:h-full">
        <Image
          className="max-md:hidden"
          alt="Blonde woman laid on the couch reading a book with Bookwise's logo on the middle"
          src="/assets/image-login.png"
          layout="fill"
          objectFit="cover"
        />

        <Image
          className="max-md:w-[18rem] max-md:mx-auto md:absolute md:top-2/4 md:left-2/4 md:-translate-x-2/4 md:-translate-y-2/4"
          alt=""
          src="/assets/logo.svg"
          width={232}
          height={58}
        />
      </div>
      <div className="w-full">
        <div className="max-w-[18rem] w-full mx-auto flex flex-col gap-10 justify-center items-center justify-self-center align-self-center">
          <div className="w-full">
            <strong className="text-gray100 text-lg">Boas vindas!</strong>
            <p className="text-gray200 text-md">
              Faça seu login ou acesse como visitante.
            </p>
          </div>

          <div className="w-full flex flex-col gap-4">
            <ButtonLogin provider={PROVIDERS.GOOGLE} />
            <ButtonLogin provider={PROVIDERS.GITHUB} />
            <ButtonLogin />
          </div>
        </div>
      </div>
    </div>
  );
}
