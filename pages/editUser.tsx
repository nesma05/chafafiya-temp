import { NextPage } from 'next'
import Image from 'next/image'
import { useState } from 'react'
import { RefreshIcon } from '../components/icons'
import { age, participationType } from '../utils/constants'
const EditUser: NextPage = () => {
  return (
    <div>
      <div className="bg-gray-100 p-12">
        <h1 className="text-2xl">تحيين معلوماتي الشخصية</h1>
      </div>
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

          <div className="mt-10 text-center">
            <button
              type="submit"
              className={`w-[50%] rounded-lg bg-main px-5 py-2.5 text-center font-medium text-white hover:bg-main_dark  `}
            >
              حفظ التغييرات
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditUser
