import SlideUp from '@/components/animation/slide-up'
import ContentWrapper from '@/components/ui/content-wrapper'
import works from '@/data/works'
import WorkItem from './item'

const WorksList = () => {
  return (
    <ContentWrapper extraClass="px-6 md:px-12 pt-12">
      <div className="flex flex-col space-y-4">
        {works.map((work) => (
          <SlideUp key={work.path} delay={0.2}>
            <WorkItem work={work} />
          </SlideUp>
        ))}
      </div>
    </ContentWrapper>
  )
}

export default WorksList
