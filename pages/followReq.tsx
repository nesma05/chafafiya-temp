import { NextPage } from 'next'
import { requestFollow } from '../utils/constants'
import ConverHistory from '../components/responsable/ConverHistory'
import { StarIcon } from '../components/icons'
import { useRef, useState } from 'react'

const FollowReq: NextPage = () => {
  const [currentRating, setCurrentRating] = useState(0)
  const [hoverValue, setHoverValue] = useState<any>(null)
  const [feedback, setFeedback] = useState<any>(null)
  const textRef=useRef<HTMLTextAreaElement>(null)

  const handleClick =()=>{
    setFeedback({data:{rating:currentRating,review:textRef.current?.value}})
    
  }
  return (
    <>
      <div className="bg-gray-100 p-12">
        <h1 className="text-2xl">مرحبا بك سيد أحمد الوكيلي</h1>
      </div>
      <div className="my-20 mx-auto flex w-[80%] items-start justify-between text-sm">
        <div className="w-2/6 rounded-md p-3 pb-10 shadow-lg">
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
      <div className="mx-auto w-[60%]  text-center text-sm">
        <h5 className="text-lg">
          تقييم معالجة المؤسسة أو الهيئة المعنية لطلبك
        </h5>
        <div className="my-6 flex items-center justify-center gap-4">
          
          <span>سيء جدا</span>
          <div className="flex">
            {Array(5)
              .fill(0)
              .map((el: any, index: any) => (
                <span
                key={index}
                  className={`cursor-pointer text-2xl text-gray-400 ${
                    (currentRating || hoverValue) > index
                      ? 'text-orange-500'
                      : 'text-gray-300'
                  }`}
                  onClick={() => setCurrentRating(index + 1)}
                  onMouseOver={() => setHoverValue(index + 1)}
                  onMouseLeave={() => setHoverValue(null)}
                >
                  <StarIcon />
                </span>
              ))}
          </div>
          <span>جيد جدا</span>
        </div>
        <textarea
          className="mx-auto block w-[60%] border-2 py-2 px-4 focus:outline-main"
          placeholder="اكتب رأيك عن معالجة المؤسسة أو الهيئة المعنية لطلبك"
          rows={6}
          ref={textRef}
        ></textarea>
        <button onClick={handleClick} className="mx-2 my-10 rounded-md bg-main py-1.5 px-2 text-white sm:px-3">
          إغلاق الطلب
        </button>
        {feedback && <pre dir='ltr' className='text-left'>{JSON.stringify(feedback,null,"\t")}</pre>}
      </div>
     
    </>
  )
}
export default FollowReq
