import { useRouter } from 'next/router'
import { useRef, forwardRef } from 'react'
import { SearchIcon } from '../icons'

const MenuSearchInput = ({ button }: any) => {
  const router = useRouter()

  const searchInput = useRef<HTMLInputElement>(null)

  const handleSearch = (e: any) => {
    console.log('works')
    e.preventDefault()
    const term = searchInput.current?.value
    if (!term) return

    router.push(`/`)
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
          placeholder="البحث في الموقع"
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
          البحث
        </button>
      )}
    </div>
  )
}

export default MenuSearchInput
