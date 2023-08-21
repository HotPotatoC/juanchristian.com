import { createSlideUpTransition } from '@/lib/animation'
import { HTMLMotionProps, motion } from 'framer-motion'

type SlideUpProps = {
  duration?: number
  delay?: number
  children: React.ReactNode
} & HTMLMotionProps<'div'>

const SlideUp = ({ duration, delay = 0, children, ...props }: SlideUpProps) => {
  const { initial, animate, exit, transition } = createSlideUpTransition({
    delay,
    duration,
  })

  return (
    <motion.div
      initial={initial}
      transition={transition}
      whileInView={animate}
      exit={exit}
      viewport={{ once: true, margin: '10px' }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default SlideUp
