'use client'

import IconRightArrow from '@/components/icons/icon-right-arrow'
import ContentWrapper from '@/components/ui/content-wrapper'
import { useTransition } from '@/lib/animation'
import cn from '@/lib/cn'

import { AnimatePresence, motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useState } from 'react'

type SwitchDarkModeProps = {
  overlayOpen: boolean
}

const SwitchDarkMode = ({ overlayOpen }: SwitchDarkModeProps) => {
  const MoonIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
      <path d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2"></path>
      <path d="M19 11h2m-1 -1v2"></path>
    </svg>
  )

  const SunIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656z"></path>
      <path d="M6.343 17.657l-1.414 1.414"></path>
      <path d="M6.343 6.343l-1.414 -1.414"></path>
      <path d="M17.657 6.343l1.414 -1.414"></path>
      <path d="M17.657 17.657l1.414 1.414"></path>
      <path d="M4 12h-2"></path>
      <path d="M12 4v-2"></path>
      <path d="M20 12h2"></path>
      <path d="M12 20v2"></path>
    </svg>
  )

  const { theme, setTheme } = useTheme()

  const transition = useTransition({ duration: 0.25 })

  return (
    <button
      className={cn([
        !overlayOpen && 'backdrop-blur',
        'relative z-50 w-14 h-14 bg-white-100/75 dark:bg-black/75 border !border-opacity-25 border-black dark:border-white-100 rounded-full duration-100 focus:outline-none overflow-hidden',
      ])}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === 'dark' && (
          <motion.div
            key="dark"
            initial={{ rotate: -45, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 45, opacity: 0 }}
            transition={transition}
            className="relative flex items-center bg-blue-500 origin-[100%_150%]"
          >
            <MoonIcon />
          </motion.div>
        )}
        {theme === 'light' && (
          <motion.div
            key="light"
            initial={{ rotate: -45, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 45, opacity: 0 }}
            transition={transition}
            className="relative flex items-center bg-blue-500 origin-[100%_150%]"
          >
            <SunIcon />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  )
}

type NavLinkProps = {
  to: string
  label: string
  onClick?: () => void
}

const NavLink = ({ to, label, onClick }: NavLinkProps) => (
  <Link
    href={to}
    className="expand-cursor font-display text-4xl md:text-9xl tracking-tighter overflow-hidden"
    onClick={onClick}
  >
    <motion.div
      whileHover={{ x: 150 }}
      transition={{
        duration: 0.5,
        ease: [0.19, 1.0, 0.22, 1.0],
      }}
      className="relative flex items-center space-x-4"
    >
      <IconRightArrow className="absolute left-[-175px]" />
      <h1>{label}</h1>
    </motion.div>
  </Link>
)

type NavbarOverlayProps = {
  close: () => void
}

const NavbarOverlay = ({ close }: NavbarOverlayProps) => {
  return (
    <motion.nav
      initial={{ height: 0 }}
      animate={{ height: '100vh' }}
      exit={{ height: 0 }}
      transition={{
        duration: 1,
        ease: [0.19, 1.0, 0.22, 1.0],
      }}
      className="fixed top-0 left-0 overflow-hidden z-[49] w-screen backdrop-blur-lg bg-white-100/75 dark:bg-black/75"
    >
      <ContentWrapper extraClass="px-6 md:px-12 pt-64">
        <div className="flex flex-col space-y-12">
          <NavLink to="/" label="HOME" onClick={close} />
          <NavLink to="/works" label="WORKS" onClick={close} />
          <NavLink to="/about" label="ABOUT" onClick={close} />
        </div>
      </ContentWrapper>
    </motion.nav>
  )
}

const Navbar = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false)

  const closeOverlay = () => setIsOverlayOpen(false)
  return (
    <>
      <AnimatePresence>
        {isOverlayOpen && <NavbarOverlay close={closeOverlay} />}
      </AnimatePresence>
      <nav className="fixed z-50 w-full py-2">
        <ContentWrapper extraClass="px-6 md:px-12 pt-12">
          <div className="flex justify-between items-center">
            <button
              className={cn([
                !isOverlayOpen && 'backdrop-blur',
                'z-50 px-6 py-3 md:px-12 md:py-4 bg-white-100/75 dark:bg-black/75 border !border-opacity-25 border-black dark:border-white-100 rounded-full font-display text-2xl md:text-4xl hover:bg-black hover:text-white-100 dark:hover:bg-white-100 dark:hover:text-black duration-100 focus:outline-none',
              ])}
              onClick={() => setIsOverlayOpen(!isOverlayOpen)}
            >
              {isOverlayOpen ? 'CLOSE' : 'MENU'}
            </button>
            <SwitchDarkMode overlayOpen={isOverlayOpen} />
          </div>
        </ContentWrapper>
      </nav>
    </>
  )
}

export default Navbar
