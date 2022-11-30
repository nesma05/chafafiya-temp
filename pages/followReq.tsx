import { NextPage } from 'next'
import { requestFollow } from '../utils/constants'
import ConverHistory from '../components/responsable/ConverHistory'

const FollowReq: NextPage = () => {
  return (
    <>
      <div className="bg-gray-100 p-12">
        <h1 className="text-2xl">مرحبا بك سيد أحمد الوكيلي</h1>
      </div>
      <div className="my-20 mx-auto flex w-[80%] items-start justify-between text-sm">
        <div className="w-2/6 p-3 pb-10 shadow-lg">
          <p className="mt-2 font-medium text-main  underline">
            الرقم الترتيبي لتسجيل الطلب:
          </p>
          <p>{requestFollow[0].code}</p>
          <p className="mt-2 font-medium text-main underline">
            إسم المؤسسة أو الهيئة المعنية:
          </p>
          <p>
            <span className="font-medium">
              {requestFollow[0].denomination_org}
            </span>
            ({requestFollow[0].entite_responsable})
          </p>
          <p className="mt-2 font-medium text-main underline">وضعية الطلب:</p>
          <p className="my-1 w-fit rounded border bg-secondary/20 py-1 px-3 font-medium">
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
