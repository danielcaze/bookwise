import * as Icons from "@phosphor-icons/react";
import Icon from "./Icon";

type HeadingProps = {
  text: string;
  icon?: keyof typeof Icons;
};

export default function Heading({ icon, text }: HeadingProps) {
  return (
    <div className="flex items-center gap-3">
      {icon && (
        <Icon name={icon} className="text-green100" height={32} width={32} />
      )}
      <h1 className="text-gray100 text-2xl leading leading-short">{text}</h1>
    </div>
  );
}
