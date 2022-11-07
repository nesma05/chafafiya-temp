import { NextPage } from 'next'
import Navbar from '../components/Layout/Header/Navbar'
import { requestFollow } from '../utils/constants'
import Image from 'next/image'
import ConverHistory from '../components/responsable/ConverHistory'
import Footer from '../components/Layout/Footer'

const FollowReq: NextPage = ({ dir }: any) => {
  // const {locale,locales,asPath} = useRouter()
  return (
    <div className="font-arabic" dir={dir}>
      <Navbar />
      <div className="m-20 flex items-start justify-between">
        <div className="w-2/6 bg-gray-200 p-3 pb-10">
          <p className="font-medium underline">الرقم الترتيبي لتسجيل الطلب:</p>
          <p>{requestFollow[0].code}</p>
          <p className="font-medium underline">
            إسم المؤسسة أو الهيئة المعنية:
          </p>
          <p>
            <span className="font-medium">
              {requestFollow[0].denomination_org}
            </span>
            ({requestFollow[0].entite_responsable})
          </p>
          <p className="font-medium underline">وضعية الطلب:</p>
          <p className="w-fit border-2 border-slate-700 bg-white p-2 font-medium">
            {requestFollow[0].statut}
          </p>
          <p>{requestFollow[0].note}</p>
        </div>

        <ConverHistory requestFollow={requestFollow[0]} user="citizen" />
      </div>
      <Footer />
    </div>
  )
}
export default FollowReq
