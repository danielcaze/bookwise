import { ButtonHTMLAttributes } from "react";
import Icon from "./Icon";
import { twMerge } from "tailwind-merge";

type ActionButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  icon?: boolean;
  color?: "gray" | "purple";
  size?: "md" | "sm";
};

export default function ActionButton({
  icon = true,
  text,
  color = "purple",
  size = "md",
  className,
  ...props
}: ActionButtonProps) {
  return (
    <button
      {...props}
      data-color={color}
      data-size={size}
      className={twMerge(
        "flex items-center gap-2 p-2 data-[size='sm']:text-sm data-[color='purple']:text-purple100 data-[color='gray']:text-gray200 transition-all hover:data-[color='purple']:bg-action-hover-purple100 hover:data-[color='gray']:bg-action-hover-gray200 rounded-xs",
        className,
      )}
    >
      <span className="font-bold">{text}</span>
      {icon && <Icon name="CaretRight" size={size === "md" ? 20 : 16} />}
    </button>
  );
}
