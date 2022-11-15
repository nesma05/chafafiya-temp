import Image from 'next/image'
import NextLink from 'next/link'
import { AvatarIcon } from '../icons'

const ResponsableHeader = () => {
  return (
    <header className="px-10 py-4">
    <div className="flex items-center justify-between">
      <NextLink href={'/'} passHref>
        <Image
          src={'/img/chafafiya-logo.png'}
          width={220}
          height={70}
          className="cursor-pointer"
          alt="website logo"
        />
      </NextLink>
      <div className="flex items-center">
        <span>الإدارة: </span>
        <span>المسؤول عن المعلومات</span>
        <span className="mx-4 rounded-full bg-cyan-500 text-4xl text-white">
          <AvatarIcon />
        </span>
      </div>
    </div>
  </header>
  )
}

export default ResponsableHeader