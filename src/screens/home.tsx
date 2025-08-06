"use client";

import Icon from "@/components/icons";
import { expoEaseInOut } from "@/lib/animation-transitions";
import { motion, useScroll } from "motion/react";
import Link from "next/link";
import * as React from "react";

// import SlideUp from "@/components/animated/slide-up";

export default function HomeScreen() {
  return (
    <>
      <section className='@container/headline mx-auto w-full max-w-7xl mt-32'>
        <SectionHeadline />
        {/* <SectionLinks /> */}
        {/* <SectionLinksAnimated /> */}
      </section>
      <section className='@container/featured-works mx-auto w-full mb-[900px]'>
        <SectionSelectedWorks />
      </section>
    </>
  );
}

const SectionHeadline = () => (
  <>
    <h1 className='font-bold text-[13.57cqw]/tight text-red whitespace-nowrap'>
      Hello! I{`'`}m Juan!
    </h1>

    {/* <h1 className='font-bold text-[13.931cqw]/tight text-red whitespace-nowrap'>
      Juan Christian
    </h1> */}

    <section className='flex justify-between items-baseline w-full mb-8 bg-red px-4 py-3 md:px-8 md:py-6'>
      <span className='font-bold text-[6cqw] md:text-[3cqw]/tight text-white selection:bg-white! selection:text-red!'>
        software engineer
      </span>
      <span className='font-bold text-[6cqw] md:text-[3cqw]/tight text-white selection:bg-white! selection:text-red!'>
        indonesia
      </span>
    </section>
  </>
);

const SectionLinks = () => {
  const links = [
    { href: "/works", label: "works" },
    { href: "/about", label: "about me" },
    { href: "/blog", label: "blog" },
    { href: "/contact", label: "contact me" },
  ];

  return (
    <div className='w-full bg-white'>
      {/* Container for links that will be revealed */}
      <section className='flex flex-col space-y-6 lg:flex-row lg:space-x-2 lg:space-y-0 justify-between items-baseline w-full py-6 px-8'>
        {links.map(({ href, label }) => (
          <Link href={href} key={href}>
            <div className='flex space-x-4 items-baseline group'>
              <span className='text-[5cqw]/tight lg:text-[3cqw]/tight text-black group-hover:text-red font-bold selection:bg-black! selection:text-white!'>
                {label}
              </span>
              <Icon
                name='arrow-up-right'
                className='inline-block size-[3cqw] lg:size-[1.5cqw] text-black group-hover:text-red'
              />
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
};

const SectionLinksAnimated = () => {
  const links = [
    { href: "/works", label: "works" },
    { href: "/about", label: "about me" },
    { href: "/blog", label: "blog" },
    { href: "/contact", label: "contact me" },
  ];

  return (
    <div className='relative w-full'>
      {/* Container for links that will be revealed */}
      <section className='flex justify-between items-baseline w-full py-6 px-8'>
        {links.map(({ href, label }) => (
          <Link href={href} key={href}>
            <span className='text-[3cqw]/tight text-red font-bold'>
              {label}
            </span>
          </Link>
        ))}
      </section>

      {/* Animated mask that will reveal the content */}
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{
          duration: 1,
          ease: expoEaseInOut,
          delay: 0.4,
        }}
        className='absolute inset-0 bg-black origin-right pointer-events-none'
      />

      {/* Border that expands */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{
          duration: 1,
          ease: expoEaseInOut,
          delay: 0.4,
        }}
        className='absolute inset-0 border-[6px] border-red bg-transparent origin-left pointer-events-none'
      />
    </div>
  );
};

const SectionSelectedWorks = () => {
  const scrollTargetRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollTargetRef,
    offset: ["end end", "start start"],
  });
  // const x = useTransform(scrollYProgress, [0, 1], ["150%", "-200%"]);

  // const rotate = useSpring(scrollYProgress, {
  //   stiffness: 500,
  //   damping: 20,
  //   restDelta: 0.1,
  // });

  return (
    <section className='my-[550px]' ref={scrollTargetRef}>
      {/* <motion.div
        className='fixed left-0 -bottom-12 size-[600px] border-[32px] border-red'
        style={{
          scale,
          rotate,
        }}
      /> */}
      <div className='bg-white w-fit'>
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
          transition={{ duration: 1, ease: expoEaseInOut }}
          viewport={{ amount: 0.8, once: true }}
          className='text-[14cqw] md:text-[9cqw] text-red whitespace-nowrap selection:bg-red! selection:text-white! mb-8'
        >
          featured works
        </motion.h1>
      </div>
    </section>
  );
};
