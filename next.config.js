/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
  images: {
    domains: ['opengraph.githubassets.com'],
  },
  experimental: {
    appDir: true,
  },
}
