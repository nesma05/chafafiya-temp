import { NextPage } from 'next'
import NextLink from 'next/link'
import ConverHistory from '../../components/responsable/ConverHistory'
import ReqTimeStamp from '../../components/responsable/ReqTimeStamp'
import { requester } from '../../utils/constants'
import { requestFollow } from '../../utils/constants'

import SecondaryLayout, {
  PageWithSecondaryLayoutType,
} from '../../components/Layout/SecondaryLayout'
import RequesterInfo from '../../components/responsable/RequesterInfo'
import ResponseSection from '../../components/responsable/ResponseSection'
import ContactColleagues from '../../components/responsable/ContactColleagues'
import ResponsableHeader from '../../components/responsable/ResponsableHeader'
import ReqSideBar from '../../components/responsable/ReqSideBar'

const ResRequest: PageWithSecondaryLayoutType = ({ request }: any) => {
  return (
    <div>
      <ResponsableHeader responsable={'المسؤول عن المعلومات'} />
      <div className="flex h-auto border-y-2">
        <ReqSideBar />
        {/* <div className="w-[70px] border-l-2 border-gray-300">
          <div className="pt-20">
            <ul>
              {responsableList.map((resList: any, i: any) => (
                <li
                  key={i}
                  className={`flex w-full cursor-pointer items-center p-2 `}
                >
                  <span className="mx-3 border-2 border-black p-0.5">
                    {resList.icon}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div> */}
        <div className="flex-1">
          <div className="cursor-pointer p-6">
            <NextLink href={'/reqResponsable'} passHref>
              <p>الرجوع إلى لائحة الطلبات</p>
            </NextLink>
          </div>
          <div className="flex w-full border-t-2 text-sm">
            <div className="w-[300px] border-l-2">
              <RequesterInfo requester={requester} />
              <div className="p-3">
                <ReqTimeStamp />
              </div>
            </div>
            <div className="relative w-[47%] border-l-2 pt-6">
              <ConverHistory requestFollow={request} user="responsable" />
              <ResponseSection />
            </div>
            <div className="relative flex-1  pt-2">
              <ContactColleagues />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ResRequest

export async function getServerSideProps({ query }: any) {
  const { requestId } = query

  const request = requestFollow.filter(
    (request: any) => request.code === query.requestId
  )[0]

  return {
    props: {
      request,
    },
  }
}

ResRequest.getLayout = SecondaryLayout
