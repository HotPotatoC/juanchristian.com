"use client";

import { expoEaseInOut } from "@/lib/animation-transitions";
import { motion } from "motion/react";
import Link from "next/link";

// import SlideUp from "@/components/animated/slide-up";

export default function HomeScreen() {
  return (
    <>
      <SectionHeadline />
      <SectionLinks />
    </>
  );
}

const SectionHeadline = () => (
  <>
    <h1 className='font-bold text-[13.5cqw]/tight whitespace-nowrap text-red'>
      Hello! I{`'`}m Juan!
    </h1>

    <section className='flex justify-between items-baseline w-full mb-8'>
      <span className='text-[3cqw]/tight text-red'>software engineer</span>
      <span className='text-[3cqw]/tight text-red'>indonesia</span>
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
