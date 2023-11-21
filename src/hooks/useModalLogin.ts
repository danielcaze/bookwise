import { useContext } from "react";
import { ModalLoginContext } from "../contexts/ModalLoginContext";
import { LOGIN_MESSAGES } from "../enums";

export const useModalLogin = () => {
  const context = useContext(ModalLoginContext);

  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }

  const { setMessage, setOpen } = context;

  const showModalWithMessage = (customMessage: LOGIN_MESSAGES) => {
    setMessage(customMessage);
    setOpen(true);
  };

  return {
    ...context,
    showModalWithMessage,
  };
};
