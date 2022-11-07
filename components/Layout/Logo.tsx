import Image from 'next/image'
import NextLink from 'next/link'

const logo = () => {
  return (
    <div className="relative h-[50px] w-[190px] cursor-pointer sm:h-[70px] sm:w-[215px]">
      <NextLink href={'/'} passHref>
        <Image
          src={'/img/chafafiya-logo.png'}
          layout="fill"
          objectFit="contain"
          alt="website logo"
          priority
        />
      </NextLink>
    </div>
  )
}

export default logo
