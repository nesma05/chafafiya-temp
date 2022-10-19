import { useState } from 'react'
import { ChevronDown } from '../icons'
import NextLink from 'next/link'

const MenuItemMobile = ({ title, subMenu }: any) => {
  const [open, setOpen] = useState(false)
  const [rotate, setRotate] = useState(false)

  return (
    <li className="cursor-pointer p-1">
      <span
        className="flex items-center justify-between text-main font-bold"
        onClick={() => {
          setOpen(!open)
          setRotate(!rotate)
        }}
      >
        {title}
        <ChevronDown rotate={rotate} />
      </span>
      <ul
        className={`font-medium menu-shadow divide-y text-main divide-slate-300 overflow-hidden rounded bg-white text-sm transition-all duration-300 ease-in-out ${
          open ? `max-h-[1000px]` : 'max-h-0'
        }`}
      >
        {subMenu?.map((menu: any) => (
          <NextLink key={menu.text} href={menu.link} passHref>
            <li className="block py-2 px-3 transition-all duration-200 hover:bg-black/10">
              {menu.text}
            </li>
          </NextLink>
        ))}
      </ul>
    </li>
  )
}

export default MenuItemMobile
