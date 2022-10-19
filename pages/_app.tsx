import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { useRouter } from 'next/router'

function getDirection(locale: any) {
  if (locale === 'ar') {
    return 'rtl'
  }

  return 'ltr'
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { locale } = useRouter()
  return <Component {...pageProps} dir={getDirection(locale)} />
}

export default MyApp
