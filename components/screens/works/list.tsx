import FadeIn from '@/components/animation/fade-in'
import ContentWrapper from '@/components/ui/content-wrapper'
import works from '@/data/works'
import WorkItem from './item'

const WorksList = () => {
  return (
    <FadeIn>
      <ContentWrapper extraClass="px-6 md:px-12 pt-12">
        <div className="cursor-none flex flex-col space-y-4">
          {works.map((work) => (
            <WorkItem key={work.path} work={work} />
          ))}
        </div>
      </ContentWrapper>
    </FadeIn>
  )
}

export default WorksList
