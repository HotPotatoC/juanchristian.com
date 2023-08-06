'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useEventListener } from '../../hooks/useEventListener'
import useMousePosition from '../../hooks/useMousePosition'
import { useTransition } from '../../lib/animation'
import cn from '../../lib/cn'

const CustomCursor = () => {
  const pathname = usePathname()
  const [isActive, setIsActive] = useState(false)
  const [isActiveOnLink, setIsActiveOnLink] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [x, y] = useMousePosition()
  const transition = useTransition({ duration: 0.5, delay: 0 })

  const onMouseUp = () => setIsClicked(false)
  const onMouseDown = () => setIsClicked(true)

  useEventListener('mousedown', onMouseDown)
  useEventListener('mouseup', onMouseUp)

  useEffect(() => {
    const linkEls = document.querySelectorAll(['a', 'span[href]'].join(', '))

    const otherEls = document.querySelectorAll(
      ['button', '.expand-cursor'].join(', ')
    )

    linkEls.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        setIsActive(true)
        setIsActiveOnLink(true)
      })
      el.addEventListener('mouseleave', () => {
        setIsActive(false)
        setIsActiveOnLink(false)
      })
    })

    otherEls.forEach((el) => {
      el.addEventListener('mouseenter', () => setIsActive(true))
      el.addEventListener('mouseleave', () => setIsActive(false))
    })

    return () => {
      linkEls.forEach((el) => {
        el.addEventListener('mouseenter', () => {
          setIsActive(true)
          setIsActiveOnLink(true)
        })
        el.addEventListener('mouseleave', () => {
          setIsActive(false)
          setIsActiveOnLink(false)
        })
      })

      otherEls.forEach((el) => {
        el.addEventListener('mouseenter', () => setIsActive(true))
        el.addEventListener('mouseleave', () => setIsActive(false))
      })
    }
  }, [isActive, pathname])

  const posStyle: React.CSSProperties = {
    left: `${x}px`,
    top: `${y}px`,
  }

  return (
    <div
      className={cn(
        'opacity-0 pointer-events-none fixed z-[999] transform -translate-x-1/2 -translate-y-1/2 p-2 hidden lg:block bg-white rounded-full mix-blend-difference [transition:opacity_300ms,transform_400ms] ease-[cubic-bezier(0.19,1,0.22,1)]',
        isActive && ['opacity-1', isActiveOnLink ? 'scale-[7]' : 'scale-[5]'],
        isClicked && 'scale-[3]'
      )}
      style={posStyle}
    >
      <AnimatePresence>
        {isActiveOnLink && (
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 text-black"
            initial={{
              top: '50%',
              left: '50%',
              translateX: '-50%',
              translateY: '-50%',
              rotate: -90,
            }}
            animate={{
              top: '50%',
              left: '50%',
              translateX: '-50%',
              translateY: '-50%',
              rotate: 0,
            }}
            exit={{
              top: '50%',
              left: '50%',
              translateX: '-50%',
              translateY: '-50%',
              rotate: -90,
            }}
            transition={transition}
          >
            <svg
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5627 9.66673L9.41071 2.51473L11.296 0.629395L21.6667 11.0001L11.296 21.3707L9.41071 19.4854L16.5627 12.3334H0.333374V9.66673H16.5627Z"
                fill="currentColor"
              />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default CustomCursor
