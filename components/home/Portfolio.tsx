import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useMemo } from 'react'
import { useInView } from 'react-intersection-observer'
import Tilt from 'react-parallax-tilt'
import ContentWrapper from '../../components/ui/content-wrapper'
import { createSlideUpTransition } from '../../lib/animation'
import { shimmer, toBase64 } from '../../lib/utils'

type Work = {
  path: string
  label: string
  description: string
  image: string
}

const PortfolioItem = ({ work }: { work: Work }) => {
  const { ref, inView, entry } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const { initial, animate, exit, transition } = createSlideUpTransition({
    delay: 0.2,
  })

  return (
    <Link href={work.path} passHref>
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.25}
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        perspective={1000}
        scale={1.1}
        transitionSpeed={1000}
        transitionEasing="cubic-bezier(0.19, 1.0, 0.22, 1.0)"
        className="w-full h-full hover:bg-[#fff] hover:bg-opacity-50 dark:hover:bg-white dark:hover:bg-opacity-5 p-6 rounded-xl md:rounded-3xl overflow-hidden"
      >
        <motion.div
          className="flex flex-col relative space-y-6"
          ref={ref}
          initial={initial}
          animate={inView && animate}
          exit={exit}
          transition={transition}
        >
          <Image
            src={work.image}
            alt={work.label}
            width={1000}
            height={500}
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(1000, 1000)
            )}`}
            className="w-full rounded-xl md:rounded-3xl overflow-hidden"
          />
          <section>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-6">
              {work.description}
            </h2>
            <span className="underline decoration-1 decoration-black text-2xl dark:decoration-white opacity-50 hover:opacity-100 hover:text-primary hover:decoration-primary hover:dark:decoration-primary capitalize duration-150">
              {work.label}
            </span>
          </section>
        </motion.div>
      </Tilt>
    </Link>
  )
}

export const Portfolio = () => {
  const works = useMemo(
    () => [
      {
        label: 'piggybank (Technoscape Hackathon)',
        path: '/portfolio/piggybank',
        description:
          'Piggybank is a kid bank that can help teach saving and financial literacy from an early age to children',
        image: '/images/piggybank.png',
      },
      {
        label: 'Lexo (Microsoft Imagine Cup)',
        path: '/portfolio/lexo',
        description:
          'Bionic reading camera for dyslexic people using computer vision',
        image: '/images/lexo.png',
      },
      {
        label: 'stashable (GEMASTIK competition)',
        path: '/portfolio/stashable',
        description:
          'Platform for users to reserve a place to store their goods in the warehouse',
        image: '/images/stashable.png',
      },
      {
        label: 'mindzzle (Ceased Operations)',
        path: '/portfolio/mindzzle',
        description: 'Developing integrated Human Capital Management Platform',
        image: '/images/mindzzlemockup.jpg',
      },
      {
        label: 'twitter clone',
        path: '/portfolio/twitterclone',
        description: 'An attempt to recreate the top social network app',
        image: '/images/twitterclone.jpg',
      },
      {
        label: 'kvstore',
        path: '/portfolio/kvstore',
        description:
          'A redis protocol compatible key-value database written in Go',
        image: '/images/kvstore.gif',
      },
      {
        label: 'sture',
        path: '/portfolio/sture',
        description: 'A Go data structures library that supports generics',
        image: 'https://opengraph.githubassets.com/a/HotPotatoC/sture',
      },
      {
        label: 'snowflake',
        path: '/portfolio/snowflake',
        description: "Twitter's snowflake ID format generator written in Go",
        image: 'https://opengraph.githubassets.com/a/HotPotatoC/snowflake',
      },
      {
        label: 'covinfo',
        path: '/portfolio/covinfo',
        description: 'Platform to view the novel COVID-19 demographics',
        image: '/images/covinfomockup.jpg',
      },
      {
        label: '2D Raycasting',
        path: '/portfolio/2d-raycasting',
        description:
          'A simple 2D Raycasting engine made with HTML5 Canvas + JS',
        image: '/images/2d-raycast.png',
      },
    ],
    []
  )

  return (
    <section
      id="portfolio"
      className="portfolio relative z-20 mt-12 tracking-tighter"
    >
      <ContentWrapper extraClass="px-6 md:px-6 xl:px-48 py-6 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-32">
          {works.map((work) => (
            <PortfolioItem key={work.path} work={work} />
          ))}
        </div>
      </ContentWrapper>
    </section>
  )
}
