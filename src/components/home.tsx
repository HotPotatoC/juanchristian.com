"use client";

import AnimateSlide from "@/components/animations/slide";
import { expoEaseInOut } from "@/lib/animation-transitions";
import { useFrameOverlay } from "@/providers/frame-overlay-provider";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import * as React from "react";

import ImageCuriona from "~/works/curiona.png";

// import SlideUp from "@/components/animated/slide-up";

export default function HomeScreen() {
  return (
    <>
      <SectionHeadline />
      <SectionFeaturedWorks />
      <SectionAboutMe />
    </>
  );
}

const SectionHeadline = () => (
  <section className='@container/headline mx-auto w-full max-w-7xl mt-64'>
    <h1 className='font-bold text-[13.57cqw]/tight text-red whitespace-nowrap'>
      Hello! I{`'`}m Juan!
    </h1>

    <section className='flex justify-between items-baseline w-full mb-8 bg-red px-4 py-3 md:px-8 md:py-6'>
      <span className='font-bold text-[6cqw] md:text-[3cqw]/tight text-white selection:bg-white! selection:text-red!'>
        software engineer
      </span>
      <span className='font-bold text-[6cqw] md:text-[3cqw]/tight text-white selection:bg-white! selection:text-red!'>
        indonesia
      </span>
    </section>
    <div className='flex flex-col space-y-4'>
      <span className='font-sans text-red text-base'>
        Website is still under construction, please be patient! ⚒️
      </span>
      <span className='font-sans text-red text-base'>
        Visit my GitHub for more works!{" "}
        <Link
          href='https://github.com/HotPotatoC'
          target='_blank'
          className='font-bold text-white underline'
        >
          here
        </Link>
      </span>
    </div>
  </section>
);

const SectionFeaturedWorks = () => {
  const { setFrameSize } = useFrameOverlay();
  const expandFrameOverlayTargetRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(expandFrameOverlayTargetRef);

  React.useEffect(() => {
    if (isInView) {
      setFrameSize("10px");
    } else {
      setFrameSize("20px");
    }

    return () => {
      setFrameSize("20px");
    };
  }, [isInView, setFrameSize]);

  const works = [
    {
      title: "Curiona",
      link: "https://github.com/curiona-org",
      imageSrc: ImageCuriona,
    },
    {
      title: "kvstore",
      link: "https://github.com/HotPotatoC/kvstore",
      target: "_blank",
      imageSrc: ImageCuriona,
    },
    {
      title: "Snowflake ID Generator",
      link: "https://github.com/HotPotatoC/snowflake",
      target: "_blank",
      imageSrc: ImageCuriona,
    },
    {
      title: "Twitter Clone",
      link: "https://github.com/HotPotatoC/twitter-clone/tree/master",
      imageSrc: ImageCuriona,
    },
  ];

  return (
    <section
      className='@container/featured-works mx-auto w-full h-fit mt-[550px]'
      ref={expandFrameOverlayTargetRef}
    >
      {/* <motion.div
        className='fixed left-0 -bottom-12 size-[600px] border-[32px] border-red'
        style={{
          scale,
          rotate,
        }}
      /> */}
      <AnimateSlide direction='right' delay={0.5}>
        <span className='text-2xl text-white select-none'>01</span>
      </AnimateSlide>
      <div className='relative w-fit'>
        <motion.h1
          initial={{
            y: 50,
            rotateY: 25,
            rotateX: 25,
            rotateZ: -10,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            rotateY: 0,
            rotateX: 0,
            rotateZ: 0,
            opacity: 1,
          }}
          transition={{ duration: 1, ease: expoEaseInOut, delay: 0.5 }}
          viewport={{ amount: 0.8, once: true }}
          className='relative z-20 font-bold text-[8cqw] md:text-[5cqw] text-white whitespace-nowrap selection:bg-white! selection:text-red! mb-8'
        >
          featured works
        </motion.h1>
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1, ease: expoEaseInOut }}
          viewport={{ amount: 0.8, once: true }}
          className='absolute inset-0 origin-bottom z-10 bg-red'
        />
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-24 md:place-items-center my-12'>
        {works.map((work, idx) => (
          <motion.div
            key={idx}
            initial={{ scale: 0.9, y: 50, opacity: 0 }}
            whileInView={{ scale: 1, y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: expoEaseInOut, delay: idx * 0.2 }}
            viewport={{ amount: 0.2, once: true }}
            className='h-32 origin-bottom'
          >
            <Link href={work.link} target={work.target}>
              <h1 className='text-white md:text-center text-4xl lg:text-6xl'>
                {work.title}
              </h1>
              {/* <Image
                src={work.imageSrc}
                alt={work.title}
                quality={100}
                className='select-none w-xl h-full object-cover'
              /> */}
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const SectionAboutMe = () => {
  return (
    <section className='@container/about-me mx-auto w-full h-fit my-64'>
      {/* <motion.div
        className='fixed left-0 -bottom-12 size-[600px] border-[32px] border-red'
        style={{
          scale,
          rotate,
        }}
      /> */}
      <AnimateSlide direction='right' delay={0.5}>
        <span className='text-2xl text-white select-none'>02</span>
      </AnimateSlide>
      <div className='relative w-fit'>
        <motion.h1
          initial={{
            y: 50,
            rotateY: 25,
            rotateX: 25,
            rotateZ: -10,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            rotateY: 0,
            rotateX: 0,
            rotateZ: 0,
            opacity: 1,
          }}
          transition={{ duration: 1, ease: expoEaseInOut, delay: 0.5 }}
          viewport={{ amount: 0.8, once: true }}
          className='relative z-20 font-bold text-[8cqw] md:text-[5cqw] text-white whitespace-nowrap selection:bg-white! selection:text-red! mb-8'
        >
          about me
        </motion.h1>
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1, ease: expoEaseInOut }}
          viewport={{ amount: 0.8, once: true }}
          className='absolute inset-0 origin-bottom z-10 bg-red'
        />
      </div>

      <section className='mx-auto max-w-7xl flex flex-col space-y-6 font-sans font-medium text-white text-center text-2xl md:text-4xl mb-64'>
        <p>
          Juan is born and raised in Indonesia, who studies software
          engineering,{" "}
          <span className='font-gosha text-yellow selection:bg-yellow! selection:text-blue!'>
            currently specializing in web development specifically in building
            backend applications.
          </span>{" "}
          Being in front of his computer back when he was a kid, became the
          catalyst to dive into tech.
        </p>

        <p>
          Juan is, unsurprisingly, a{" "}
          <span className='font-gosha text-yellow selection:bg-yellow! selection:text-blue!'>
            geek
          </span>
          . Someone that is passionate in technology, who also has a keen
          interest in esoteric media from music, movies, animanga, games, etc.
        </p>

        <p>
          Interested in working with me? send me an email at
          <a href='mailto:juandotulung@gmail.com'>
            <span className='font-gosha text-red'>
              {" "}
              juandotulung@gmail.com 📩
            </span>
          </a>
        </p>
      </section>
    </section>
  );
};
