import NextLink from 'next/link'
import type { NextPage } from 'next'
import rows from '../../utils/people.json'
import { requestFollow } from '../../utils/constants'

import SecondaryLayout, {
  PageWithSecondaryLayoutType,
} from '../../components/Layout/SecondaryLayout'
import ResponsableHeader from '../../components/responsable/ResponsableHeader'
import ComplSideBar from '../../components/responsable/ComplSideBar'
import RespComplDetails from '../../components/responsable/RespComplDetails'

const ComplaintsResponsable: PageWithSecondaryLayoutType = () => {
  return (
    <div className="text-sm">
      <ResponsableHeader responsable={'الإدارة: المسؤول عن الشكايات'} />
      <div className="mt-10 flex w-full justify-start border-t-2 border-gray-300">
        <ComplSideBar />
        <RespComplDetails rows={requestFollow} />
      </div>
    </div>
  )
}
export default ComplaintsResponsable

ComplaintsResponsable.getLayout = SecondaryLayout
