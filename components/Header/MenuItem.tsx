import NextLink from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { ChevronDown } from '../icons'

const useClickOutside = (ref: any, handler: any) => {
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

const handleMenu = (setOpen: any, setRotate: any) => {
  setOpen(false)
  setRotate(false)
}

const MenuItem = ({ title, subMenu }: any) => {
  const [open, setOpen] = useState(false)
  const [rotate, setRotate] = useState(false)

  const menuRef = useRef<HTMLLIElement>(null)
  useClickOutside(menuRef, () => handleMenu(setOpen, setRotate))
 
  return (
    <li className="relative z-30  cursor-pointer font-bold" ref={menuRef}>
      <span
        onClick={() => {
          setOpen(!open)
          setRotate(!rotate)
        }}
      >
        {title}
        <ChevronDown rotate={rotate} />
      </span>
      <ul
        className={`menu-shadow z-80 absolute top-12 h-fit min-w-max divide-y divide-slate-300 rounded bg-white text-sm transition-all duration-200 ease-in-out ${
          open
            ? 'visible -translate-y-2 opacity-100'
            : 'invisible translate-y-0 opacity-0'
        }`}
      >
        {subMenu?.map((menu: any) => (
          <NextLink key={menu.text} href={menu.link} passHref>
            <li className="relative block py-2 px-3 font-medium transition-all duration-200 hover:bg-black/10">
              {menu.text}
            </li>
          </NextLink>
        ))}
      </ul>
    </li>
  )
}

export default MenuItem