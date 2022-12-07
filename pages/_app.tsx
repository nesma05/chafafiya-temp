import '../styles/globals.css'
import type { AppProps } from 'next/app'
import type { NextPage } from 'next'
import { PageWithSecondaryLayoutType } from '../components/Layout/SecondaryLayout'
import { useRouter } from 'next/router'
import MainLayout from '../components/Layout/MainLayout'
import SearchContext from '../context/searchContext'
import FilterContext from '../context/filterContext'
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'

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
  const [queryClient] = useState(() => new QueryClient());
  const { locale } = useRouter()
  const Layout = Component.getLayout || MainLayout
  return (
   
      <Layout dir={getDirection(locale)}>
        <FilterContext>
          <Component {...pageProps} />
        </FilterContext>
      </Layout>
    
  )
}

export default MyApp
