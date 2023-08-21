'use client'
import Intro from '@/components/screens/home/intro'
import Works from '@/components/screens/home/works'
import Skills from '@/components/ui/skills'

export default function Page() {
  return (
    <main className="pt-28">
      <Intro />
      <Works />
      <Skills />
    </main>
  )
}
