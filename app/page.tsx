'use client'
import Hero from '../components/home/Hero'
import { Portfolio } from '../components/home/Portfolio'
import Skills from '../components/skills'

export default function Page() {
  return (
    <main className="pt-28">
      <Hero />
      <Portfolio />
      <Skills />
    </main>
  )
}
