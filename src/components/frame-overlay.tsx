"use client";
import { expoEaseInOut } from "@/lib/animation-transitions";
import { motion } from "motion/react";

type FrameProps = {
  size: string;
};

const LeftFrame = ({ size }: FrameProps) => (
  <motion.div
    initial={{ width: "screen" }}
    animate={{ width: size }}
    className='fixed left-0 top-0 z-[1000] w-screen h-screen bg-white'
    transition={{
      duration: 1,
      ease: expoEaseInOut,
    }}
  />
);

const RightFrame = ({ size }: FrameProps) => (
  <motion.div
    initial={{ width: "screen" }}
    animate={{ width: size }}
    className='fixed right-0 top-0 z-[1000] w-screen h-screen bg-white'
    transition={{
      duration: 1,
      ease: expoEaseInOut,
    }}
  />
);

const TopFrame = ({ size }: FrameProps) => (
  <motion.div
    initial={{ height: "screen" }}
    animate={{ height: size }}
    className='fixed left-0 top-0 z-[1000] w-screen h-screen bg-white'
    transition={{
      duration: 1,
      ease: expoEaseInOut,
    }}
  />
);

const BottomFrame = ({ size }: FrameProps) => (
  <motion.div
    initial={{ height: "screen" }}
    animate={{ height: size }}
    className='fixed left-0 bottom-0 z-[1000] w-screen h-screen bg-white'
    transition={{
      duration: 1,
      ease: expoEaseInOut,
    }}
  />
);

const frameSize = "15px";

export default function FrameOverlay() {
  return (
    <>
      <LeftFrame size={frameSize} />
      <RightFrame size={frameSize} />
      <TopFrame size={frameSize} />
      <BottomFrame size={frameSize} />
    </>
  );
}
