import NextLink from 'next/link'
import { NoteIcon } from '../icons'

const SearchResultsHeader = () => {
    return (
        <div>
        <div className="border-y-2 border-slate-700 bg-gray-200 py-10 px-16">
          <h1 className="text-2xl font-medium">
            ابحث عن المعلومة قبل تقديم الطلب
          </h1>
        </div>
        <div className='flex items-center gap-4 mx-10 my-8 p-4 bg-gray-200'>
          <span className='text-2xl'><NoteIcon/></span>  
          <div>
          <h5 className='font-medium'>ملاحظة</h5>
          <p>
            في حالة عدم إيجاد المعلومة، يمكنكم الإطلاع على{' '}
            <NextLink href={'/'} passHref>
              <span className="cursor-pointer text-blue-500 underline">
                بعض المواقع الحكومية
              </span>
            </NextLink>{' '}
            أو البحث في{' '}
            <NextLink href={'/'} passHref>
              <span className="cursor-pointer text-blue-500 underline">
                مواقع المؤسسات والهيئات
              </span>
            </NextLink>
          </p>
          </div>
        </div>
        </div>
    )
  }
  
  export default SearchResultsHeader