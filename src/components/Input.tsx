import {
  ForwardRefRenderFunction,
  ForwardedRef,
  InputHTMLAttributes,
  forwardRef,
} from "react";
import { twMerge } from "tailwind-merge";
import Icon from "./Icon";

type InputComponentProps = InputHTMLAttributes<HTMLInputElement> & {
  onSubmitSearch?: () => void;
};

const InputComponent: ForwardRefRenderFunction<
  HTMLInputElement,
  InputComponentProps
> = (
  { className, onSubmitSearch, ...props },
  ref: ForwardedRef<HTMLInputElement>,
) => {
  return (
    <div
      className={twMerge(
        "inner-focus-group flex items-center justify-between gap-2 px-5 py-[0.875rem] border border-gray500 grid-cols-[1fr_1.25rem] rounded-xs bg-gray800 focus-within:outline",
        className,
      )}
    >
      <input
        {...props}
        ref={ref}
        className="placeholder:text-gray-400 text-gray-400 bg-transparent outline-none flex-1"
      />
      <button onClick={onSubmitSearch}>
        <Icon name="MagnifyingGlass" size={20} className="text-gray500" />
      </button>
    </div>
  );
};

export const Input = forwardRef(InputComponent);
