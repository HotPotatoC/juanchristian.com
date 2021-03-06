import React from "react";
import ContentWrapper from "../../shared/ContentWrapper";

const Toolbelt = () => (
  <div className='flex flex-wrap mb-12'>
    <div className='w-full lg:w-1/3'>
      <h2 className='font-display text-2xl md:text-4xl tracking-tight uppercase'>
        Skills
      </h2>
    </div>
    <div className='w-full lg:w-2/3'>
      <p className='font-medium text-2xl tracking-tight mb-4'>
        JAVASCRIPT / TYPESCRIPT / GOLANG / PHP / PYTHON
      </p>
      <p className='font-medium text-2xl tracking-tight mb-4'>
        VUE.JS / REACT.JS / NODE.JS / DOCKER
      </p>
      <p className='font-medium text-2xl tracking-tight mb-4'>
        MYSQL / POSTGRESQL / MONGODB / REDIS
      </p>
      <p className='font-medium text-2xl tracking-tight'>
        ADOBE XD / FIGMA / GIT / GITHUB / TRELLO
      </p>
    </div>
  </div>
);

const Education = () => (
  <div className='flex flex-wrap mb-12'>
    <div className='w-full lg:w-1/3'>
      <h2 className='font-display text-2xl md:text-4xl tracking-tight uppercase'>
        Education
      </h2>
    </div>
    <div className='w-full lg:w-2/3'>
      <p className='font-medium text-2xl tracking-tight mb-4'>
        SMKN 2 Central Jakarta — Software Engineering (2018 - 2021)
      </p>
      <p className='font-medium text-2xl tracking-tight'>
        Binus University — Computer Science (2021 - <small className="opacity-50">exp.</small> 2025)
      </p>
    </div>
  </div>
);

const Skills = () => (
  <section id='skills' className='skills mt-24'>
    <ContentWrapper extraClass='px-6 md:px-32 py-24'>
      <Toolbelt />
      <Education />
    </ContentWrapper>
  </section>
);

export default Skills;
