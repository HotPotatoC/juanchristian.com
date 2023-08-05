import ContentWrapper from '../ui/content-wrapper'

export const Introduction = () => {
  return (
    <ContentWrapper extraClass="px-6 md:px-12 md:pt-24 lg:pt-36 md:pb-24">
      <h1 className="my-12 font-display text-4xl md:text-7xl lg:text-8xl">
        Hello, I am Juan.
      </h1>
      <h1 className="font-display text-4xl md:text-7xl lg:text-8xl">
        I am a multidisciplinary software developer with a passion for code,
        technology, and modern tools.
      </h1>
    </ContentWrapper>
  )
}
