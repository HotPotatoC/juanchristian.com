"use client";
import Image from "next/image";
// import SlideUp from "@/components/animated/slide-up";

export default function AboutScreen() {
  return (
    <section className='@container/about mx-auto w-full max-w-7xl mt-52'>
      <section className='flex flex-col space-y-6 font-sans font-medium text-white text-center text-2xl md:text-4xl'>
        <p>
          Juan is born and raised in Indonesia, who studies software
          engineering,{" "}
          <span className='font-gosha text-yellow'>
            currently specializing in web development specifically in building
            backend applications.
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
        src='/me.png'
        alt='Juan Christian'
        width={1006}
        height={1006}
        className='select-none fixed -bottom-14 -right-12 object-cover size-96 rotate-[-20deg] pointer-events-none z-[-1000]'
      />
    </section>
  );
}
