import React from "react";
import Image from "next/image";
import ContentWrapper from "../../shared/ContentWrapper";
import { shimmer, toBase64 } from "../../lib/utils";

type Project = {
  name: string;
  type: string;
  description: string;
  url: string;
  image: string;
};

const Project = (project: Project) => (
  <div className='relative py-12 border-white border-b-2 group'>
    <a
      href={project.url}
      target='_blank'
      rel='noopener noreferrer'
      className='flex flex-col md:flex-row md:justify-between md:items-center'
    >
      <Image
        src={project.image}
        alt={project.name}
        priority={true}
        layout='fill'
        placeholder='blur'
        objectFit='cover'
        objectPosition='center'
        blurDataURL={`data:image/svg+xml;base64,${toBase64(
          shimmer(1000, 1000)
        )}`}
        className='z-0 opacity-0 group-hover:opacity-75 duration-150'
      />
      <h1 className='relative z-10 font-display text-4xl md:text-7xl md:transform md:group-hover:translate-x-12 duration-500'>
        {project.name}
      </h1>
      <section className='relative z-10 md:text-right md:transform md:group-hover:-translate-x-12 duration-500'>
        <p className='font-medium text-xl'>{project.type}</p>
        <p className='font-medium text-xl'>{project.description}</p>
      </section>
    </a>
  </div>
);

const projects: Project[] = [
  {
    name: "Mindzzle",
    type: "Front-end internship",
    description: "Human Capital Management Platform (Ceased Operations)",
    url: "https://www.instagram.com/mindzzle/?hl=en",
    image: "/images/mindzzlemockup.jpg",
  },
  {
    name: "Twitter Clone",
    type: "Full-stack Development",
    description: "An experiment to recreate twitter",
    url: "https://github.com/HotPotatoC/twitter-clone#preview",
    image: "/images/twitterclone.gif",
  },
  {
    name: "kvstore",
    type: "Software Development",
    description: "Key-value in-memory database server",
    url: "https://github.com/HotPotatoC/kvstore",
    image: "/images/kvstore.gif",
  },
  {
    name: "Covinfo",
    type: "Front-end Development",
    description: "COVID-19 tracker website",
    url: "https://covinfo-site.netlify.app",
    image: "/images/covinfomockup.jpg",
  },
];

const Projects = () => (
  <section
    id='projects'
    className='projects relative z-20 mt-12 tracking-tighter'
  >
    <ContentWrapper extraClass='px-6 md:px-32 py-24'>
      {projects.map((project) => (
        <Project key={project.name} {...project} />
      ))}
    </ContentWrapper>
  </section>
);

export default Projects;
