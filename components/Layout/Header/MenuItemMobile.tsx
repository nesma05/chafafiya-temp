import { useState } from 'react'
import { ChevronDown, NoteIcon } from '../../icons'
import NextLink from 'next/link'

const MenuItemMobile = ({ menu }: any) => {
  const [open, setOpen] = useState(false)
  const [rotate, setRotate] = useState(false)

  return (
    <li className="cursor-pointer p-1">
      <span
        className="flex items-center justify-between font-bold text-main"
        onClick={() => {
          setOpen(!open)
          setRotate(!rotate)
        }}
      >
         {menu.link ? <NextLink href={menu.link} passHref>{menu.title}</NextLink>: menu.title}
        {menu.subMenu && <ChevronDown rotate={rotate} />}
      </span>
      <ul
        className={`menu-shadow divide-y divide-slate-300 overflow-hidden rounded bg-white text-sm font-medium text-main transition-all duration-300 ease-in-out ${
          open ? `max-h-[1000px]` : 'max-h-0'
        }`}
      >
        {menu.subMenu?.map((sub: any, index: any) => (
          <NextLink key={index} href={sub.link} passHref>
            <li className="relative flex gap-2 py-2 px-3 font-medium transition-all duration-200 hover:bg-black/10">
             {sub.icon && <span className='text-xl'><NoteIcon/></span>} {sub.text}
            </li>
          </NextLink>
        ))}
      </ul>
    </li>
  )
}

export default MenuItemMobile
