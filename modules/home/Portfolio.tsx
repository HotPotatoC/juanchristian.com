import Link from 'next/link'
import Image from 'next/image'
import { shimmer, toBase64 } from '../../lib/utils'
import ContentWrapper from '../../shared/ContentWrapper'

type Work = {
  path: string
  label: string
  description: string
  image: string
}

const works: Work[] = [
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
    image: '/images/twitterclone.gif',
  },
  {
    label: 'kvstore',
    path: '/portfolio/kvstore',
    description: 'A redis protocol compatible key-value database written in Go',
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
    description: 'A simple 2D Raycasting engine made with HTML5 Canvas + JS',
    image: '/images/2d-raycast.png',
  },
]

export const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="portfolio relative z-20 mt-12 tracking-tighter"
    >
      <ContentWrapper extraClass="px-6 md:px-2 lg:px-48 py-24">
        <div className="grid md:grid-cols-2 gap-32">
          {works.map((work) => {
            return (
              <div className="flex flex-col relative space-y-6" key={work.path}>
                <Image
                  src={work.image}
                  alt={work.label}
                  width={1000}
                  height={500}
                  layout="responsive"
                  placeholder="blur"
                  objectFit="cover"
                  objectPosition="center"
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(
                    shimmer(1000, 1000)
                  )}`}
                  className="w-full rounded-3xl overflow-hidden"
                />
                <section>
                  <h2 className="text-5xl font-semibold mb-6">
                    {work.description}
                  </h2>
                  <Link href={work.path} passHref>
                    <span className="underline decoration-1 decoration-black text-2xl dark:decoration-white opacity-50 hover:opacity-100 hover:text-primary hover:decoration-primary hover:dark:decoration-primary capitalize duration-150">
                      {work.label}
                    </span>
                  </Link>
                </section>
              </div>
            )
          })}
        </div>
      </ContentWrapper>
    </section>
  )
}
