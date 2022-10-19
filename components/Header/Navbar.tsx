import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import NextLink from 'next/link'
import MenuItem from './MenuItem'
import { menuList } from '../../utils/lists'
import LangSwitch from './LangSwitch'
import MenuItemMobile from './MenuItemMobile'
import SearchInput from '../searchFilter/SearchInput'

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false)

  const menuRef = useRef<HTMLLIElement[]>([])

  return (
    <header className="px-1 py-4 text-sm sm:px-10">
      <div className="flex items-center justify-between">
        <NextLink href={'/'} passHref>
          <div className="relative h-[50px] w-[190px] sm:h-[70px] sm:w-[215px]">
            <Image
              src={'/img/chafafiya-logo.png'}
              layout="fill"
              objectFit="contain"
              alt="website logo"
              priority
            />
          </div>
        </NextLink>
        <div className="flex items-center">
          <NextLink href={'/responsable'} passHref>
            <button className="mx-2 rounded-md bg-main py-1.5 px-2 text-white sm:px-3">
              خاص بالإدارة
            </button>
          </NextLink>
          <LangSwitch />
        </div>
      </div>
      <div className="relative flex flex-wrap items-center justify-between py-3 px-2">
        <nav className="order-last flex items-center md:order-none">
          <ul className="relative hidden gap-6 font-light text-main md:flex">
            {menuList.map((menu: any) => (
              <MenuItem
                key={menu.title}
                title={menu.title}
                subMenu={menu.subMenu}
              />
            ))}
            <NextLink href={'/'} passHref>
              <li className="cursor-pointer font-bold">إحصائيات</li>
            </NextLink>
          </ul>
          <div
            className="cursor-pointer space-y-2 md:hidden"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            <span
              className={`block h-0.5 w-5 bg-main transition duration-200 ${
                mobileMenu ? 'hidden' : ''
              }`}
            ></span>
            <span
              className={`block h-0.5 w-8 bg-main transition duration-200 ${
                mobileMenu ? 'translate-y-1 rotate-45' : ''
              }`}
            ></span>
            <span
              className={`block h-0.5 w-8 bg-main transition duration-200 ${
                mobileMenu ? '-translate-y-1.5 -rotate-45' : ''
              }`}
            ></span>
          </div>
        </nav>
        <ul
          className={`menu-shadow absolute top-[105%] z-50 w-[97%] bg-white p-2 transition duration-500 sm:w-[92%] md:hidden ${
            mobileMenu
              ? '-translate-y-2 opacity-100'
              : 'translate-y-1 opacity-0'
          }`}
        >
          {menuList.map((menu: any) => (
            <MenuItemMobile
              key={menu.title}
              title={menu.title}
              subMenu={menu.subMenu}
            />
          ))}
          <NextLink href={'/'} passHref>
            <li className="cursor-pointer font-bold text-main">إحصائيات</li>
          </NextLink>
        </ul>
        <div className="flex items-center gap-1">
          <div className="max-w-[200px]">
            <SearchInput />
          </div>
          <button className="mx-3 rounded-md bg-secondary py-2 px-3">
            تسجيل الدخول
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
