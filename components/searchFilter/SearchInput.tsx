import { useRouter } from 'next/router'
import { useRef, forwardRef } from 'react'
import { SearchIcon } from '../icons'

const SearchInput = ({button}:any) => {
  const router = useRouter()

  const searchInput = useRef<HTMLInputElement>(null)

  const handleSearch = (e: any) => {
    console.log('works')
    e.preventDefault()
    const term = searchInput.current?.value
    if (!term) return

    router.push(`/searchengine?term=${term}`)
  }

  const hundleKeyPress =(e:any)=>{
    if(e.key === 'Enter') handleSearch(e)
  }

  return (
    <div className="flex gap-1 w-full">
    <div className="relative w-full">
      <input
        onKeyPress={hundleKeyPress}
        ref={searchInput}
        type="text"
        className="w-full rounded-md border focus:border-main px-3 py-1.5 pr-12 text-sm shadow-sm focus:outline-main"
        placeholder="البحث"
      />

      <span className="absolute inset-y-0 right-0 inline-flex items-center text-gray-400  overflow-hidden  px-3 text-xl">
        <SearchIcon />
      </span>
     
    </div>
    {button && <button
        onClick={handleSearch}
        className="bg-main text-white rounded-md px-3 text-lg"
      >
        البحث
      </button>}
    
    </div>
  )
}

export default SearchInput
