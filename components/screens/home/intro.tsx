import SlideUp from '@/components/animation/slide-up'
import Container from '@/components/ui/container'

const HomeIntro = () => {
  return (
    <section className="relative overflow-hidden">
      <Container className="px-6 md:px-12 md:pt-16 lg:pt-24 xl:pt-36 pb-24">
        <section className="flex flex-wrap justify-center space-x-3 md:space-x-6 z-20 mt-32 tracking-tighter">
          <SlideUp>
            <h1 className="relative font-display text-6xl md:text-7xl lg:text-9xl">
              Juan
            </h1>
          </SlideUp>
          <SlideUp delay={0.1}>
            <h1 className="relative font-display text-6xl md:text-7xl lg:text-9xl">
              Christian
            </h1>
          </SlideUp>
        </section>
        <div className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] w-full h-full scale-150 mix-blend-difference"></div>
      </Container>
    </section>
  )
}

export default HomeIntro
