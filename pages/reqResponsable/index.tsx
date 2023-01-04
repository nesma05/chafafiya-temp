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
import axios, { AxiosPromise } from 'axios'
import config from '../../utils/config'
  

const Responsable: PageWithSecondaryLayoutType = ({requests}:any) => {
  return (
    <div className="text-sm">
      <ResponsableHeader responsable={'الإدارة: المسؤول عن الطلبات'} />
      <div className="mt-10 flex w-full justify-start border-t-2 border-gray-300">
        <ReqSideBar />
        <RespReqDetails rows={requests} />
      </div>
    </div>
  )
}
export default Responsable

export async function getServerSideProps() {
 
  const { baseUrl} = config

  const response = await axios(`${baseUrl}/api/request/CI/1`)

  return {
    props: {
      requests: response?.data,
    },
  }
}

Responsable.getLayout = SecondaryLayout
