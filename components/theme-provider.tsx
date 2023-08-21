'use client'

import { ThemeProvider as BaseThemeProvider } from 'next-themes'
import { ReactNode, useEffect, useState } from 'react'

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <></>
  }

  return (
    <BaseThemeProvider enableSystem={true} attribute="class">
      {children}
    </BaseThemeProvider>
  )
}
