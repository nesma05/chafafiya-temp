import { useRef, useState } from 'react'
import NextLink from 'next/link'
import MenuItem from './MenuItem'
import { menuList } from '../../../utils/lists'
import LangSwitch from './LangSwitch'
import MenuItemMobile from './MenuItemMobile'
import Logo from '../Logo'
import MenuSearchInput from './MenuSearchInput'
import UserBox from './UserBox'

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [loginState, setLoginState] = useState(false)

  const menuRef = useRef<HTMLLIElement[]>([])

  return (
    <>
      <header className="relative z-50 border border-b-gray-100 bg-white px-1 font-arabic_menu text-sm sm:px-10">
        <div className="flex items-center justify-between">
          <Logo />

          <div className="flex items-center">
            <NextLink href={'/responsable'} passHref>
              <button className="mx-2 rounded-md bg-main py-1.5 px-2 text-white sm:px-3">
                خاص بالإدارة
              </button>
            </NextLink>
            <LangSwitch />
          </div>
        </div>
      </header>
      <div className="sticky top-0 z-10 flex flex-wrap items-center justify-between gap-2 bg-white py-3 px-2 font-arabic_menu shadow-md md:px-12">
        <nav className="order-last flex items-center md:order-none">
          <ul className="relative hidden gap-6 font-light text-main md:flex">
            {menuList.map((menu: any) => (
              <MenuItem
                key={menu.title}
                title={menu.title}
                subMenu={menu.subMenu}
              />
            ))}
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
        </ul>
        <div className="flex items-center gap-1">
          <div className="max-w-[200px]">
            <MenuSearchInput />
          </div>

          {loginState ? <UserBox/> : ( <NextLink href={'/login'} passHref>
            <button className="mx-3 rounded-md bg-secondary py-3 px-2 text-sm">
              تسجيل الدخول
            </button>
          </NextLink>)}
         
          <span className='cursor-pointer' onClick={()=>setLoginState(!loginState)}>Login</span>
        </div>
      </div>
    </>
  )
}

export default Navbar
