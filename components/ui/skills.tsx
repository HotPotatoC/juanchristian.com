import SlideUp from '@/components/animation/slide-up'
import ContentWrapper from '@/components/ui/content-wrapper'
import { useTransition } from '@/lib/animation'
import cn from '@/lib/cn'

import { motion } from 'framer-motion'

const Toolbelt = () => (
  <div className="flex flex-wrap my-32 text-black dark:text-white-100">
    <div className="w-full lg:w-1/3">
      <SlideUp delay={0.1}>
        <h2 className="font-display text-2xl md:text-4xl lg:text-6xl tracking-tight uppercase">
          Expertise
        </h2>
      </SlideUp>
    </div>
    <div className="w-full lg:w-2/3">
      <SlideUp delay={0.2}>
        <p className="font-medium text-2xl tracking-tight mb-4">
          GOLANG / JAVASCRIPT / TYPESCRIPT / PYTHON
        </p>
      </SlideUp>
      <SlideUp delay={0.3}>
        <p className="font-medium text-2xl tracking-tight mb-4">
          REACT.JS / NEXT.JS / VUE.JS / NODE.JS / DOCKER
        </p>
      </SlideUp>
      <SlideUp delay={0.4}>
        <p className="font-medium text-2xl tracking-tight mb-4">
          MYSQL / POSTGRESQL / MONGODB / REDIS
        </p>
      </SlideUp>
      <SlideUp delay={0.5}>
        <p className="font-medium text-2xl tracking-tight">
          FIGMA / GIT / GITHUB
        </p>
      </SlideUp>
    </div>
  </div>
)

const EducationTable = () => {
  const lgGrid = cn(['lg:grid-cols-[1fr,2fr,2fr,1fr]'])
  const mdGrid = cn(['md:grid-cols-[1fr,1fr]'])

  return (
    <section className="my-32">
      <SlideUp delay={0.1}>
        <h2 className="mb-12 font-display text-2xl md:text-4xl lg:text-6xl tracking-tight uppercase">
          Education
        </h2>
      </SlideUp>
      <div className={cn([mdGrid, lgGrid, 'my-4 items-baseline grid'])}>
        <SlideUp delay={0.1}>
          <span className="font-medium text-2xl tracking-tight">
            2021 - <small className="opacity-50">exp.</small> 2025
          </span>
        </SlideUp>
        <SlideUp delay={0.2}>
          <span className="font-medium text-2xl tracking-tight">
            BINUS University{' '}
            <small className="opacity-50">(3.93/4.00 GPA)</small>
          </span>
        </SlideUp>
        <SlideUp delay={0.3}>
          <span className="font-medium text-2xl tracking-tight">
            Computer Science
          </span>
        </SlideUp>
        <SlideUp delay={0.4} className="lg:text-right">
          <span className="font-medium text-xl opacity-50 tracking-tight">
            Indonesia, Jakarta
          </span>
        </SlideUp>
      </div>
      <div className={cn([mdGrid, lgGrid, 'my-4 items-baseline grid'])}>
        <SlideUp delay={0.5}>
          <span className="font-medium text-2xl tracking-tight">
            2018 - 2021
          </span>
        </SlideUp>
        <SlideUp delay={0.6}>
          <span className="font-medium text-2xl tracking-tight">
            SMKN 2 Central Jakarta
          </span>
        </SlideUp>
        <SlideUp delay={0.7}>
          <span className="font-medium text-2xl tracking-tight">
            Software Engineering
          </span>
        </SlideUp>
        <SlideUp delay={0.8} className="lg:text-right">
          <span className="font-medium text-xl opacity-50 tracking-tight">
            Indonesia, Jakarta
          </span>
        </SlideUp>
      </div>
    </section>
  )
}

const Skills = () => {
  const transition = useTransition()
  return (
    <section id="skills" className="skills mt-24">
      <ContentWrapper extraClass="px-6 md:px-12 pt-12">
        <motion.div
          className="border-t border-opacity-50 border-black dark:border-white-100"
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          transition={transition}
          viewport={{ once: true, margin: '10px' }}
        />
        <Toolbelt />
        <motion.div
          className="border-t border-opacity-50 border-black dark:border-white-100"
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          transition={transition}
          viewport={{ once: true, margin: '10px' }}
        />
        <EducationTable />
        <motion.div
          className="border-t border-opacity-50 border-black dark:border-white-100"
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          transition={transition}
          viewport={{ once: true, margin: '10px' }}
        />
      </ContentWrapper>
    </section>
  )
}

export default Skills
