import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="bg-white dark:bg-black text-black dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
