import React from "react";
import Link from "next/link";
import ContentWrapper from "./ContentWrapper";

const Socials = () => (
  <div className='flex flex-col space-y-4'>
    <a
      href='https://github.com/HotPotatoC'
      className='text-xl opacity-60 hover:opacity-100 duration-150'
    >
      GitHub
    </a>
    <a
      href='https://instagram.com/juanwmv.dev'
      className='text-xl opacity-60 hover:opacity-100 duration-150'
    >
      Instagram
    </a>
    <a
      href='https://twitter.com/juanwmv'
      className='text-xl opacity-60 hover:opacity-100 duration-150'
    >
      Twitter
    </a>
    <a
      href='https://dev.to/HotPotatoC'
      className='text-xl opacity-60 hover:opacity-100 duration-150'
    >
      DEV.to
    </a>
  </div>
);

const Links = () => (
  <div className='flex flex-col space-y-4'>
    <Link href='/' passHref={true}>
      <span className='text-xl opacity-60 hover:opacity-100 duration-150'>
        Home
      </span>
    </Link>
    <Link href='/#projects' passHref={true}>
      <span className='text-xl opacity-60 hover:opacity-100 duration-150'>
        Projects
      </span>
    </Link>
    <Link href='/#about' passHref={true}>
      <span className='text-xl opacity-60 hover:opacity-100 duration-150'>
        About
      </span>
    </Link>
  </div>
);

const Footer = () => (
  <footer className='w-full py-6'>
    <ContentWrapper extraClass='px-6 md:px-32 pt-12'>
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-6'>
        <Socials />
        <Links />
        <a
          href='mailto:juandotulung@gmail.com'
          className='text-xl hover:text-primary duration-150'
        >
          juandotulung@gmail.com
        </a>
      </div>

      <div className='flex justify-between items-baseline mt-8 pt-6 border-t-2 border-white border-opacity-75'>
        <h1 className='text-xl opacity-60'>
          © {new Date().getFullYear()} — Juan Christian
        </h1>
        <Link href='/' passHref={true}>
          <span className='text-xl opacity-60 hover:opacity-100 duration-150'>
            TOP
          </span>
        </Link>
      </div>
    </ContentWrapper>
  </footer>
);

export default Footer;
