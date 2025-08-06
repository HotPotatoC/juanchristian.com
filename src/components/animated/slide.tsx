import { expoEaseInOut } from "@/lib/animation-transitions";
import { HTMLMotionProps, motion } from "motion/react";

type AnimateSlideProps = {
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  delay?: number;
  children: React.ReactNode;
} & HTMLMotionProps<"div">;

const AnimateSlide = ({
  direction = "up",
  duration = 3,
  delay = 0,
  children,
  ...props
}: AnimateSlideProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: direction === "up" ? 50 : direction === "down" ? -50 : undefined,
        x: direction === "left" ? 50 : direction === "right" ? -50 : undefined,
      }}
      transition={{
        duration,
        ease: expoEaseInOut,
        delay,
      }}
      whileInView={{
        opacity: 1,
        y: direction === "up" ? 0 : direction === "down" ? 0 : undefined,
        x: direction === "left" ? 0 : direction === "right" ? 0 : undefined,
      }}
      exit={{
        opacity: 0,
        y: direction === "up" ? -50 : direction === "down" ? 50 : undefined,
        x: direction === "left" ? -50 : direction === "right" ? 50 : undefined,
      }}
      viewport={{ once: true, margin: "10px" }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimateSlide;
