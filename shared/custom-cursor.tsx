'use client'

import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import { useEventListener } from '../shared-hooks/useEventListener'
import useMousePosition from '../shared-hooks/useMousePosition'

const CustomCursor = () => {
  const pathname = usePathname()
  const [isActive, setIsActive] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [x, y] = useMousePosition()

  const onMouseUp = useCallback(() => setIsClicked(false), [])
  const onMouseDown = useCallback(() => setIsClicked(true), [])

  useEventListener('mousedown', onMouseDown)
  useEventListener('mousedown', onMouseUp)

  useEffect(() => {
    const targetEls = document.querySelectorAll(
      ['a', 'button', 'span[href]', '.expand-cursor'].join(', ')
    )

    targetEls.forEach((el) => {
      el.addEventListener('mouseenter', () => setIsActive(true))
      el.addEventListener('mouseleave', () => setIsActive(false))
    })

    return () => {
      targetEls.forEach((el) => {
        el.removeEventListener('mouseenter', () => setIsActive(true))
        el.removeEventListener('mouseleave', () => setIsActive(false))
      })
    }
  }, [isActive, pathname])

  const inner: React.CSSProperties = {
    transition: 'opacity 0.3s, transform 0.3s ease',
    left: `${x}px`,
    top: `${y}px`,
  }

  if (isActive) {
    Object.assign(inner, {
      transform: 'translate(-50%, -50%) scale(3)',
      opacity: 1,
    })
  }

  if (isClicked) {
    Object.assign(inner, {
      transform: 'translate(-50%, -50%) scale(-0.7)',
    })
  }

  return (
    <div
      className="opacity-0 pointer-events-none fixed z-[999] transform -translate-x-1/2 -translate-y-1/2 p-2 hidden lg:block bg-white rounded-full mix-blend-difference"
      style={inner}
    ></div>
  )
}

export default CustomCursor
