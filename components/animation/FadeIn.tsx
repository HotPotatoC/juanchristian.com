import { HTMLMotionProps, motion } from 'framer-motion'
import { createFadeInTransition } from '../../lib/animation'

type FadeInProps = {
  duration?: number
  delay?: number
  children: React.ReactNode
} & HTMLMotionProps<'div'>

const FadeIn = (props: FadeInProps) => {
  const { initial, animate, exit, transition } = createFadeInTransition({
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

export default FadeIn
