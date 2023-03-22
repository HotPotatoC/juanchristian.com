import { useTheme } from 'next-themes'
import Link from 'next/link'
import ContentWrapper from './ContentWrapper'

const SwitchDarkMode = () => {
  const MoonIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-moon-stars"
      width="24"
      height="24"
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
      className="icon icon-tabler icon-tabler-sun-high"
      width="24"
      height="24"
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

  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
    </button>
  )
}

const Navbar = () => (
  <nav className="w-full py-2">
    <ContentWrapper extraClass="px-6 md:px-12 pt-12">
      <div className="flex justify-between items-center">
        <div className="font-semibold text-xl md:text-xl">
          <Link href="/">juanchristian</Link>
        </div>
        <div className="flex space-x-8">
          <div className="hidden md:block font-semibold text-xl md:text-xl">
            <Link href="/#portfolio">portfolio</Link>
          </div>
          <div className="hidden md:block font-semibold text-xl md:text-xl">
            <Link href="/about">about me</Link>
          </div>
          <div className="hidden md:block font-semibold text-xl md:text-xl">
            <Link href="mailto:juandotulung@gmail.com">get in touch</Link>
          </div>
          <SwitchDarkMode />
        </div>
      </div>
    </ContentWrapper>
  </nav>
)

export default Navbar
