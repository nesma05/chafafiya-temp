import { NextPage } from 'next'
import Image from 'next/image'
import { useState } from 'react'
import { RefreshIcon } from '../components/icons'
import PageTitle from '../components/Layout/PageTitle'
import { age, participationType } from '../utils/constants'
const CreateUser: NextPage = () => {

  const [toggleDisable, setToggleDisable] = useState(true)
  const handleCheck = (e:any)=>{
    if(e.target.checked) return setToggleDisable(false)
    return setToggleDisable(true)
  }

  return (
    <div>
      <PageTitle>إنشاء حساب</PageTitle>
      <div className="mx-auto my-20 w-[80%]">
        <form className="flex flex-col gap-6">
          <div className="flex gap-4">
            <div className="flex-1">
              <input
                className="text-md w-full rounded-md border border-gray-300 p-3 text-sm text-gray-600 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500"
                placeholder="الإسم الشخصي*"
                name="firstname"
                type="text"
              />
            </div>
            <div className="flex-1">
              <input
                className="text-md w-full rounded-md border border-gray-300 p-3 text-sm text-gray-600 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500"
                placeholder="الإسم العائلي*"
                name="lastname"
                type="text"
              />
            </div>
          </div>
          <div>
            <input
              className="text-md w-full rounded-md border border-gray-300 p-3 text-sm text-gray-600 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500"
              placeholder="العنوان الشخصي*"
              name="address"
              type="text"
            />
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <input
                className="text-md w-full rounded-md border border-gray-300 p-3 text-sm text-gray-600 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500"
                placeholder="البريد الإكتروني*"
                name="email"
                type="text"
              />
            </div>
            <div>
              <input
                className="text-md w-full rounded-md border border-gray-300 p-3 text-sm text-gray-600 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500"
                placeholder="رقم الهاتف"
                name="phone"
                type="text"
              />
            </div>
          </div>
          <div>
            <div>
              <input type="radio" name="requester" value="citizin" />
              <label>مواطن(ة) مغربي(ة)</label>
            </div>

            <div className="mx-auto mt-2">
              <input
                className="text-md w-1/2 rounded-md border border-gray-300 p-3 text-sm text-gray-600 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500"
                placeholder="رقم البطاقة الوطنية للتعريف*"
                name="cinNumber"
                type="text"
              />
            </div>
          </div>
          <div>
            <select
              name="paricipationType"
              className="mt-2 w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-gray-600 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500"
            >
              <option> -- إختر صفة المشاركة -- </option>
              {participationType?.map((part: any, index: any) => (
                <option key={index} value={part.id}>
                  {part.title}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-between">
            <select
              name="domain"
              className="mt-2 w-[40%] rounded-md border border-gray-300 bg-white py-2 px-3 text-gray-600 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500"
            >
              <option> -- إختر الجهة -- </option>
              <option>طنجة تطوان الحسيمة</option>
              <option>سوس ماسة</option>
              <option>الدار البيضاء سطات</option>
            </select>
            <select
              name="subDomain"
              className="mt-2 w-[20%] rounded-md border border-gray-300 bg-white py-2 px-3 text-gray-600 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:mx-2"
            >
              <option> -- إختر الجنس -- </option>
              <option>ذكر</option>
              <option>أنثى</option>
            </select>
            <select
              name="subDomain"
              className="mt-2 w-[30%] rounded-md border border-gray-300 bg-white py-2 px-3 text-gray-600 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:mx-2"
            >
              <option> -- إختر الفئة العمرية -- </option>
              {age?.map((ag: any, index: any) => (
                <option key={index} value={ag.id}>
                  {ag.title}
                </option>
              ))}
            </select>
          </div>
          <div>
            <div className="flex justify-between">
              <div className="basis-[45%]">
                <input
                  className="text-md w-full rounded-md border border-gray-300 p-3 text-sm text-gray-600 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500"
                  placeholder=" كلمة المرور*"
                  name="email"
                  type="password"
                />
              </div>
              <div className="basis-[45%]">
                <input
                  className="text-md w-full rounded-md border border-gray-300 p-3 text-sm text-gray-600 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500"
                  placeholder="أعد كلمة المرور*"
                  name="phone"
                  type="password"
                />
              </div>
            </div>
          </div>
          <div className="mx-auto mt-10 flex w-[50%] items-center justify-center">
            <div className="relative h-[50px] w-[200px] overflow-hidden border-2 border-slate-700 bg-cyan-700">
              <Image
                src={'/img/captcha-screenshot.png'}
                layout="fill"
                objectFit="cover"
                alt="chafafiya image"
              />
            </div>
            <span className="cursor-pointer text-5xl">
              <RefreshIcon />{' '}
            </span>
            <input
              className="block w-1/2 rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
              type="text"
              placeholder="ادخل الرمز في الصورة"
            />
          </div>
          <div className="flex justify-center gap-2">
            <input type="checkbox" name="" className="h-[20px] scale-[1.3]" onChange={handleCheck}/>
            <p>
              لقد قرأت وأوافق على{' '}
              <span className="text-main underline">شروط الخدمة</span> و
              <span className="text-main underline"> سياسة الخصوصية </span>
            </p>
          </div>
          <div className="mt-10 text-center">
            <button
              type="submit"
              className={`w-[50%] rounded-lg ${toggleDisable ? 'bg-gray-400':'bg-main hover:bg-main_dark'}  px-5 py-2.5 text-center font-medium text-white  `}
              disabled={toggleDisable}
            >
              حفظ التغييرات
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateUser
