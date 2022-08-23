import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { locale } = useRouter()
  return <Component {...pageProps} />
}

export default MyApp
