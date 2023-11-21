import { ReactNode, createContext, useState } from "react";
import { ModalLogin } from "../components/ModalLogin";

type ModalLoginContextProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
  message: string;
  setMessage: (value: string) => void;
  toggleModal: () => void;
};

export const ModalLoginContext = createContext({} as ModalLoginContextProps);

type ModalLoginProviderProps = {
  children: ReactNode;
};

export const ModalLoginProvider = ({ children }: ModalLoginProviderProps) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const toggleModal = () => setOpen((prev) => !prev);

  return (
    <ModalLoginContext.Provider
      value={{ open, message, setOpen, setMessage, toggleModal }}
    >
      {children}
      <ModalLogin text={message} onOpenChange={setOpen} open={open} />
    </ModalLoginContext.Provider>
  );
};
