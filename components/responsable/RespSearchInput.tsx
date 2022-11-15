import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { SearchIcon } from '../../components/icons'
import { colleagues } from '../../utils/constants'

const RespSearchInput = ({ button }: any) => {
  const [open, setOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [colleaguesList, setColleaguesList] = useState<object[]>([])
  console.log('open', open)
  const handleClick = (value:string) => {
    setSearchValue(value)
  }
 
  const handleChange = (e: any) => {
    setOpen(true)
    setSearchValue(e.target.value)
  }
 
  useEffect(() => {
    setColleaguesList(colleagues)
  }, [])

  return (
    <div className="relative max-w-md">
      <div className="relative w-full">
        <input
          onFocus={() => setOpen(true)}
          onBlur={() => setOpen(false)}
          type="text"
          value={searchValue}
          onChange={handleChange}
          className="w-full rounded-md border px-3 py-3 pr-12 text-sm shadow-sm focus:border-main focus:outline-main"
          placeholder="البحث عن الزملاء"
        />

        <span className="absolute inset-y-0 right-0 inline-flex items-center overflow-hidden  px-3  text-xl text-gray-400">
          <SearchIcon />
        </span>
      </div>
      <div
        className={`absolute w-full border bg-gray-100 transition-all duration-200 ease-in-out ${
          open
            ? 'visible translate-y-0 opacity-100'
            : 'invisible translate-y-2 opacity-0'
        }`}
      >
        <ul>
          {colleaguesList
            ?.filter((c: any) => c.name.includes(searchValue))
            .map((coll: any) => (
              <li
                key={coll.id}
                className="cursor-pointer border-b"
                onClick={()=>handleClick(coll.name)}
              >
                <div className="flex flex-col gap-1 p-2">
                  <span className="text-sm font-bold">{coll.name} </span>
                  <span className="text-xs">{coll.job}</span>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default RespSearchInput
