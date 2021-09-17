import React, { useEffect } from "react";
import useScroll from "../../shared-hooks/useScroll";
import ContentWrapper from "../../shared/ContentWrapper";

const Hero = () => {
  const { scrollY } = useScroll();

  return (
    <section className='relative overflow-hidden'>
      <div
        className='absolute top-[15%] md:top-[-33.3%] z-10'
        style={{
          left: `${(Math.round(scrollY) + 120) * -1}px`,
        }}
      >
        <div className='font-black uppercase text-[340px] md:text-[650px] text-stroke text-stroke-primary text-transparent select-none opacity-50'>
          juan
        </div>
      </div>
      <div
        className='absolute top-[15%] md:top-[-33.3%] z-10'
        style={{
          left: `${Math.round(scrollY) - 120}px`,
        }}
      >
        <div className='font-black uppercase text-[340px] md:text-[650px] text-stroke text-stroke-primary text-transparent select-none opacity-50'>
          juan
        </div>
      </div>

      <ContentWrapper extraClass='px-6 md:px-32 py-24'>
        <section
          id='hero'
          className='hero relative z-20 mt-12 tracking-tighter'
        >
          <h1 className='font-display text-6xl md:text-9xl'>Developer</h1>
          <h1 className='font-display text-6xl md:text-9xl'>
            based in Indonesia
          </h1>
        </section>
        <section
          id='hero-footer'
          className='hero-footer relative z-20 mt-32 flex justify-between items-baseline'
        >
          <p className='hidden md:block font-medium text-2xl'>
            © {new Date().getFullYear()} — Juan Christian
          </p>
          <p className='block md:hidden font-medium text-xl'>
            © {new Date().getFullYear()} — J.C
          </p>
          <p className='font-medium text-xl md:text-2xl'>
            <a href='mailto:juandotulung@gmail.com'>E-MAIL</a>
          </p>
        </section>
      </ContentWrapper>
    </section>
  );
};

export default Hero;
