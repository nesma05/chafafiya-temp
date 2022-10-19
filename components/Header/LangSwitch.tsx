import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { ChevronDown } from '../icons'

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

const Languages = ['العربية', 'Français']

const langSwitch = () => {
  const [open, setOpen] = useState(false)
  const [rotate, setRotate] = useState(false)
  const [selectedOption, setSelectedOption] = useState('')

  const { locale, asPath } = useRouter()

  const initialLang = locale == 'fr' ? 'Français' : 'العربية'

  const langRef = useRef(null)

  useClickOutside(langRef, () => handleLangSwitch(setOpen, setRotate))

  const onOptionClicked = (value: any) => () => {
    setSelectedOption(value)
    setOpen(false)
    setRotate(!rotate)
  }
  return (
    <div
      className="relative z-30 cursor-pointer font-bold text-main"
      ref={langRef}
    >
      <div
        className="py-1.5 px-3 hover:bg-gray-100 rounded-md"
        onClick={() => {
          setOpen(!open)
          setRotate(!rotate)
        }}
      >
        <span>
          <ChevronDown rotate={rotate} />
        </span>

        <span className="px-1.5">{selectedOption || initialLang}</span>
      </div>
      <ul
        className={`absolute top-11 left-2 z-50 divide-y border-2 bg-white transition duration-200 ease-in-out ${
          open
            ? 'visible -translate-y-3 opacity-100'
            : 'invisible translate-y-0 opacity-0'
        }`}
      >
        {Languages?.map((lang: any) => (
          <NextLink
            key={lang}
            href={asPath}
            passHref
            locale={lang === 'Français' ? 'fr' : 'ar'}
          >
            <li
              className="relative block py-1 px-5 transition-all duration-200 hover:bg-gray-200"
              onClick={onOptionClicked(lang)}
            >
              {lang}
            </li>
          </NextLink>
        ))}
      </ul>
    </div>
  )
}

export default langSwitch
