import * as Dialog from "@radix-ui/react-dialog";
import Icon from "./Icon";
import ButtonLogin from "./ButtonLogin";
import { PROVIDERS } from "../enums";

type ModalLoginProps = {
  text: string;
  open: boolean;
  onOpenChange(value: boolean): void;
};

export function ModalLogin({ text, open, onOpenChange }: ModalLoginProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-[#00000099] data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="flex flex-col gap-10 py-14 px-[4.5rem] data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[12px] bg-gray700 shadow-[4px_16px_24px_0px_rgba(0,_0,_0,_0.25)] focus:outline-none">
          <Dialog.Title className="text-gray200 m-0 text-md font-bold">
            {text}
          </Dialog.Title>
          <div className="flex flex-col gap-4 ">
            <ButtonLogin provider={PROVIDERS.GOOGLE} />
            <ButtonLogin provider={PROVIDERS.GITHUB} />
          </div>
          <Dialog.Close asChild>
            <button
              className="absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              <Icon name="X" size={24} className="text-gray400" />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
