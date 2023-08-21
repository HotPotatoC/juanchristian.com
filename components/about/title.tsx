import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import { useTransition } from '../../lib/animation'
import { shimmer, toBase64 } from '../../lib/utils'
import FadeIn from '../animation/FadeIn'
import ContentWrapper from '../ui/content-wrapper'

const AboutTitle = () => {
  const scrollTargetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: scrollTargetRef,
    offset: ['end end', 'end start'],
  })

  const profileTransition = useTransition({ delay: 1 })
  const profileTransformRotate = useTransform(
    scrollYProgress,
    [0.15, 1],
    ['0deg', '-20deg']
  )
  const profileTransformScale = useTransform(
    scrollYProgress,
    [0.15, 0.6, 1],
    [1, 0.5, 0.15]
  )

  return (
    <ContentWrapper
      ref={scrollTargetRef}
      extraClass="pt-12 px-6 md:px-12 md:pt-12 lg:pt-24"
    >
      <FadeIn className="relative">
        <motion.div
          className="select-none absolute left-64 from-bg-black to-white-400 rounded-xl md:rounded-3xl overflow-hidden origin-bottom-right"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: -2 }}
          transition={profileTransition}
          style={{
            scale: profileTransformScale,
            rotate: profileTransformRotate,
          }}
        >
          <Image
            src={'/images/me-about.png'}
            alt={'Juan Christian profile picture'}
            width={1000}
            height={500}
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(1000, 1000)
            )}`}
            className="w-[20vw] lg:w-[15vw] h-full grayscale brightness-50"
          />
        </motion.div>
        <h1 className="select-none font-serif text-[23vw] leading-[.75]">
          BORN & RAISED
        </h1>
        <div className="max-w-4xl">
          <p className="text-2xl">
            Born in 2003, in Indonesia. I am a software developer who thrives on
            backend and cloud tech. Simplicity, scalability and functionality
            drive my code.
          </p>
        </div>
      </FadeIn>
    </ContentWrapper>
  )
}

export default AboutTitle
