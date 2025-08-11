"use client";

import AnimateSlide from "@/components/animations/slide";
import { expoEaseInOut } from "@/lib/animation-transitions";
import { useFrameOverlay } from "@/providers/frame-overlay-provider";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import * as React from "react";

import ImageCuriona from "@/assets/works/curiona.png";
import Image from "next/image";

// import SlideUp from "@/components/animated/slide-up";

export default function HomeScreen() {
  return (
    <>
      <SectionHeadline />
      <SectionSelectedWorks />
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
  </section>
);

const SectionSelectedWorks = () => {
  const { setFrameSize } = useFrameOverlay();
  const expandFrameOverlayTargetRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(expandFrameOverlayTargetRef);

  React.useEffect(() => {
    if (isInView) {
      setFrameSize("10px");
    } else {
      setFrameSize("20px");
    }
  }, [isInView, setFrameSize]);

  const works = [
    {
      title: "Curiona",
      link: "/works/curiona",
      imageSrc: ImageCuriona,
    },
    {
      title: "Curiona",
      link: "/works/curiona",
      imageSrc: ImageCuriona,
    },
    {
      title: "Curiona",
      link: "/works/curiona",
      imageSrc: ImageCuriona,
    },
    {
      title: "Curiona",
      link: "/works/curiona",
      imageSrc: ImageCuriona,
    },
  ];

  return (
    <section
      className='@container/featured-works mx-auto w-full h-fit mt-[550px] mb-[900px]'
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

      <div className='grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 place-items-center my-12'>
        {works.map((work, idx) => (
          <motion.div
            key={idx}
            initial={{ scale: 0.9, y: 50, opacity: 0 }}
            whileInView={{ scale: 1, y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: expoEaseInOut, delay: idx * 0.2 }}
            viewport={{ amount: 0.2, once: true }}
            className='origin-bottom'
          >
            <Link href={work.link}>
              <Image
                src={work.imageSrc}
                alt={work.title}
                className='select-none w-xl h-full'
              />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
