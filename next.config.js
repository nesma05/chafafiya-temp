/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n: {
    // The locales you want to support in your app
    locales: ['ar','amz', 'fr'],
    // The default locale you want to be used when visiting a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'ar',
  },
 
  images: {
    domains: ['www.cdai.ma','images.unsplash.com'],
  },
}
