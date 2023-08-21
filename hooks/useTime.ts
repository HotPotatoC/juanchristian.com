import { useEffect, useState } from 'react'

export function useAsiaJakartaTime() {
  const dateOptions: Intl.DateTimeFormatOptions = {
    timeZone: 'Asia/Jakarta',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  }

  const [time, setTime] = useState(() =>
    new Date().toLocaleString([], dateOptions)
  )
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date().toLocaleString([], dateOptions))
    }, 1000)
    return () => clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return time
}

export default useAsiaJakartaTime
