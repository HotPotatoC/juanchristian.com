import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  createFadeInTransition,
  createSlideUpTransition,
} from '../../lib/animation'
import ContentWrapper from '../../shared/content-wrapper'

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <ContentWrapper extraClass="px-6 md:px-12 md:pt-24 lg:pt-36 pb-24">
        <section
          id="hero"
          className="hero relative z-20 mt-32 tracking-tighter"
        >
          <motion.h1
            className="font-display text-4xl md:text-7xl lg:text-8xl"
            {...createSlideUpTransition(0.1)}
          >
            Hi, I am Juan.
          </motion.h1>
          <motion.h1
            className="font-display text-4xl md:text-7xl lg:text-8xl"
            {...createSlideUpTransition(0.2)}
          >
            I am a software developer and
          </motion.h1>
          <motion.h1
            className="font-display text-4xl md:text-7xl lg:text-8xl mb-6"
            {...createSlideUpTransition(0.3)}
          >
            a web enthusiast.
          </motion.h1>
          <motion.h2
            className="underline decoration-1 decoration-black text-2xl dark:decoration-white opacity-50 hover:opacity-100 hover:text-primary hover:decoration-primary hover:dark:decoration-primary duration-150"
            {...createFadeInTransition(0.5)}
          >
            <Link href="/#portfolio">see my work</Link>
          </motion.h2>
        </section>
      </ContentWrapper>
    </section>
  )
}

export default Hero
