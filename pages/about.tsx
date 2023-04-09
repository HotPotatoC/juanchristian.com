import Layout from '../shared/Layout'

import { Introduction } from '../modules/about/Introduction'
import Skills from '../modules/about/Skills'

export default function About() {
  return (
    <Layout
      title="Juan Christian — Indonesian Developer"
      description="Juan Christian is a Developer based in Jakarta, Indonesia."
    >
      <Introduction />
      <Skills />
    </Layout>
  )
}
