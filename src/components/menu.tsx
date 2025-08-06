"use client";

import { expoEaseInOut } from "@/lib/animation-transitions";
import { useMenu } from "@/providers/menu-provider";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import * as React from "react";
import Button from "./button";
import Icon from "./icons";

export default function Menu() {
  const { isOpen, toggleMenu, closeMenu } = useMenu();

  // Close menu on "esc"
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeMenu]);

  return (
    <>
      <header className='@container/header fixed z-[101] right-0 top-0 mx-auto px-12 py-8'>
        <nav className='flex justify-end items-center select-none'>
          <Button
            onClick={toggleMenu}
            className='flex items-center space-x-4 px-4 py-2 group hover:bg-red transition-colors duration-500 ease-in-expo'
          >
            {!isOpen && (
              <Icon
                name='menu'
                className='text-red group-hover:text-white dark:group-hover:text-black'
              />
            )}
            {isOpen && (
              <Icon
                name='x'
                className='text-red group-hover:text-white dark:group-hover:text-black'
              />
            )}
            <span className='text-2xl text-red group-hover:text-white dark:group-hover:text-black font-geometric'>
              {isOpen ? "close" : "menu"}
            </span>
          </Button>
        </nav>
      </header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ x: -2000 }}
              animate={{ x: 0 }}
              exit={{ x: -2000 }}
              transition={{ duration: 1, ease: expoEaseInOut }}
              className='fixed left-0 top-0 w-full h-screen z-[100]'
            >
              <div className='@container/header-menu mx-auto flex items-start'>
                <MenuLinks />
                <RedWedge />
              </div>
            </motion.div>

            {/** White circle */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 1, ease: expoEaseInOut }}
              className='fixed right-0 bottom-24 w-[650px] h-[650px] z-[99] bg-white rounded-full'
            />
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              exit={{ width: 0 }}
              transition={{ duration: 1, ease: expoEaseInOut }}
              className='fixed right-0 top-0 h-screen z-[98] bg-black'
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
}

const MenuLinks = () => {
  const { closeMenu } = useMenu();
  const links = [
    { href: "/", label: "home" },
    { href: "/works", label: "works" },
    { href: "/about", label: "about me" },
    { href: "/blog", label: "blog" },
    { href: "/contact", label: "contact me" },
  ];

  return (
    <div className='bg-red flex flex-col space-y-6 w-full max-w-4xl h-screen pt-12 pl-32'>
      {links.map(({ href, label }) => (
        <div key={href} className='w-fit bg-black px-6 py-4'>
          <Link href={href} onClick={() => closeMenu()}>
            <span className='select-none text-7xl/tight text-red hover:text-white font-bold'>
              {label}
            </span>
          </Link>
        </div>
      ))}
    </div>
  );
};

const RedWedge = () => (
  <div className='w-full max-w-[825px] h-screen -ml-1 text-red'>
    <svg viewBox='0 0 790 1027' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M789.5 651L0.5 1027V0.5H272.5L789.5 651Z' fill='currentColor' />
    </svg>
  </div>
);
