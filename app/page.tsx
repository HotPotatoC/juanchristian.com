'use client'
import { AnimatePresence } from 'framer-motion'
import Hero from '../modules/home/Hero'
import { Portfolio } from '../modules/home/Portfolio'
import Skills from '../modules/home/Skills'

export default function Page() {
  return (
    <AnimatePresence>
      <Hero />
      <Portfolio />
      <Skills />
    </AnimatePresence>
  )
}
