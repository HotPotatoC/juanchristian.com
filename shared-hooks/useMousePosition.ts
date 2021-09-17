import { useState, useEffect } from "react"

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    function onMouseMove(e: MouseEvent) {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    document.addEventListener("mousemove", onMouseMove)

    return () => document.removeEventListener("mousemove", onMouseMove)
  }, [])

  return [mousePosition.x, mousePosition.y]
}

export default useMousePosition
