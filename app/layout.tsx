import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import '../styles/global.css'

import { createSEO } from '../lib/seo'

import Footer from '../shared/Footer'
import Navbar from '../shared/Navbar'
import ThemeProvider from '../shared/ThemeProvider'

export const metadata: Metadata = createSEO({
  title: 'Juan Christian — Indonesian Developer',
  description: 'Juan Christian is a Developer based in Jakarta, Indonesia',
})

const DynamicCustomCursor = dynamic(() => import('../shared/CustomCursor'), {
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
      </body>
    </html>
  )
}
