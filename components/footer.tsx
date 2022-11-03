import Image from 'next/image'
import NextLink from 'next/link'
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from './icons'
import { menuList } from '../utils/lists'

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
    <footer className="shadow-top bg-white py-8 px-10 sm:px-[180px] ">
      <div className="md:flex md:gap-8">
        <NextLink href={'/'} passHref>
          <div className="mb-8 relative h-[50px] w-[190px] sm:h-[70px] sm:w-[215px]">
            <Image
              src={'/img/chafafiya-logo.png'}
              layout="fill"
              objectFit="contain"
              alt="website logo"
              priority
            />
          </div>
        </NextLink>
        <div className="gap-4 md:flex">
          {menuList.map((list: any) => (
            <div key={list.title}>
              <h2 className="mb-4 text-sm font-semibold uppercase text-gray-900">
                {list.title}
              </h2>
              <ul className="text-xs text-gray-600">
                {list.subMenu.map((subMenu: any) => (
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
          ))}
          <div>
                    <NextLink href={'/'} passHref>
            <h2 className="mb-4 text-sm font-semibold uppercase text-gray-900 hover:underline cursor-pointer">
              إحصائيات
            </h2>
            </NextLink>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          © 2022 . All Rights Reserved.
        </span>
        <div className="mt-4 flex gap-5 sm:mt-0 sm:justify-center">
          {socialIcons.map(({ id, icon }: any) => (
            <div key={id} className="cursor-pointer">
              <NextLink href={'/'} passHref>
                <span className="text-gray-500 hover:text-gray-900">
                  {icon}
                </span>
              </NextLink>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default footer
