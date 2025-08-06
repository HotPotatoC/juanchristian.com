import { expoEaseInOut } from "@/lib/animation-transitions";
import { Transition } from "motion";

const defaultTransitionArgs = { duration: 3, delay: 0.1 };

type useExpoEaseInOutTransitionArgs = { duration?: number; delay?: number };

export default function useExpoEaseInOutTransition({
  duration = defaultTransitionArgs.duration,
  delay = defaultTransitionArgs.delay,
}: useExpoEaseInOutTransitionArgs = defaultTransitionArgs): Transition {
  return {
    duration,
    ease: expoEaseInOut,
    delay,
  };
}
