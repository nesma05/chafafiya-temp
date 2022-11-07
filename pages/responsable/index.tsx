import Image from 'next/image'
import NextLink from 'next/link'
import type { NextPage } from 'next'
import rows from '../../utils/people.json'
import { requestFollow } from '../../utils/constants'
import { AvatarIcon } from '../../components/icons'
import ResSideBar from '../../components/responsable/ResSideBar'
import ResDetails from '../../components/responsable/ResDetails'
import PageTitle from '../../components/Layout/PageTitle'
const Responsable: NextPage = ({ dir }: any) => {
  return (
    <div dir="rtl" className='font-arabic'>
      <header className="relative z-50 px-10 py-4 bg-white">
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
      <PageTitle>المسؤول عن الطلبات</PageTitle>
      <NextLink href={'/responsable/table'} passHref>
        <button>table</button>
      </NextLink>
      <div className="mt-20 flex border-t-2 border-gray-300">
        <ResSideBar />
        <ResDetails rows={requestFollow} />
      </div>
    </div>
  )
}
export default Responsable
