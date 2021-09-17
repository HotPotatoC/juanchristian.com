import React from "react";
import Link from "next/link";
import ContentWrapper from "./ContentWrapper";

const Navbar = () => (
  <nav className='w-full py-6'>
    <ContentWrapper extraClass='px-6 md:px-32 pt-12'>
      <div className='flex justify-between items-center'>
        <div className='font-medium text-xl md:text-2xl uppercase'>
          <Link href='/#projects'>Projects</Link>
        </div>
        <div className='font-medium text-xl md:text-2xl uppercase'>
          <Link href='/#me'>About</Link>
        </div>
      </div>
    </ContentWrapper>
  </nav>
);

export default Navbar;
