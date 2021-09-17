import type { NextPage } from "next";
import { NextSeo } from "next-seo";

import Hero from "../modules/home/Hero";
import Me from "../modules/home/Me";
import Projects from "../modules/home/Projects";
import Skills from "../modules/home/Skills";
import Layout from "../shared/Layout";

const Home: NextPage = () => (
  <Layout title='Juan Christian — Developer'>
    <Hero />
    <Me />
    <Projects />
    <Skills />
  </Layout>
);

export default Home;
