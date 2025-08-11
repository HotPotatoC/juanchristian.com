"use client";
import { expoEaseInOut } from "@/lib/animation-transitions";
import { cn } from "@/lib/common";
import { useFrameOverlay } from "@/providers/frame-overlay-provider";
import { useMenu } from "@/providers/menu-provider";
import { cva } from "class-variance-authority";
import { HTMLMotionProps, motion } from "motion/react";
import { usePathname } from "next/navigation";
import * as React from "react";

type FrameProps = {
  menuStatus: "open" | "closed";
  frameSize: string;
} & HTMLMotionProps<"div">;

const LeftFrame = ({
  menuStatus,
  frameSize,
  className,
  ...props
}: FrameProps) => (
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

const RightFrame = ({
  menuStatus,
  frameSize,
  className,
  ...props
}: FrameProps) => (
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

const TopFrame = ({
  menuStatus,
  frameSize,
  className,
  ...props
}: FrameProps) => (
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

const BottomFrame = ({
  menuStatus,
  frameSize,
  className,
  ...props
}: FrameProps) => (
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
  const { isOverlayVisible, closeOverlay, expandOverlay, frameSize } =
    useFrameOverlay();
  const { isOpen: menuIsOpen } = useMenu();

  React.useEffect(() => {
    if (menuIsOpen) {
      closeOverlay();
    } else if (!menuIsOpen && !isOverlayVisible) {
      expandOverlay();
    }
  }, [menuIsOpen, closeOverlay, expandOverlay, isOverlayVisible]);

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
        menuStatus={isOverlayVisible ? "closed" : "open"}
        frameSize={frameSize}
        className={frameVariants({ path })}
      />
      <RightFrame
        menuStatus={isOverlayVisible ? "closed" : "open"}
        frameSize={frameSize}
        className={frameVariants({ path })}
      />
      <TopFrame
        menuStatus={isOverlayVisible ? "closed" : "open"}
        frameSize={frameSize}
        className={frameVariants({ path })}
      />
      <BottomFrame
        menuStatus={isOverlayVisible ? "closed" : "open"}
        frameSize={frameSize}
        className={frameVariants({ path })}
      />
    </>
  );
}
