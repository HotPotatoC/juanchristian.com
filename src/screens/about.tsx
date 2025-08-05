"use client";

import ImageMe from "@/assets/me.png";
// import SlideUp from "@/components/animated/slide-up";

import Image from "next/image";
export default function AboutScreen() {
  return (
    <>
      <section className='flex flex-col space-y-6 font-sans font-medium text-white text-4xl'>
        <p>
          Born and raised in Indonesia, who studies software engineering,{" "}
          <span className='font-gosha text-yellow'>
            specializing in web development and backend development.
          </span>{" "}
          Being in front of his computer back when he was a kid, became the
          catalyst to dive into tech.
        </p>

        <p>
          Juan is, unsurprisingly, a{" "}
          <span className='font-gosha text-yellow'>geek</span>. Someone that is
          passionate in technology, who also has a keen interest in esoteric
          media from music, movies, animanga, games, etc.
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
      <Image
        src={ImageMe}
        alt='Juan Christian'
        className='select-none absolute -bottom-14 -right-12 object-cover size-96 rotate-[-20deg] pointer-events-none z-[-1000]'
      />
    </>
  );
}
