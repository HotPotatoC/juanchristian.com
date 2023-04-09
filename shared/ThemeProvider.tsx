'use client'

import { ThemeProvider as BaseThemeProvider } from 'next-themes'
import type { ReactNode } from 'react'

export default function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <BaseThemeProvider enableSystem={true} attribute="class">
      {children}
    </BaseThemeProvider>
  )
}
