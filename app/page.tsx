'use client'
import { AnimatePresence } from 'framer-motion'
import Hero from '../components/home/Hero'
import { Portfolio } from '../components/home/Portfolio'
import Skills from '../components/home/Skills'

export default function Page() {
  return (
    <AnimatePresence>
      <Hero />
      <Portfolio />
      <Skills />
    </AnimatePresence>
  )
}
