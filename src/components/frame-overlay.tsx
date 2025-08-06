"use client";
import { expoEaseInOut } from "@/lib/animation-transitions";
import { cn } from "@/lib/common";
import { useMenu } from "@/providers/menu-provider";
import { cva } from "class-variance-authority";
import { HTMLMotionProps, motion } from "motion/react";
import { usePathname } from "next/navigation";

type FrameProps = {
  menuStatus: "open" | "closed";
} & HTMLMotionProps<"div">;

const frameSize = "10px";

const LeftFrame = ({ menuStatus, className, ...props }: FrameProps) => (
  <motion.div
    initial={{ width: "screen" }}
    animate={menuStatus}
    variants={{
      open: { width: 0 },
      closed: { width: frameSize },
    }}
    className={cn(className, "fixed left-0 top-0")}
    transition={{
      duration: 1,
      ease: expoEaseInOut,
    }}
    {...props}
  />
);

const RightFrame = ({ menuStatus, className, ...props }: FrameProps) => (
  <motion.div
    initial={{ width: "screen" }}
    animate={menuStatus}
    variants={{
      open: { width: 0 },
      closed: { width: frameSize },
    }}
    className={cn(className, "fixed right-0 top-0")}
    transition={{
      duration: 1,
      ease: expoEaseInOut,
    }}
    {...props}
  />
);

const TopFrame = ({ menuStatus, className, ...props }: FrameProps) => (
  <motion.div
    initial={{ height: "screen" }}
    animate={menuStatus}
    variants={{
      open: { height: 0 },
      closed: { height: frameSize },
    }}
    className={cn(className, "fixed left-0 top-0")}
    transition={{
      duration: 1,
      ease: expoEaseInOut,
    }}
    {...props}
  />
);

const BottomFrame = ({ menuStatus, className, ...props }: FrameProps) => (
  <motion.div
    initial={{ height: "screen" }}
    animate={menuStatus}
    variants={{
      open: { height: 0 },
      closed: { height: frameSize },
    }}
    className={cn(className, "fixed left-0 bottom-0")}
    transition={{
      duration: 1,
      ease: expoEaseInOut,
    }}
    {...props}
  />
);

export default function FrameOverlay() {
  const { isOpen } = useMenu();

  const pathVariants = {
    home: "bg-red",
    about: "bg-red",
    works: "bg-red",
  };

  const path = usePathname().replace("/", "") as keyof typeof pathVariants;

  const frameVariants = cva(["z-[1000]", "w-screen", "h-screen", "bg-red"], {
    variants: {
      path: pathVariants,
    },
  });

  return (
    <>
      <LeftFrame
        menuStatus={isOpen ? "open" : "closed"}
        className={frameVariants({ path })}
      />
      <RightFrame
        menuStatus={isOpen ? "open" : "closed"}
        className={frameVariants({ path })}
      />
      <TopFrame
        menuStatus={isOpen ? "open" : "closed"}
        className={frameVariants({ path })}
      />
      <BottomFrame
        menuStatus={isOpen ? "open" : "closed"}
        className={frameVariants({ path })}
      />
    </>
  );
}
