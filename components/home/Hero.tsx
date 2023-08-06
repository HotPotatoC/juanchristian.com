import { motion } from 'framer-motion'
import ContentWrapper from '../../components/ui/content-wrapper'
import { createSlideUpTransition } from '../../lib/animation'

const Hero = () => {
  return (
    <>
      <section className="relative overflow-hidden">
        <ContentWrapper extraClass="px-6 md:px-12 md:pt-16 lg:pt-24 xl:pt-36 pb-24">
          <section
            id="hero"
            className="hero flex flex-wrap justify-center space-x-3 md:space-x-6 z-20 mt-32 tracking-tighter"
          >
            <motion.h1
              className="relative font-display text-6xl md:text-7xl lg:text-9xl"
              {...createSlideUpTransition({ delay: 0.2 })}
            >
              Juan
            </motion.h1>
            <motion.h1
              className="relative font-display text-6xl md:text-7xl lg:text-9xl"
              {...createSlideUpTransition({ delay: 0.6 })}
            >
              Christian
            </motion.h1>
          </section>
          <div className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] w-full h-full scale-150 mix-blend-difference"></div>
        </ContentWrapper>
      </section>
    </>
  )
}

export default Hero
