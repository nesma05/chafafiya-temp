import { useRouter } from 'next/router'
import { useRef } from 'react'
import { SearchIcon } from '../icons'
import useTranslation from '../../utils/customHooks'
import { searchState } from '../../context/searchContext'
import { InfoState } from '../../context/filterContext'
import config from '../../utils/config'

const SearchInput = ({ button }: any) => {
  const router = useRouter()
  const { tr } = useTranslation()

  const { dispatch } = InfoState()

  const searchInput = useRef<HTMLInputElement>(null)

  const {envMode}=config

  const handleSearch = (e: any) => {
    if (envMode == "development") console.log('works')
    e.preventDefault()
    const term = searchInput.current?.value
    dispatch({ type: 'SET_SEARCH_TERM', payload: term })
    if (!term) return

    router.push(`/searchengine?institWebsites=${term}`)
  }

  const hundleKeyPress = (e: any) => {
    if (e.key === 'Enter') handleSearch(e)
  }

  return (
    <div className="flex w-full gap-1">
      <div className="relative w-full">
        <input
          onKeyPress={hundleKeyPress}
          ref={searchInput}
          type="text"
          className="w-full rounded-md border px-3 py-3 pr-12 text-sm shadow-sm focus:border-main focus:outline-main"
          placeholder={tr('searchInputText')}
        />

        <span className="absolute inset-y-0 right-0 inline-flex items-center overflow-hidden  px-3  text-xl text-gray-400">
          <SearchIcon />
        </span>
      </div>
      {button && (
        <button
          onClick={handleSearch}
          className="rounded-md bg-main px-3 text-lg text-white"
        >
          {tr('searchInputButton')}
        </button>
      )}
    </div>
  )
}

export default SearchInput
