import axios from 'axios'
import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { RefreshIcon } from '../components/icons'
import { useCaptcha } from '../utils/customHooks'

const CheckComplaintInstit: NextPage = () => {
  const { handleClick, handleCaptcha, setcaptcha, img, captcha, message } =
    useCaptcha()

  return (
    <div className="bg-red flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          تقديم شكاية للمؤسسة المعنية
          </h2>
        </div>
        <form className="mt-8 space-y-6">
          <div className="space-y-4 rounded-md shadow-sm">
            <div>
              <label className="sr-only">البريد الإلكتروني</label>
              <input
                className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                placeholder="البريد الإلكتروني"
              />
            </div>
            <div>
              <label className="sr-only">رمز الشكاية</label>
              <input
                className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                placeholder="رمز الشكاية"
              />
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative h-[50px] w-[200px] overflow-hidden border-2 border-slate-700 bg-cyan-700">
              <Image
                src={img || '/img/captcha-screenshot.png'}
                layout="fill"
                objectFit="cover"
                alt="chafafiya image"
              />
            </div>
            <span onClick={handleCaptcha} className="cursor-pointer text-5xl">
              <RefreshIcon />{' '}
            </span>
            <input
              className="block w-1/2 rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
              type="text"
              value={captcha}
              placeholder="ادخل الرمز في الصورة"
              onChange={(e) => setcaptcha(e.target.value)}
            />
          </div>

          <div>
            <p>{message}</p>
            <button
              onClick={handleClick}
              className="text-md flex w-full justify-center rounded-md bg-sky-600 py-2 px-4 font-medium text-white transition-colors duration-300 ease-in-out hover:bg-sky-700"
            >
              تأكيد
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CheckComplaintInstit
