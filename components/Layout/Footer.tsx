import NextLink from 'next/link'
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from '../icons'
import { menuList } from '../../utils/lists'
import Logo from './Logo'

const footer = () => {
  const socialIcons = [
    {
      id: '01',
      icon: <FacebookIcon />,
    },
    {
      id: '02',
      icon: <YoutubeIcon />,
    },
    {
      id: '03',
      icon: <TwitterIcon />,
    },
    {
      id: '04',
      icon: <InstagramIcon />,
    },
  ]
  return (
    <footer className="shadow-top bg-main_dark py-8 px-10 text-white sm:px-[180px] ">
      <div className="md:flex md:gap-8">
        <Logo />
        <div className="gap-4 md:flex">
          {menuList.map((list: any, index: any, array: any) => {
            const last = array.length - 1
            return (
              <div key={list.title}>
                <h2 className={`mb-4 text-sm font-semibold ${last === index && 'cursor-pointer hover:underline'}`}>{list.title}</h2>
                <ul className="text-xs">
                  {list.subMenu?.map((subMenu: any, index: any, array: any) => (
                    <li key={subMenu.text} className="mb-2">
                      <NextLink href={subMenu.link} passHref>
                        <span className="cursor-pointer hover:underline">
                          {subMenu.text}
                        </span>
                      </NextLink>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
      <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-xs sm:text-center">
          جميع الحقوق محفوظة © 2022
        </span>
        <div className="mt-4 flex gap-5 sm:mt-0 sm:justify-center">
          {socialIcons.map(({ id, icon }: any) => (
            <div key={id} className="cursor-pointer">
              <NextLink href={'/'} passHref>
                <span className="hover:text-gray-300">{icon}</span>
              </NextLink>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default footer
