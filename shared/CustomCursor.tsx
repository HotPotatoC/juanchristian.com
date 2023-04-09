'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import useMousePosition from '../shared-hooks/useMousePosition'

const CustomCursor = () => {
  const pathname = usePathname()
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)
  const [x, y] = useMousePosition()

  useEffect(() => {
    addEventListeners()
    hoverEventListeners()
    return () => removeEventListeners()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]) // Passed location.key as dependency to keep on registering handlers on page change

  const addEventListeners = () => {
    document.addEventListener('mousedown', onMouseDown)
    document.addEventListener('mouseup', onMouseUp)
  }

  const removeEventListeners = () => {
    document.removeEventListener('mousedown', onMouseDown)
    document.removeEventListener('mouseup', onMouseUp)
  }

  const hoverEventListeners = () => {
    document.querySelectorAll('a').forEach((el) => {
      el.addEventListener('mouseenter', () => setHovered(true))
      el.addEventListener('mouseleave', () => setHovered(false))
    })

    document.querySelectorAll('button').forEach((el) => {
      el.addEventListener('mouseenter', () => setHovered(true))
      el.addEventListener('mouseleave', () => setHovered(false))
    })

    // for next/link components
    document.querySelectorAll('span[href]').forEach((el) => {
      el.addEventListener('mouseenter', () => setHovered(true))
      el.addEventListener('mouseleave', () => setHovered(false))
    })

    document.querySelectorAll('.expand-cursor').forEach((el) => {
      el.addEventListener('mouseenter', () => setHovered(true))
      el.addEventListener('mouseleave', () => setHovered(false))
    })
  }

  const onMouseUp = () => {
    setClicked(false)
  }

  const onMouseDown = () => {
    setClicked(true)
  }

  const inner: React.CSSProperties = {
    transition: 'opacity 0.3s, transform 0.3s ease',
    left: `${x}px`,
    top: `${y}px`,
  }

  if (hovered) {
    Object.assign(inner, {
      transform: 'translate(-50%, -50%) scale(3)',
      opacity: 1,
    })
  }

  if (clicked) {
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
