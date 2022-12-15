import NextLink from 'next/link'
import type { NextPage } from 'next'
import rows from '../../utils/people.json'
import { requestFollow } from '../../utils/constants'

import SecondaryLayout, {
  PageWithSecondaryLayoutType,
} from '../../components/Layout/SecondaryLayout'
import ResponsableHeader from '../../components/responsable/ResponsableHeader'
import ReqSideBar from '../../components/responsable/ReqSideBar'
import RespReqDetails from '../../components/responsable/RespReqDetails'

const Responsable: PageWithSecondaryLayoutType = () => {
  return (
    <div className="text-sm">
      <ResponsableHeader responsable={'الإدارة: المسؤول عن الطلبات'} />
      <div className="mt-10 flex w-full justify-start border-t-2 border-gray-300">
        <ReqSideBar />
        <RespReqDetails rows={requestFollow} />
      </div>
    </div>
  )
}
export default Responsable

Responsable.getLayout = SecondaryLayout
