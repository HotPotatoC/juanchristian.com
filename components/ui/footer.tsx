import Link from 'next/link'
import ContentWrapper from './content-wrapper'

const Socials = () => (
  <div className="flex space-x-4">
    <a
      href="https://github.com/HotPotatoC"
      className="text-xl opacity-60 hover:opacity-100 duration-150"
    >
      <svg
        className="fill-black dark:fill-white"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    </a>
    <a
      href="https://instagram.com/juanchristian.dev"
      className="text-xl opacity-60 hover:opacity-100 duration-150"
    >
      <svg
        className="fill-black dark:fill-white"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 30 30"
        width="32"
        height="32"
      >
        <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z" />
      </svg>
    </a>
    <a
      href="https://www.linkedin.com/in/juanwmv/"
      className="text-xl opacity-60 hover:opacity-100 duration-150"
    >
      <svg
        className="fill-black dark:fill-white"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"
        />
      </svg>
    </a>
    {/* <a
      href="https://twitter.com/juanwmv"
      className="text-xl opacity-60 hover:opacity-100 duration-150"
    >
      <svg
        className="fill-black dark:fill-white"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
      </svg>
    </a> */}
  </div>
)

const Footer = () => (
  <footer className="w-full py-6">
    <ContentWrapper extraClass="px-6 md:px-12 pt-12">
      <div className="flex flex-col md:flex-row justify-between items-baseline mt-8 pt-6 border-t border-black dark:border-white">
        <div className="mb-4 md:mb-0 grid grid-cols-2 md:grid-cols-4 gap-6">
          <p className="text-xl font-medium hover:text-primary duration-150">
            <Link href="/#projects">projects</Link>
          </p>
          <p className="text-xl font-medium hover:text-primary duration-150">
            <Link href="/about">about</Link>
          </p>
          <p className="text-xl font-medium hover:text-primary duration-150">
            <Link href="mailto:juandotulung@gmail.com">get in touch</Link>
          </p>
          <p className="text-xl font-medium hover:text-primary duration-150">
            <Link href="https://github.com/HotPotatoC/juanchristian.com">
              source code
            </Link>
          </p>
        </div>
        <Socials />
        {/* <p className="text-xl opacity-60 hover:opacity-100 duration-150">
          <Link href="/">TOP</Link>
        </p> */}
      </div>
    </ContentWrapper>
  </footer>
)

export default Footer
