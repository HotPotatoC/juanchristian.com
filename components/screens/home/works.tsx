import SlideUp from '@/components/animation/slide-up'
import Link from '@/components/link'
import Container from '@/components/ui/container'
import works, { Work } from '@/data/works'
import toBase64 from '@/lib/base64'
import shimmer from '@/lib/shimmer'

import Image from 'next/image'
import Tilt from 'react-parallax-tilt'

const WorkItem = ({ work }: { work: Work }) => {
  return (
    <Link href={work.path} external={work.outlink}>
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
            alt={work.name}
            width={1000}
            height={500}
            sizes="(max-width: 1400px) 100vw, 1400px"
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(1000, 1000)
            )}`}
            className="w-full rounded-xl md:rounded-3xl overflow-hidden"
          />
          <section className="flex flex-col md:space-y-2">
            <p className="text-lg capitalize">
              {work.role ?? work.venue} — {work.year}
            </p>
            <p className="font-semibold text-2xl md:text-4xl lg:text-5xl">
              {work.name}
            </p>
            <p className="font-medium text-lg capitalize">
              {work.tools.join(' / ')}
            </p>
            {/* <p className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-6">
              {work.description}
            </p> */}
          </section>
        </SlideUp>
      </Tilt>
    </Link>
  )
}

const HomeWorks = () => {
  return (
    <section className="relative z-20 mt-12 tracking-tighter">
      <Container className="px-6 md:px-6 xl:px-48 py-6 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-32">
          {works.map((work) => (
            <WorkItem key={work.path} work={work} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default HomeWorks
