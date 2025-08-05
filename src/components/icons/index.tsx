import { cn } from "@/lib/common";
import { type ComponentProps, type SVGProps } from "react";
import IconMenu from "./icon-menu";
import IconSun from "./icon-sun";

export const icons = {
  menu: (props: SVGProps<SVGSVGElement>) => <IconMenu {...props} />,
  sun: (props: SVGProps<SVGSVGElement>) => <IconSun {...props} />,
};

export type IconName = keyof typeof icons;
type IconComponentProps = ComponentProps<"svg"> & {
  name: IconName;
};

const Icon: React.FC<IconComponentProps> = ({ name, ...props }) => {
  const Component = icons[name];
  const classes = cn("fill-current", props.className);
  return <Component className={classes} {...props} />;
};

export default Icon;
