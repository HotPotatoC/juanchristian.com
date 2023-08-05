import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { createSEO } from '../lib/seo'
import Footer from '../shared/footer'
import Navbar from '../shared/navbar'
import ThemeProvider from '../shared/theme-provider'
import '../styles/global.css'

export const metadata: Metadata = createSEO({
  title: 'Juan Christian — Indonesian Developer',
  description: 'Juan Christian is a Developer based in Jakarta, Indonesia',
})

const DynamicCustomCursor = dynamic(() => import('../shared/custom-cursor'), {
  ssr: true,
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-black text-black dark:text-white">
        <ThemeProvider>
          <DynamicCustomCursor />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
