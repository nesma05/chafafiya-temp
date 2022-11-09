import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { useRouter } from 'next/router'
import Layout from '../components/Layout/Layout'

function getDirection(locale: any) {
  if (locale === 'ar') {
    return 'rtl'
  }

  return 'ltr'
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { locale } = useRouter()
  return (
    <Layout dir={getDirection(locale)}>
      <Component {...pageProps} dir={getDirection(locale)} />
    </Layout>
  )
}

export default MyApp
