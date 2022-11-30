import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import config from '../utils/config'
import Response from '../utils/response'

import SearchResultsHeader from '../components/searchFilter/SearchResultsHeader'
import SearchInput from '../components/searchFilter/SearchInput'
import FilterContext, { InfoState } from '../context/filterContext'
import TabsTitles from '../components/searchFilter/TabsTitles'
import FiltersSearchResults from '../components/searchFilter/FiltersSearchResults'
import GlSearchResultsSection from '../components/searchFilter/GlSearchResultsSection'

import PageTitle from '../components/Layout/PageTitle'
import TreatedRequests from '../components/searchFilter/TreatedRequests'

const SearchEngine: NextPage = ({ results }: any) => {
  const router = useRouter()

  const [toggleIndex, setToggleIndex] = useState(1)

  const {
    state: { term },
  } = InfoState()

  const handleToggle = (index: any, tab: string) => {
    setToggleIndex(index)
    if (tab === 'institWebsites') {
      router.push(`/searchengine?${tab}=${term}`)
      return
    }
    if (!router.asPath.includes(tab)) router.push(`/searchengine#${tab}`)
  }

  useEffect(() => {
    if (router.asPath.includes('proactivPublish'))
      return handleToggle(1, 'proactivPublish')
    if (router.asPath.includes('institWebsites'))
      return handleToggle(2, 'institWebsites')
    if (router.asPath.includes('mostFaReq')) return handleToggle(3, 'mostFaReq')
  }, [router.asPath])

  return (
    <div>
      <PageTitle> ابحث عن المعلومة قبل تقديم الطلب</PageTitle>
      <div className="mt-[120px] px-20">
        <SearchResultsHeader />
      </div>
      <hr></hr>
      <div className="px-20 py-10">
        <TabsTitles
          results={results}
          toggleIndex={toggleIndex}
          handleTggle={handleToggle}
        />
        <FiltersSearchResults toggleIndex={toggleIndex} />
        <GlSearchResultsSection
          toggleIndex={toggleIndex}
          router={router}
          results={results}
        />
        <TreatedRequests toggleIndex={toggleIndex} />
      </div>
    </div>
  )
}

export default SearchEngine

export async function getServerSideProps({ query }: any) {
  const dumyData = true

  const { glApi, glContextKey } = config
  const startIndex = query.start || 0

  const results = dumyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${glApi}&cx=${glContextKey}&q=${query.institWebsites}&start=${startIndex}`
      ).then((res) => res.json())

  return {
    props: {
      results,
    },
  }
}
