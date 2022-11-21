import { NextPage } from 'next'
import { requestFollow } from '../utils/constants'
import ConverHistory from '../components/responsable/ConverHistory'

const FollowReq: NextPage = () => {
  return (
    <>
    <div className="bg-gray-100 p-12">
        <h1 className="text-2xl">مرحبا بك سيد أحمد الوكيلي</h1>
      </div>
    <div className="my-20 w-[80%] mx-auto text-sm flex items-start justify-between">
      <div className="w-2/6 shadow-lg p-3 pb-10">
        <p className="font-medium underline text-main  mt-2">الرقم الترتيبي لتسجيل الطلب:</p>
        <p>{requestFollow[0].code}</p>
        <p className="font-medium underline text-main mt-2">إسم المؤسسة أو الهيئة المعنية:</p>
        <p>
          <span className="font-medium">
            {requestFollow[0].denomination_org}
          </span>
          ({requestFollow[0].entite_responsable})
        </p>
        <p className="font-medium underline text-main mt-2">وضعية الطلب:</p>
        <p className="w-fit border py-1 rounded bg-secondary/20 px-3 my-1 font-medium">
          {requestFollow[0].statut}
        </p>
        <p>{requestFollow[0].note}</p>
      </div>

      <ConverHistory requestFollow={requestFollow[0]} user="citizen" />
    </div>
    </>
  )
}
export default FollowReq
