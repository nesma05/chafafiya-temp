import NextLink from 'next/link'
import { useRef, useState } from 'react'
import { ChevronDown, NoteIcon } from '../../icons'
import { useClickOutside } from '../../../utils/customHooks'

const handleMenu = (setOpen: any, setRotate: any) => {
  setOpen(false)
  setRotate(false)
}

const MenuItem = ({ menu }: any) => {
  const [open, setOpen] = useState(false)
  const [rotate, setRotate] = useState(false)

  const menuRef = useRef<HTMLLIElement>(null)
  useClickOutside(menuRef, () => handleMenu(setOpen, setRotate))

  return (
    <li className="relative z-30 cursor-pointer font-bold" ref={menuRef}>
      <span
        onClick={() => {
          setOpen(!open)
          setRotate(!rotate)
        }}
      >
        {menu.link ? (
          <NextLink href={menu.link} passHref>
            <a>{menu.title}</a>
          </NextLink>
        ) : (
          menu.title
        )}
        {menu.subMenu && <ChevronDown rotate={rotate} />}
      </span>
      <ul
        className={`menu-shadow z-80 absolute top-12 h-fit min-w-max divide-y divide-slate-300 rounded border border-secondary bg-white text-sm transition-all duration-200 ease-in-out ${
          open
            ? 'visible -translate-y-2 opacity-100'
            : 'invisible translate-y-0 opacity-0'
        }`}
      >
        {menu.subMenu?.map((sub: any, index: any) => (
          <NextLink key={index} href={sub.link} passHref>
            <a>
              <li className="relative flex gap-2 py-2 px-3 font-medium transition-all duration-200 hover:bg-black/10">
                {sub.icon && (
                  <span className="text-xl">
                    <NoteIcon />
                  </span>
                )}{' '}
                {sub.text}
              </li>
            </a>
          </NextLink>
        ))}
      </ul>
    </li>
  )
}

export default MenuItem
