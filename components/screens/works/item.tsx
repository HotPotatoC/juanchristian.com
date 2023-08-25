import { Work } from '@/data/works'
import useMousePosition from '@/hooks/useMousePosition'
import { expoEaseInOut } from '@/lib/animation'
import cn from '@/lib/cn'

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useScroll,
  useTransform,
} from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useRef, useState } from 'react'

type WorkItemProps = {
  work: Work
}

const WorkItem = ({ work }: WorkItemProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const scrollTargetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: scrollTargetRef,
    offset: ['end end', 'end start'],
  })

  const workItemTransformScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.95, 1, 0.95]
  )

  const [x, y] = useMousePosition()
  const mousePositionX = useMotionValue(0)
  mousePositionX.set(x)

  const [workItemElementWidth, setWorkItemElementWidth] = useState(0)
  const [workItemImageElementWidth, setWorkItemImageElementWidth] = useState(0)
  const onMouseEnter = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    setIsHovered(true)
    setWorkItemElementWidth(e.currentTarget.offsetWidth)
  }, [])

  const onMouseLeave = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    setIsHovered(false)
  }, [])

  const variants = {
    default: {
      left: x - workItemImageElementWidth / 2,
      top: y - 125,
      opacity: 0,
      scale: 0.95,
    },
    hover: {
      left: x - workItemImageElementWidth / 2,
      top: y - 125,
      opacity: 1,
      scale: 1,
    },
  }

  const workItemSideRotation = useTransform(
    mousePositionX,
    [0, workItemElementWidth],
    [-8, 8]
  )

  return (
    <>
      <Link href={work.path} passHref data-cursor-hide-arrow="true">
        <motion.div
          ref={scrollTargetRef}
          className={cn([
            work.bgColor,
            'cursor-none relative z-10 w-full h-28 md:h-36 flex items-center justify-between px-8 md:px-16 lg:px-24 rounded-3xl group',
          ])}
          style={{ scale: workItemTransformScale }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <div className="flex flex-col space-y-2 md:space-y-4">
            <span className="text-black group-hover:text-black/60 font-semibold text-xl md:text-3xl lg:text-5xl duration-200">
              {work.name}
            </span>
            <span className="text-black group-hover:text-black/60  font-medium text-lg md:text-xl lg:text-2xl">
              {work.role ?? work.venue}
            </span>
          </div>
          <span className="text-black group-hover:text-black/60  font-semibold text-xl md:text-3xl lg:text-5xl">
            {work.year}
          </span>
        </motion.div>
      </Link>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            variants={variants}
            initial="default"
            animate="hover"
            exit="default"
            transition={{ duration: 0.25, ease: expoEaseInOut }}
            className="cursor-none fixed z-[9999] top-0 left-0 pointer-events-none"
            style={{ rotate: workItemSideRotation }}
          >
            <Image
              src={work.image}
              alt={work.name}
              width={1000}
              height={500}
              className="relative z-[9999] w-full h-[250px] object-cover rounded-xl md:rounded-2xl overflow-hidden shadow-lg"
              sizes="(max-width: 639px) 100vw, (max-width: 767px) 50vw, (max-width: 1023px) 33vw, 25vw"
              onLoad={(e) => {
                setWorkItemImageElementWidth(e.currentTarget.offsetWidth)
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default WorkItem
