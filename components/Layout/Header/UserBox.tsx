import NextLink from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { AvatarIcon, ChevronDown } from '../../icons'
import { userBoxList } from '../../../utils/constants'

let useClickOutside = (ref: any, handler: any) => {
  useEffect(() => {
    const listener = (e: any) => {
      const el = ref?.current

      if (!el || el.contains(e.target)) {
        return
      }

      handler(e)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  })
}

const handleLangSwitch = (setOpen: any, setRotate: any) => {
  setOpen(false)
  setRotate(false)
}

const Languages = ['العربية', 'Amazigh', 'Français']

const UserBox = () => {
  const [open, setOpen] = useState(false)
  const [rotate, setRotate] = useState(false)
  const [selectedOption, setSelectedOption] = useState('')

  const langRef = useRef(null)

  useClickOutside(langRef, () => handleLangSwitch(setOpen, setRotate))

  
  return (
    <div
      className="relative z-30 cursor-pointer font-bold text-main"
      ref={langRef}
    >
      <div
        className="rounded-md flex items-center py-2 border border-main px-3 hover:bg-gray-100"
        onClick={() => {
          setOpen(!open)
          setRotate(!rotate)
        }}
      >
        <span>
          <ChevronDown rotate={rotate} />
        </span>

        <span className="px-1.5">حسابي</span>
        <span className='text-lg'><AvatarIcon/></span>
      </div>
      <ul
        className={`absolute top-11 -right-20 z-50 w-[280px] border-2 bg-white text-sm transition duration-200 ease-in-out ${
          open
            ? 'visible -translate-y-1 opacity-100'
            : 'invisible translate-y-0 opacity-0'
        }`}
      >
        {userBoxList?.map((list: any, index: any, array: any) => {
          const last = array.length - 1
          return (
            <NextLink key={list.id} href={list.link} passHref>
              <li
                className={`relative block py-1 px-5 transition-all duration-200 hover:bg-gray-200 ${
                  index === last && 'mt-2 border-t pt-4'
                }`}
              >
                {list.text}
              </li>
            </NextLink>
          )
        })}
      </ul>
    </div>
  )
}

export default UserBox
