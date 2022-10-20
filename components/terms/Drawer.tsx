import { useState } from 'react'
import { CloseIcon } from '../icons'
import Terms from './Terms'

const dictionaryList = [
  {
    letter: 'أ',
    termsList: [
      {
        title: 'أغلبية',
        explanation:
          'الأغلبية مصطلح يستخدم لوصف ذلك القسم من مجموعة تكّون أكثر من النصف. وقد يستعمل المصطلح أيضا لوصف (أكثرية نسبية) أو أكثرية (Plurality) أي أكبر عدد من الأصوات أو الناخبين عندما يكون هناك اختيار بين بديلين أو أكثر من المرشحين في الإنتخابات غير أن العدد يقل عن %50 من مجموع الأصوات. ',
      },
      {
        title: 'إدانة',
        explanation:
          'الأغلبية مصطلح يستخدم لوصف ذلك القسم من مجموعة تكّون أكثر من النصف. وقد يستعمل المصطلح أيضا لوصف (أكثرية نسبية) أو أكثرية (Plurality) أي أكبر عدد من الأصوات أو الناخبين عندما يكون هناك اختيار بين بديلين أو أكثر من المرشحين في الإنتخابات غير أن العدد يقل عن %50 من مجموع الأصوات. ',
      },
    ],
  },
  {
    letter: 'ب',
    termsList: [
      {
        title: 'بلدية',
        explanation:
          'الأغلبية مصطلح يستخدم لوصف ذلك القسم من مجموعة تكّون أكثر من النصف. وقد يستعمل المصطلح أيضا لوصف (أكثرية نسبية) أو أكثرية (Plurality) أي أكبر عدد من الأصوات أو الناخبين عندما يكون هناك اختيار بين بديلين أو أكثر من المرشحين في الإنتخابات غير أن العدد يقل عن %50 من مجموع الأصوات. ',
      },
      {
        title: 'برلمان',
        explanation:
          'الأغلبية مصطلح يستخدم لوصف ذلك القسم من مجموعة تكّون أكثر من النصف. وقد يستعمل المصطلح أيضا لوصف (أكثرية نسبية) أو أكثرية (Plurality) أي أكبر عدد من الأصوات أو الناخبين عندما يكون هناك اختيار بين بديلين أو أكثر من المرشحين في الإنتخابات غير أن العدد يقل عن %50 من مجموع الأصوات. ',
      },
    ],
  },
  {
    letter: 'ت',
    termsList: [
      {
        title: 'تعاونية',
        explanation:
          'الأغلبية مصطلح يستخدم لوصف ذلك القسم من مجموعة تكّون أكثر من النصف. وقد يستعمل المصطلح أيضا لوصف (أكثرية نسبية) أو أكثرية (Plurality) أي أكبر عدد من الأصوات أو الناخبين عندما يكون هناك اختيار بين بديلين أو أكثر من المرشحين في الإنتخابات غير أن العدد يقل عن %50 من مجموع الأصوات. ',
      },
      {
        title: 'تسوية',
        explanation:
          'الأغلبية مصطلح  أكثرية أي أكبر عدد من الأصوات أو الناخبين عندما يكون هناك اختيار بين بديلين أو أكثر من المرشحين في الإنتخابات غير أن العدد يقل عن %50 من مجموع الأصوات. ',
      },
    ],
  },
]

const Drawer = () => {
  const [showDrawer, setShowDrawer] = useState(false)
  return (
    <>
      <div className="fixed bottom-0 z-40 w-screen sm:w-fit sm:right-4 ">
        <button
          onClick={() => setShowDrawer(true)}
          className=" w-full bg-main px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-fit sm:rounded-t-lg "
        >
          قاموس/مصطلحات
        </button>
      </div>
      <div>
        <div
          className={`fixed right-0 top-0 z-40 h-screen w-80 bg-blue-900 ${
            showDrawer ? 'translate-x-0' : 'translate-x-full'
          } overflow-y-auto bg-white p-4 transition-transform`}
        >
          <button
            onClick={() => setShowDrawer(false)}
            className="absolute top-2.5 right-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-white hover:bg-gray-200 hover:text-gray-900"
          >
            <CloseIcon />
          </button>

          <div className="mt-10">
            {dictionaryList.map((dict: any) => (
              <Terms
                key={dict.letter}
                letter={dict.letter}
                termsList={dict.termsList}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Drawer
