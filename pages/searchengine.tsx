import type { NextPage } from 'next'
import SearchResults from '../components/SearchResults'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import config from '../utils/config'
import Response from '../utils/response'

const SearchEngine: NextPage = ({ results }: any) => {
  const router = useRouter()
  const searchInput = useRef<HTMLInputElement>(null)
  console.log(results)

  const handleSearch = (e: any) => {
    e.preventDefault()
    const term = searchInput.current?.value
    if (!term) return

    router.push(`/searchengine?term=${term}`)
  }

  return (
    <>
      <div>
        <div className="mx-auto mt-8 mb-0 max-w-xl space-y-4">
          <div className="relative mx-auto w-[80%]">
            <input
              ref={searchInput}
              type="text"
              className="w-full rounded-md border border-gray-300 p-3 pr-12 text-sm shadow-sm focus:outline-gray-400"
              placeholder="Qu'est ce que vous cherchez"
            />

            <button
              onClick={handleSearch}
              className="absolute inset-y-0 right-0 inline-flex items-center overflow-hidden bg-gray-300 px-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="1.5em"
                height="1.5em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392l.604.646l2.121-2.121l-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5s5 2.243 5 5s-2.243 5-5 5z"
                />
              </svg>
            </button>
          </div>
          <hr></hr>
         {router.query.term && <SearchResults results={results} />}
        </div>
      </div>
    </>
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
