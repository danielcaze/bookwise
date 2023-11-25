import * as Icons from "@phosphor-icons/react";
import Icon from "./Icon";
import { ReactNode } from "react";

type HeadingProps = {
  text: string;
  icon?: keyof typeof Icons;
  customItem?: ReactNode;
};

export default function Heading({ icon, text, customItem }: HeadingProps) {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-3">
      <div className="flex items-center gap-3 max-lg:self-start">
        {icon && (
          <Icon name={icon} className="text-green100" height={32} width={32} />
        )}
        <h1 className="text-gray100 text-2xl leading leading-short">{text}</h1>
      </div>
      {customItem ?? <></>}
    </div>
  );
}
