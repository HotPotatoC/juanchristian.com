import SlideUp from '@/components/animation/slide-up'
import ContentWrapper from '@/components/ui/content-wrapper'
import { shimmer, toBase64 } from '@/lib/utils'

import Image from 'next/image'
import Link from 'next/link'
import { useMemo } from 'react'
import Tilt from 'react-parallax-tilt'

type Work = {
  path: string
  label: string
  description: string
  image: string
}

const PortfolioItem = ({ work }: { work: Work }) => {
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
        className="w-full h-full hover:bg-white-50 hover:bg-opacity-60 dark:hover:bg-white-100 dark:hover:bg-opacity-5 p-6 rounded-xl md:rounded-3xl overflow-hidden"
      >
        <SlideUp className="flex flex-col relative space-y-6">
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
            <span className="text-xl dark:decoration-white-100 capitalize">
              {work.label}
            </span>
          </section>
        </SlideUp>
      </Tilt>
    </Link>
  )
}

export const Works = () => {
  const works = useMemo(
    () => [
      {
        label: 'Imagine Cup 2021 — Azure / Go / React Native',
        path: '/portfolio/lexo',
        description:
          'Bionic reading camera for dyslexic people using computer vision',
        image: '/images/lexo.png',
      },
      {
        label: 'GEMASTIK competition — Go / React Native',
        path: '/portfolio/stashable',
        description:
          'Platform for users to reserve a place to store their goods in the warehouse',
        image: '/images/stashable.png',
      },
      {
        label: 'Hackathon — Go / NextJS / TailwindCSS',
        path: '/portfolio/piggybank',
        description:
          'Piggybank is a kid bank that can help teach saving and financial literacy from an early age to children',
        image: '/images/piggybank.png',
      },
      {
        label: 'mindzzle — Frontend Internship / VueJS',
        path: '/portfolio/mindzzle',
        description: 'Developing integrated Human Capital Management Platform',
        image: '/images/mindzzlemockup.jpg',
      },
      {
        label: 'twitter clone — Fullstack / Go / ReactJS / VueJS',
        path: 'https://github.com/twitter-remake',
        description: 'An attempt to recreate the top social network app',
        image: '/images/twitterclone.jpg',
      },
      {
        label: 'kvstore — Go / Data Structures / TCP',
        path: 'https://github.com/HotPotatoC/kvstore',
        description:
          'A redis protocol compatible key-value database written in Go',
        image: '/images/kvstore.gif',
      },
      {
        label: 'sture — Go / Data Structures / Generics',
        path: 'https://github.com/HotPotatoC/sture',
        description: 'A Go data structures library that supports generics',
        image: 'https://opengraph.githubassets.com/a/HotPotatoC/sture',
      },
      {
        label: 'snowflake — Go / Bit Manipulation',
        path: 'https://github.com/HotPotatoC/snowflake',
        description: "Twitter's snowflake ID format generator written in Go",
        image: 'https://opengraph.githubassets.com/a/HotPotatoC/snowflake',
      },
      {
        label: '2D Raycasting — HTML5 Canvas / JS',
        path: 'https://github.com/HotPotatoC/2D-RayCasting',
        description:
          'A simple 2D Raycasting engine made with HTML5 Canvas + JS',
        image: '/images/2d-raycast.png',
      },
    ],
    []
  )

  return (
    <section className="relative z-20 mt-12 tracking-tighter">
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

export default Works