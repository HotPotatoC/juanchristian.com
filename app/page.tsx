'use client'
import HomeIntro from '@/components/screens/home/intro'
import HomeWorks from '@/components/screens/home/works'
import Skills from '@/components/ui/skills'

export default function Page() {
  return (
    <main className="pt-28">
      <HomeIntro />
      <HomeWorks />
      <Skills />
    </main>
  )
}
