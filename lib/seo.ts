import type { Metadata } from 'next'

type MetadataOptions = {
  title: string
  description: string
} & Partial<Metadata>

const createSEO = ({ title, description }: MetadataOptions): Metadata => ({
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'website',
    url: 'https://www.juanchristian.com',
    locale: 'en_US',
    images: [
      {
        url: 'https://www.juanchristian.com/seo-image.png',
        width: 1080,
        height: 1080,
        alt: 'Me',
      },
    ],
  },
  twitter: {
    creator: '@juanwmv',
    site: '@juanwmv',
    card: 'summary_large_image',
  },
})

export default createSEO
