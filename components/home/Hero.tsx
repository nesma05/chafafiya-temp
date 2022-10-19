import Image from 'next/image'
import { useRouter } from 'next/router'

import SearchInput from '../searchFilter/SearchInput'

const Hero = () => {
  const router = useRouter()
 
  return (
   
    <section className="bg-white ">
      <div className="mx-auto grid max-w-md sm:max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="mb-4 max-w-xl font-extrabold text-3xl  leading-snug sm:text-4xl sm:leading-snug ">
            مرحبا بكم في البوابة الوطنية للحصول على المعلومات
          </h1>
          <p className="mb-6 max-w-lg text-sm sm:text-md font-light text-gray-600 lg:mb-8 ">
            لمغلوطة حول استنكار النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك
            التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو
            يكره أو يتجنب الشعور بالسعادة، ولكن بفضل هؤ
          </p>
          <div className="mb-6 max-w-sm">
            <SearchInput button='yes' />
          </div>
          
        </div>
        <div className="relative hidden lg:col-span-4 lg:mt-0 lg:flex">
          <Image
            src={'/img/chafafiya-hero.jpg'}
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
