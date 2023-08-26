import { expoEaseInOut } from '@/lib/animation'

const defaultTransitionArgs = { duration: 3, delay: 0.1 }

type useExpoEaseInOutTransitionArgs = { duration?: number; delay?: number }

export default function useExpoEaseInOutTransition({
  duration = defaultTransitionArgs.duration,
  delay = defaultTransitionArgs.delay,
}: useExpoEaseInOutTransitionArgs = defaultTransitionArgs) {
  return {
    duration,
    ease: expoEaseInOut,
    delay,
  }
}
