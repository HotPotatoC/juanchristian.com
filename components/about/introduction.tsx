import { motion } from 'framer-motion'
import Image from 'next/image'
import { createSlideUpTransition } from '../../lib/animation'
import ContentWrapper from '../ui/content-wrapper'

export const Introduction = () => {
  return (
    <>
      <ContentWrapper extraClass="pt-12 px-6 md:px-12 md:pt-12 lg:pt-24">
        <div className="flex flex-col items-center lg:flex-row lg:space-between ">
          <section>
            <motion.h1
              className="font-display text-2xl md:text-3xl lg:text-6xl"
              {...createSlideUpTransition({ delay: 0.4 })}
            >
              Hello there{' '}
              <motion.div
                className="inline-block origin-[70%_70%] select-none"
                animate={{
                  rotate: [0, 14, -8, 14, -4, 10, 0, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: 0.4,
                }}
              >
                👋
              </motion.div>{' '}
              my name is Juan Christian Dotulung. I am a{' '}
              <span className="text-primary text-4xl md:text-6xl lg:text-7xl">
                Software Developer
              </span>{' '}
              and{' '}
              <span className="text-primary text-4xl md:text-6xl lg:text-7xl">
                Cloud Enthusiast
              </span>{' '}
              based in Indonesia.
            </motion.h1>
          </section>
          <Image
            src="/images/me-about.png"
            alt="Juan Christian Dotulung photo"
            priority
            width={400}
            height={998}
            quality={100}
            sizes="100%"
            draggable={false}
            className="max-w-xs lg:max-w-full object-contain object-center lg:self-end"
          />
        </div>
      </ContentWrapper>
      <div className="bg-black">
        <ContentWrapper extraClass="py-12 px-6 md:px-32 lg:px-64 md:pt-24 lg:pt-48">
          <motion.p className="mt-12 mb-12 font-medium text-white text-lg md:text-xl lg:text-2xl tracking-wide">
            I was born in Jakarta, Indonesia in 2003, and my journey into the
            world of coding started at the age of 12 when I started exploring
            web development with HTML, CSS, and JavaScript. At high school, I
            chose to enter a vocational high school in the field of software
            engineering, complemented by hands-on experiences through
            interactions with peers and various extracurricular activities.
          </motion.p>
          <motion.p className="mb-12 font-medium text-white text-lg md:text-xl lg:text-2xl tracking-wide">
            During high school, I did a 3-month internship, a requirement for
            high school graduation, where I honed my skills in frontend
            development using Vue.js. But I did not stop there. I continued to
            learn and explore the world of web development, and I started to
            enjoy more on the backend side of things.
          </motion.p>
          <motion.p className="mb-64 font-medium text-white text-lg md:text-xl lg:text-2xl tracking-wide">
            Participating in coding competitions further refined my abilities,
            and I subsequently pursued a Computer Science degree at BINUS
            University. This academic journey was punctuated by ongoing
            competition successes, shaping me into a dedicated developer. Amidst
            the academic hustle, a new passion emerged that is cloud computing.
          </motion.p>

          <Toolbelt />
          <Education />
        </ContentWrapper>
      </div>
    </>
  )
}

const Toolbelt = () => (
  <div className="flex flex-wrap mb-12 text-white">
    <div className="w-full lg:w-1/3">
      <h2 className="font-display text-2xl md:text-4xl tracking-tight uppercase">
        Expertise
      </h2>
    </div>
    <div className="w-full lg:w-2/3">
      <p className="font-medium text-2xl tracking-tight mb-4">
        GOLANG / JAVASCRIPT / TYPESCRIPT / PYTHON
      </p>
      <p className="font-medium text-2xl tracking-tight mb-4">
        REACT.JS / NEXT.JS / VUE.JS / NODE.JS / DOCKER
      </p>
      <p className="font-medium text-2xl tracking-tight mb-4">
        MYSQL / POSTGRESQL / MONGODB / REDIS
      </p>
      <p className="font-medium text-2xl tracking-tight">
        FIGMA / GIT / GITHUB
      </p>
    </div>
  </div>
)

const Education = () => (
  <div className="flex flex-wrap mb-12 text-white">
    <div className="w-full lg:w-1/3">
      <h2 className="font-display text-2xl md:text-4xl tracking-tight uppercase">
        Education
      </h2>
    </div>
    <div className="w-full lg:w-2/3">
      <p className="font-medium text-2xl tracking-tight mb-4">
        SMKN 2 Central Jakarta — Software Engineering (2018 - 2021)
      </p>
      <p className="font-medium text-2xl tracking-tight">
        Binus University — Computer Science (2021 -{' '}
        <small className="opacity-50">exp.</small> 2025)
      </p>
    </div>
  </div>
)
