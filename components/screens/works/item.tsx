import { Work } from '@/data/works'
import cn from '@/lib/cn'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'

type WorkItemProps = {
  work: Work
}

const WorkItem = ({ work }: WorkItemProps) => {
  const scrollTargetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: scrollTargetRef,
    offset: ['end end', 'end start'],
  })

  const workItemTransformScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1, 1.05, 1]
  )

  return (
    <Link href={work.path} passHref>
      <motion.div
        ref={scrollTargetRef}
        className={cn([
          work.bgColor,
          'w-full h-28 md:h-36 flex items-center justify-between px-8 md:px-16 lg:px-24 rounded-3xl',
        ])}
        style={{ scale: workItemTransformScale }}
      >
        <div className="flex flex-col space-y-2 md:space-y-4">
          <span className="text-black font-semibold text-xl md:text-3xl lg:text-5xl">
            {work.name}
          </span>
          <span className="text-black font-medium text-lg md:text-xl lg:text-2xl">
            {work.role ?? work.venue}
          </span>
        </div>
        <span className="text-black font-semibold text-xl md:text-3xl lg:text-5xl">
          {work.year}
        </span>
      </motion.div>
    </Link>
  )
}

export default WorkItem
