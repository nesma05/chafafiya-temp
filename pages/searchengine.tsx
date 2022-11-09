import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import {  useState } from 'react'
import config from '../utils/config'
import Response from '../utils/response'

import SearchResultsHeader from '../components/searchFilter/SearchResultsHeader'
import SearchInput from '../components/searchFilter/SearchInput'
import FilterContext from '../context/filterContext'
import TabsTitles from '../components/searchFilter/TabsTitles'
import FiltersSearchResults from '../components/searchFilter/FiltersSearchResults'
import GlSearchResultsSection from '../components/searchFilter/GlSearchResultsSection'

import PageTitle from '../components/Layout/PageTitle'

const SearchEngine: NextPage = ({ results}: any) => {
  const router = useRouter()

  const [toggleIndex, setToggleIndex] = useState(1)

  const handleTggle = (index: any) => {
    setToggleIndex(index)
  }

  return (
    <FilterContext>
      <PageTitle> ابحث عن المعلومة قبل تقديم الطلب</PageTitle>
      <div className="mt-[120px] px-20">
        <SearchResultsHeader />
        <div className="my-8 mx-10 w-[80%] space-y-4">
          <SearchInput button="yes" />
        </div>
      </div>
      <hr></hr>
      <div className="px-20 py-10">
        <TabsTitles
          results={results}
          toggleIndex={toggleIndex}
          handleTggle={handleTggle}
        />
        <FiltersSearchResults toggleIndex={toggleIndex} />
        <GlSearchResultsSection
          toggleIndex={toggleIndex}
          router={router}
          results={results}
        />
      </div>
    </FilterContext>
  )
}

export default SearchEngine

export async function getServerSideProps({ query }: any) {
  const dumyData = false

  const { glApi, glContextKey } = config
  const startIndex = query.start || 0

  const results = dumyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${glApi}&cx=${glContextKey}&q=${query.term}&start=${startIndex}`
      ).then((res) => res.json())

  return {
    props: {
      results,
    },
  }
}
