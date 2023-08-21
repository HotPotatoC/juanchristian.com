import { HTMLMotionProps, motion } from 'framer-motion'
import { createSlideUpTransition } from '../../lib/animation'

type SlideUpProps = {
  duration?: number
  delay?: number
  children: React.ReactNode
} & HTMLMotionProps<'div'>

const SlideUp = (props: SlideUpProps) => {
  const { initial, animate, exit, transition } = createSlideUpTransition({
    delay: props.delay,
    duration: props.duration,
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
      {props.children}
    </motion.div>
  )
}

export default SlideUp
