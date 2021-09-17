import type { NextPage } from "next";

import Hero from "../modules/home/Hero";
import Me from "../modules/home/Me";
import Projects from "../modules/home/Projects";
import Skills from "../modules/home/Skills";
import Layout from "../shared/Layout";

const Home: NextPage = () => (
  <Layout
    title='Juan Christian — Indonesian Developer'
    description='Juan Christian is a Developer based in Jakarta, Indonesia.'
  >
    <Hero />
    <Me />
    <Projects />
    <Skills />
  </Layout>
);

export default Home;
