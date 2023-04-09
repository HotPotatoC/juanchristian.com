import Link from 'next/link'
import ContentWrapper from '../../shared/ContentWrapper'

const Hero = () => {
  return (
    <section className="relative overflow-hidden text-black dark:text-white">
      <ContentWrapper extraClass="px-6 md:px-12 md:pt-24 lg:pt-48 pb-24">
        <section
          id="hero"
          className="hero relative z-20 mt-32 tracking-tighter"
        >
          <h1 className="font-display text-4xl md:text-7xl lg:text-8xl">
            Hi, I am Juan.
          </h1>
          <h1 className="font-display text-4xl md:text-7xl lg:text-8xl">
            I am a software developer and
          </h1>
          <h1 className="font-display text-4xl md:text-7xl lg:text-8xl mb-6">
            a web enthusiast.
          </h1>
          <h2 className="underline decoration-1 decoration-black text-2xl dark:decoration-white opacity-50 hover:opacity-100 hover:text-primary hover:decoration-primary hover:dark:decoration-primary duration-150">
            <Link href="/#portfolio">see my work</Link>
          </h2>
        </section>
      </ContentWrapper>
    </section>
  )
}

export default Hero
