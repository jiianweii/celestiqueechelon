import { Icon } from "@iconify/react";

interface TextIconProps {
  icon: string;
  title: string;
}

export default function TextIcon({ icon, title }: TextIconProps) {
  return (
    <div className="flex gap-2 items-center">
      <Icon icon={icon} fontSize="1.2rem" />
      <p>{title}</p>
    </div>
  );
}
