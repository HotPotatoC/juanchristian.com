import { expoEaseInOut } from "@/lib/animation-transitions";
import { HTMLMotionProps, motion } from "motion/react";

type SlideUpProps = {
  duration?: number;
  delay?: number;
  children: React.ReactNode;
} & HTMLMotionProps<"div">;

const SlideUp = ({
  duration = 3,
  delay = 0,
  children,
  ...props
}: SlideUpProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      transition={{
        duration,
        ease: expoEaseInOut,
        delay,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: -50,
      }}
      viewport={{ once: true, margin: "10px" }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default SlideUp;
