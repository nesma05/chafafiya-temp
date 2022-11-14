import '../styles/globals.css'
import type { AppProps } from 'next/app'
import type { NextPage } from 'next'
import {PageWithSecondaryLayoutType} from '../components/Layout/SecondaryLayout'
import { useRouter } from 'next/router'
import MainLayout from '../components/Layout/MainLayout'



type AppLayoutProps = {
  Component: PageWithSecondaryLayoutType
  pageProps: any
}

function getDirection(locale: any) {
  if (locale === 'ar') {
    return 'rtl'
  }

  return 'ltr'
}

const MyApp = ({ Component, pageProps }: AppLayoutProps) => {
  const { locale } = useRouter()
  const Layout = Component.getLayout || MainLayout
  return (
    <Layout dir={getDirection(locale)}>
      <Component {...pageProps} dir={getDirection(locale)} />
    </Layout>
  )
}

export default MyApp
