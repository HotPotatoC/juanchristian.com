import { cn } from "@/lib/common";
import { Slot } from "radix-ui";
import { forwardRef } from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot.Root : "button";
    return (
      <Comp className={cn(className, "cursor-pointer")} ref={ref} {...props} />
    );
  }
);

Button.displayName = "Button";

export default Button;
