import Image from 'next/image'
import NextLink from 'next/link'
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from './icons'

const footer = () => {
  const socialIcons = [
    {
    id:'01',
    icon: <FacebookIcon/>,
  },
  {
    id:'02',
    icon: <YoutubeIcon/>,
  },
  {
    id:'03',
    icon: <TwitterIcon/>,
  },
  {
    id:'04',
    icon: <InstagramIcon/>,
  },
]  
  return (
    <footer className="bg-white p-4 dark:bg-gray-900 sm:p-6">
      <div className="md:flex md:justify-between">
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
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
              Resources
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <a href="https://flowbite.com/" className="hover:underline">
                  Flowbite
                </a>
              </li>
              <li>
                <a href="https://tailwindcss.com/" className="hover:underline">
                  Tailwind CSS
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
              Follow us
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <a
                  href="https://github.com/themesberg/flowbite"
                  className="hover:underline "
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/4eeurUVvTy"
                  className="hover:underline"
                >
                  Discord
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
              Legal
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          © 2022{' '}
          <a href="https://flowbite.com/" className="hover:underline">
            Flowbite™
          </a>
          . All Rights Reserved.
        </span>
        <div className="mt-4 flex gap-5 sm:mt-0 sm:justify-center">
          {socialIcons.map(({id,icon}:any)=>(
            <div key={id} className="cursor-pointer">
                <NextLink href={'/'} passHref>
                <span className='text-gray-500 hover:text-gray-900'>{icon}</span>
            </NextLink>
            </div>
            
          ))}
        </div>
      </div>
    </footer>
  )
}

export default footer
