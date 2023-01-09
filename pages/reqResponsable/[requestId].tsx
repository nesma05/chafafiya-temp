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
import config from '../../utils/config'
import axios from 'axios'
import { useState } from 'react'

const ResRequest: PageWithSecondaryLayoutType = ({ request,history }: any) => {
  const [user,setUser]=useState('CI')
  console.log('historique',history)
  return (
    <div>
      <ResponsableHeader responsable={'الإدارة: المسؤول عن الطلبات'} />
      <div className="flex h-auto border-y-2">
        <ReqSideBar />
       
        <div className="flex-1">
          <div className="cursor-pointer p-6">
            <NextLink href={'/reqResponsable'} passHref>
              <p>الرجوع إلى لائحة الطلبات</p>
            </NextLink>
          </div>
          <div className="flex w-full border-t-2 text-sm">
            <div className="w-[300px] border-l-2">
              <RequesterInfo request={request} />
              <div className="p-3">
                <ReqTimeStamp />
              </div>
            </div>
            <div className="relative w-[47%] border-l-2 pt-6">
              <ConverHistory history={history} user={user} />
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

//    const historique = requestFollow.filter(
//     (request: any) => request.code === query.requestId
//  )[0]

  const { baseUrl} = config

  const response = await axios(`${baseUrl}/api/request/${requestId}`)

  const response2 = await axios(`${baseUrl}/api/reqHistory/${requestId}`)

  return {
    props: {
      request: response?.data,
      history:response2?.data
    },
  }
}

ResRequest.getLayout = SecondaryLayout
