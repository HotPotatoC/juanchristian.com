import { useEffect, useState } from 'react'

const dateOptions: Intl.DateTimeFormatOptions = {
  timeZone: 'Asia/Jakarta',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  hourCycle: 'h23',
}

export function useAsiaJakartaTime() {
  const [time, setTime] = useState(() =>
    new Intl.DateTimeFormat([], dateOptions).format(new Date())
  )

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Intl.DateTimeFormat([], dateOptions).format(new Date()))
    }, 1000)
    return () => clearInterval(id)
  }, [])

  return time
}

export default useAsiaJakartaTime
