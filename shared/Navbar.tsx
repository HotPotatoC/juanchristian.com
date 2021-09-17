import React from "react";
import Link from "next/link";
import ContentWrapper from "./ContentWrapper";

const Navbar = () => (
  <nav className='w-full py-6'>
    <ContentWrapper extraClass='px-6 md:px-32 pt-12'>
      <div className='flex justify-between items-center'>
        <h1 className='font-medium text-xl md:text-2xl uppercase'>
          <Link href='/#projects'>Projects</Link>
        </h1>
        <h1 className='font-medium text-xl md:text-2xl uppercase'>
          <Link href='/#me'>About</Link>
        </h1>
      </div>
    </ContentWrapper>
  </nav>
);

export default Navbar;
