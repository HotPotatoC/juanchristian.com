import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import ThemeProvider from '../components/theme-provider'
import Footer from '../components/ui/footer'
import Navbar from '../components/ui/navbar'
import { createSEO } from '../lib/seo'
import '../styles/global.css'

export const metadata: Metadata = createSEO({
  title: 'Juan Christian — Indonesian Developer',
  description: 'Juan Christian is a Developer based in Jakarta, Indonesia',
})

const DynamicCustomCursor = dynamic(
  () => import('../components/ui/custom-cursor'),
  {
    ssr: true,
  }
)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link
        rel="icon"
        href="/favicon-16x16.png"
        type="image/png"
        sizes="16x16"
      />
      <link
        rel="icon"
        href="/favicon-32x32.png"
        type="image/png"
        sizes="32x32"
      />
      <link
        rel="apple-touch-icon"
        href="/apple-touch-icon.png"
        sizes="180x180"
      />
      <body className="bg-white-100 dark:bg-black text-black dark:text-white-100">
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
