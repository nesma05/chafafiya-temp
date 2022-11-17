import { NextPage } from 'next'
import NextLink from 'next/link'
import { NoteIcon } from '../components/icons'
import PageTitle from '../components/Layout/PageTitle'

const Login: NextPage = () => {
  return (
    <div>
      <PageTitle>تسجيل الدخول</PageTitle>
      <div className="flex h-[700px] items-center justify-center text-sm">
        <div className="w-[450px] rounded-lg bg-white shadow-lg">
          <div className="py-6 px-6 lg:px-8">
            <div className="flex bg-secondary/30 mb-10 p-2 rounded-md gap-2">
              <span className='text-lg'>
                <NoteIcon />
              </span>
              <div>
                <span className='font-bold'>ملاحظة</span>
                <p className='text-xs mt-1'>
                  يمكنكم تقديم طلب دون إنشاء حساب بالضغط على{' '}
                  <NextLink href={'#'}>
                    <a className='text-main font-semibold hover:underline'>الرابط الآتي</a>
                  </NextLink>
                </p>
              </div>
            </div>
            <div className='mb-8'>
              <p className='text-justify text-xs leading-5'>كن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل هؤلاء  </p>
            </div>
            <form className="space-y-6" action="#">
              <div>
                <label className="mb-2 block  font-medium text-gray-900">
                  <span> البريد اللإلكتروني </span>
                  <input
                    type="email"
                    name="email"
                    className="block mt-1 w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5  text-gray-900 focus:outline-none focus:border-main focus:ring-main"
                    placeholder="البريد اللإلكتروني"
                  />
                </label>
              </div>
              <div>
                <label className="mb-2 block  font-medium text-gray-900">
                  <span>كلمة المرور</span>
                  <input
                    type="password"
                    name="password"
                    placeholder="كلمة المرور"
                    className="block mt-1 w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5  text-gray-900 focus:outline-none focus:border-main focus:ring-main"
                  />
                </label>
              </div>
              <div className="flex justify-end">
                <NextLink href={'#'} passHref>
                  <a className=" text-blue-700 hover:underline dark:text-blue-500">
                    نسيت كلمة السر
                  </a>
                </NextLink>
              </div>
              <NextLink href={'#'} passHref>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-main px-5 py-2.5 text-center font-medium text-white hover:bg-main_dark"
                >
                  تسجيل الدخول
                </button>
              </NextLink>
              <div className=" font-medium text-gray-900">
                ليس لديك حساب؟{' '}
                <NextLink href={'#'} passHref>
                  <a className="font-bold text-blue-700 hover:underline">
                    إنشاء حساب
                  </a>
                </NextLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
