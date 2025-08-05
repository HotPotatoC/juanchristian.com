"use client";

import Icon from "@/components/icons";
import { expoEaseInOut } from "@/lib/animation-transitions";
import { motion, useScroll, useSpring } from "motion/react";
import Link from "next/link";

// import SlideUp from "@/components/animated/slide-up";

export default function HomeScreen() {
  return (
    <section className='mt-12 mb-[900px]'>
      <SectionHeadline />
      {/* <SectionLinks /> */}
      {/* <SectionLinksAnimated /> */}

      <SectionSelectedWorks />
    </section>
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

    <section className='flex justify-between items-baseline w-full mb-8 bg-green px-4 py-3 md:px-8 md:py-6'>
      <span className='font-bold text-[6cqw] md:text-[3cqw]/tight text-white'>
        software engineer
      </span>
      <span className='font-bold text-[6cqw] md:text-[3cqw]/tight text-white'>
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
              <span className='text-[5cqw]/tight lg:text-[3cqw]/tight text-black group-hover:text-red font-bold'>
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
        className='absolute inset-0 bg-white origin-right pointer-events-none'
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
  const { scrollYProgress } = useScroll();
  const scale = useSpring(scrollYProgress, {
    stiffness: 500,
    damping: 50,
    restDelta: 0.001,
  });

  const rotate = useSpring(scrollYProgress, {
    stiffness: 500,
    damping: 20,
    restDelta: 0.1,
  });
  return (
    <section className='relative mt-[550px]'>
      <motion.div
        className='fixed left-0 -bottom-12 size-[600px] border-[32px] border-red'
        style={{
          scale,
          rotate,
        }}
      />
      <h1 className='font-bold text-6xl text-white whitespace-nowrap'>
        SELECTED WORKS
      </h1>
    </section>
  );
};
