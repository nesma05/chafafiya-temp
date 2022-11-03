import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
import config from '../utils/config'
import Response from '../utils/response'
import { NoteIcon, SearchIcon } from '../components/icons'
import Navbar from '../components/Header/Navbar'
import NextLink from 'next/link'
import SearchResultsHeader from '../components/searchFilter/SearchResultsHeader'
import SearchInput from '../components/searchFilter/SearchInput'
import Filters from '../components/searchFilter/Filters'
import Results from '../components/searchFilter/FiltersResults'
import GlSearchResults from '../components/searchFilter/GlSearchResults'
import FilterContext from '../context/filterContext'
import TabsTitles from '../components/searchFilter/TabsTitles'
import FiltersSearchResults from '../components/searchFilter/FiltersSearchResults'
import GlSearchResultsSection from '../components/searchFilter/GlSearchResultsSection'
import Footer from '../components/footer'
import PageTitle from '../components/PageTitle'

const SearchEngine: NextPage = ({ results, dir }: any) => {
  const router = useRouter()

  const [toggleIndex, setToggleIndex] = useState(1)

  const handleTggle = (index: any) => {
    setToggleIndex(index)
  }

  return (
    <FilterContext>
      <div dir={dir} className='font-arabic'>
        <Navbar />
        <PageTitle> ابحث عن المعلومة قبل تقديم الطلب</PageTitle>
        <div className='px-20 mt-[120px]'>
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
        <Footer />
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
