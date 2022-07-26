import type { NextPage } from 'next'

import Hero from '../modules/home/Hero'
import { Portfolio } from '../modules/home/Portfolio'
import Skills from '../modules/home/Skills'
import Layout from '../shared/Layout'

const Home: NextPage = () => (
  <Layout
    title="Juan Christian — Indonesian Developer"
    description="Juan Christian is a Developer based in Jakarta, Indonesia."
  >
    <Hero />
    <Portfolio />
    <Skills />
  </Layout>
)

export default Home
