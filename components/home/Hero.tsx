import Image from 'next/image'
import { useRouter } from 'next/router'

import SearchInput from '../searchFilter/SearchInput'

const Hero = () => {
  const router = useRouter()

  return (
    <section className="bg-white ">
      <div className="mx-auto grid h-[600px] w-full lg:grid-cols-12 lg:gap-8 xl:gap-0">
        <div className="flex flex-col items-center justify-center lg:col-span-6 relative hero-text">
          <div className='p-start'>
            <h1 className="mb-4 max-w-xl text-3xl font-extrabold leading-snug sm:text-4xl sm:leading-snug ">
              مرحبا بكم في البوابة الوطنية للحصول على المعلومات
            </h1>
            <p className="sm:text-md mb-6 max-w-lg text-sm font-light text-gray-600 lg:mb-8 ">
              لمغلوطة حول استنكار النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك
              التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو
              يكره أو يتجنب الشعور بالسعادة، ولكن بفضل هؤ
            </p>
            <div className="mb-6 max-w-lg">
              <SearchInput button="yes" />
            </div>
          </div>
        </div>
        <div className="relative hidden lg:col-span-6 lg:mt-0 lg:flex">
          <Image
            src={
              'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80'
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
