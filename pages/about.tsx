import type { NextPage } from 'next'
import Layout from '../shared/Layout'

import { Introduction } from '../modules/about/Introduction'
import Skills from '../modules/about/Skills'

const About: NextPage = () => (
  <Layout
    title="Juan Christian — Indonesian Developer"
    description="Juan Christian is a Developer based in Jakarta, Indonesia."
  >
    <Introduction />
    <Skills />
  </Layout>
)

export default About
