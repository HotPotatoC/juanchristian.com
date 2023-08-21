'use client'

import AboutSkills from '../../components/about/skills'
import AboutTitle from '../../components/about/title'

export default function Page() {
  return (
    <main className="pt-28">
      <AboutTitle />
      <AboutSkills />
      {/* <Introduction /> */}
    </main>
  )
}
