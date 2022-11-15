import Image from 'next/image'
import NextLink from 'next/link'
import type { NextPage } from 'next'
import rows from '../../utils/people.json'
import { requestFollow } from '../../utils/constants'
import { AvatarIcon } from '../../components/icons'
import ResSideBar from '../../components/responsable/ResSideBar'
import ResDetails from '../../components/responsable/ResDetails'
import PageTitle from '../../components/Layout/PageTitle'

import SecondaryLayout, {
  PageWithSecondaryLayoutType,
} from '../../components/Layout/SecondaryLayout'
import ResponsableHeader from '../../components/responsable/ResponsableHeader'

const Responsable: PageWithSecondaryLayoutType = () => {
  return (
    <div>
      <ResponsableHeader/>
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

Responsable.getLayout = SecondaryLayout
