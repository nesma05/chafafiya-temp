import type { NextPage } from 'next'
import NextLink from 'next/link'
import { SearchIcon } from '../../components/icons'
import Image from 'next/image'
import PageTitle from '../../components/Layout/PageTitle'
const InstitAgencies: NextPage = () => {
  return (
    <div>
      <PageTitle>المؤسسات والهيئات</PageTitle>
      <div className="my-10 flex px-8 text-sm">
        <div className="basis-1/4 p-2">
          <div>
            <h3 className="bg-main p-2 text-white">المؤسسات</h3>
          </div>
          <div className="my-4 flex flex-col gap-2 px-2">
            <h4 className="font-bold">صنف المؤسسة</h4>
            <div>
              <input
                type="radio"
                name="type"
                className="ml-2"
                value="institutions"
              />
              <label>الكل</label>
            </div>
            <div>
              <input
                type="radio"
                name="type"
                className="ml-2"
                value="regions"
              />
              <label>
                الإدارات العمومية (الوزارات وكتابات الدولة والمندوبيات)
              </label>
            </div>
            <div>
              <input
                type="radio"
                name="type"
                className="ml-2"
                value="institutions"
              />
              <label>المؤسسات والمقاولات العمومية</label>
            </div>
            <div>
              <input
                type="radio"
                name="type"
                className="ml-2"
                value="regions"
              />
              <label>الجماعات الترابية</label>
            </div>
            <div>
              <input
                type="radio"
                name="type"
                className="ml-2"
                value="institutions"
              />
              <label>مجلس النواب</label>
            </div>
            <div>
              <input
                type="radio"
                name="type"
                className="ml-2"
                value="regions"
              />
              <label>مجلس المستشارين</label>
            </div>
          </div>
          <select
            name="organization"
            className="mt-2 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-gray-600 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500"
          >
            <option> -- إختر المؤسسة أو الهيئة المعنية -- </option>

            <option>وزارة الاوقاف والشؤون الاسلامية</option>
          </select>

          <div className="my-4 flex flex-col gap-2 px-2">
            <h4 className="font-bold">الإدارات الفرعية</h4>
            <div>
              <input
                type="radio"
                name="type"
                className="ml-2"
                value="institutions"
              />
              <label>الكل</label>
            </div>
            <div>
              <input
                type="radio"
                name="type"
                className="ml-2"
                value="regions"
              />
              <label>مركزية</label>
            </div>
            <div>
              <input
                type="radio"
                name="type"
                className="ml-2"
                value="institutions"
              />
              <label>جهوية</label>
            </div>
            <div>
              <input
                type="radio"
                name="type"
                className="ml-2"
                value="regions"
              />
              <label>إقليمية</label>
            </div>
            <div>
              <input
                type="radio"
                name="type"
                className="ml-2"
                value="institutions"
              />
              <label>محلية</label>
            </div>
          </div>
        </div>
        <div className="basis-3/4 p-2">
          <div className="relative w-full">
            <input
              type="text"
              className="w-full rounded-md border px-3 py-3 pr-12 text-sm shadow-sm focus:border-main focus:outline-main"
              placeholder="حدد الإدارة المعنية عبر كلمة مفتاح"
            />
            <span className="absolute inset-y-0 right-0 inline-flex items-center overflow-hidden  px-3  text-xl text-gray-400">
              <SearchIcon />
            </span>
          </div>
          <h3 className="my-8 text-lg text-main underline">
            قائمة قطاعات وزارة الأوقاف والشؤون الإسلامية: 36
          </h3>

          <div className="flex flex-wrap gap-4">
            <NextLink href={'/institAgencies/inst01'} passHref>
              <div className="mb-6 flex w-[300px] gap-4 cursor-pointer">
                <div className="relative h-[90px] w-[90px] flex-none">
                  <Image
                    src={'/img/chafafiya-temp.png'}
                    layout="fill"
                    objectFit="contain"
                    alt="website logo"
                    priority
                  />
                </div>
                <div>
                  <h4 className="mt-1 mb-1.5 font-bold text-main">
                    قطاع أئمة المساجد
                  </h4>
                  <p className="leading-6">
                    علن أحمد التوفيق، وزير الأوقاف والشؤون الإسلامية،{' '}
                  </p>
                </div>
              </div>
            </NextLink>
            <NextLink href={'/institAgencies/inst02'} passHref>
              <div className="mb-6 flex w-[300px] gap-4 cursor-pointer">
                <div className="relative h-[90px] w-[90px] flex-none">
                  <Image
                    src={'/img/chafafiya-temp.png'}
                    layout="fill"
                    objectFit="contain"
                    alt="website logo"
                    priority
                  />
                </div>
                <div>
                  <h4 className="mt-1 mb-1.5 font-bold text-main">
                    قطاع أئمة المساجد
                  </h4>
                  <p className="leading-6">
                    علن أحمد التوفيق، وزير الأوقاف والشؤون الإسلامية،{' '}
                  </p>
                </div>
              </div>
            </NextLink>
            <NextLink href={'/institAgencies/inst03'} passHref>
              <div className="mb-6 flex w-[300px] gap-4 cursor-pointer">
                <div className="relative h-[90px] w-[90px] flex-none">
                  <Image
                    src={'/img/chafafiya-temp.png'}
                    layout="fill"
                    objectFit="contain"
                    alt="website logo"
                    priority
                  />
                </div>
                <div>
                  <h4 className="mt-1 mb-1.5 font-bold text-main">
                    قطاع أئمة المساجد
                  </h4>
                  <p className="leading-6">
                    علن أحمد التوفيق، وزير الأوقاف والشؤون الإسلامية،{' '}
                  </p>
                </div>
              </div>
            </NextLink>
            <NextLink href={'/institAgencies/inst04'} passHref>
              <div className="mb-6 flex w-[300px] gap-4 cursor-pointer">
                <div className="relative h-[90px] w-[90px] flex-none">
                  <Image
                    src={'/img/chafafiya-temp.png'}
                    layout="fill"
                    objectFit="contain"
                    alt="website logo"
                    priority
                  />
                </div>
                <div>
                  <h4 className="mt-1 mb-1.5 font-bold text-main">
                    قطاع أئمة المساجد
                  </h4>
                  <p className="leading-6">
                    علن أحمد التوفيق، وزير الأوقاف والشؤون الإسلامية،{' '}
                  </p>
                </div>
              </div>
            </NextLink>
            <NextLink href={'/institAgencies/inst05'} passHref>
              <div className="mb-6 flex w-[300px] gap-4 cursor-pointer">
                <div className="relative h-[90px] w-[90px] flex-none">
                  <Image
                    src={'/img/chafafiya-temp.png'}
                    layout="fill"
                    objectFit="contain"
                    alt="website logo"
                    priority
                  />
                </div>
                <div>
                  <h4 className="mt-1 mb-1.5 font-bold text-main">
                    قطاع أئمة المساجد
                  </h4>
                  <p className="leading-6">
                    علن أحمد التوفيق، وزير الأوقاف والشؤون الإسلامية،{' '}
                  </p>
                </div>
              </div>
            </NextLink>
            <NextLink href={'/institAgencies/inst06'} passHref>
              <div className="mb-6 flex w-[300px] gap-4 cursor-pointer">
                <div className="relative h-[90px] w-[90px] flex-none">
                  <Image
                    src={'/img/chafafiya-temp.png'}
                    layout="fill"
                    objectFit="contain"
                    alt="website logo"
                    priority
                  />
                </div>
                <div>
                  <h4 className="mt-1 mb-1.5 font-bold text-main">
                    قطاع أئمة المساجد
                  </h4>
                  <p className="leading-6">
                    علن أحمد التوفيق، وزير الأوقاف والشؤون الإسلامية،{' '}
                  </p>
                </div>
              </div>
            </NextLink>
            <NextLink href={'/institAgencies/inst07'} passHref>
              <div className="mb-6 flex w-[300px] gap-4 cursor-pointer">
                <div className="relative h-[90px] w-[90px] flex-none">
                  <Image
                    src={'/img/chafafiya-temp.png'}
                    layout="fill"
                    objectFit="contain"
                    alt="website logo"
                    priority
                  />
                </div>
                <div>
                  <h4 className="mt-1 mb-1.5 font-bold text-main">
                    قطاع أئمة المساجد
                  </h4>
                  <p className="leading-6">
                    علن أحمد التوفيق، وزير الأوقاف والشؤون الإسلامية،{' '}
                  </p>
                </div>
              </div>
            </NextLink>            
          </div>
        </div>
      </div>
    </div>
  )
}

export default InstitAgencies
