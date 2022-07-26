import { NextSeo } from 'next-seo'
import Navbar from './Navbar'
import Footer from './Footer'
import CustomCursor from './CustomCursor'

type LayoutProps = {
  title: string
  description: string
}

const Layout: React.FC<LayoutProps> = ({ children, title, description }) => {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          type: 'website',
          url: 'https://www.juanchristian.com',
          locale: 'en_US',
          images: [
            {
              url: 'https://www.juanchristian.com/images/me2.png',
              width: 1080,
              height: 1080,
              alt: 'Me',
            },
          ],
        }}
        canonical="https://www.juanchristian.com"
        twitter={{
          handle: '@juanwmv',
          site: '@juanwmv',
          cardType: 'summary_large_image',
        }}
      />
      <CustomCursor />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
