import Image from 'next/image'
import NextLink from 'next/link'
import type { NextPage } from 'next'
import rows from '../../utils/people.json'
import {requestFollow} from '../../utils/constants'
import { AvatarIcon } from '../../components/icons'
import ResSideBar from '../../components/responsable/ResSideBar'
import ResDetails from '../../components/responsable/ResDetails'
const Responsable: NextPage = ({ dir }: any) => {

  return (
    <div dir='rtl'>
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
            <span>الإدارة: </span><span>المسؤول عن المعلومات</span><span className="text-4xl rounded-full text-white bg-cyan-500 mx-4"><AvatarIcon/></span>
        </div>
      </div>
    </header>
    <div className="flex border-t-2 border-gray-300">
    <ResSideBar/>
    <ResDetails rows={requestFollow}/>
    </div>
    </div>
  )
}
export default Responsable
