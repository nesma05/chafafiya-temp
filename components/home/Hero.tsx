import Image from 'next/image'
import { useRouter } from 'next/router'
import useTranslation from '../../utils/customHooks'

import SearchInput from '../searchFilter/SearchInput'

const Hero = () => {
  const router = useRouter()
  const { tr } = useTranslation()

  return (
    <section className="bg-white ">
      <div className="mx-auto grid h-[600px] w-full lg:grid-cols-12 lg:gap-8 xl:gap-0">
        <div className="hero-text relative flex flex-col items-center justify-center lg:col-span-6">
          <div className="p-start">
            <h1 className="mb-4 max-w-xl text-3xl font-extrabold leading-snug sm:text-4xl sm:leading-snug ">
              {tr('homeTitle')}
            </h1>
            <p className="sm:text-md mb-6 max-w-lg text-sm font-light text-gray-600 lg:mb-8 ">
              {tr('homeText')}
            </p>
            <div className="mb-6 max-w-lg">
              <SearchInput button="yes" />
            </div>
          </div>
        </div>
        <div
          className={`relative hidden lg:col-span-6 lg:mt-0 lg:flex ${
            router.locale === 'ar' ? '' : ''
          }`}
        >
          <Image
            src={
              'https://dgct.govright.tech/assets/images/hero-image.png'
            }
            layout="fill"
            objectFit="cover"
            alt="chafafiya image"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
