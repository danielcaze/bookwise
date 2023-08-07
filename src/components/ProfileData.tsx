import * as Icons from "@phosphor-icons/react";
import Icon from "./Icon";

type ProfileDataProps = {
  icon: keyof typeof Icons;
  title: string;
  subtitle: string;
};

export function ProfileData({ icon, subtitle, title }: ProfileDataProps) {
  return (
    <div className="grid grid-cols-[2rem_1fr] items-center gap-5">
      <Icon name={icon} size={32} className="text-green100" />
      <div className="overflow-hidden">
        <p className="text-gray200 text-md leading-short font-bold truncate">
          {title}
        </p>
        <span className="block text-gray300 text-sm leading-base truncate">
          {subtitle}
        </span>
      </div>
    </div>
  );
}
