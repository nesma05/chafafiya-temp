import { useEffect, useState } from 'react'
import { CloseIcon, SearchIcon } from '../icons'
import FilteredTerms from './FilteredTerms'
import Terms from './Terms'
import ToggleDrawer from './ToggleDrawer'

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
          'إدانة مصطلح يستخدم لوصف ذلك القسم من مجموعة تكّون أكثر من النصف. وقد يستعمل المصطلح أيضا لوصف (أكثرية نسبية) أو أكثرية (Plurality) أي أكبر عدد من الأصوات أو الناخبين عندما يكون هناك اختيار بين بديلين أو أكثر من المرشحين في الإنتخابات غير أن العدد يقل عن %50 من مجموع الأصوات. ',
      },
    ],
  },
  {
    letter: 'ب',
    termsList: [
      {
        title: 'بلدية',
        explanation:
          'بلدية مصطلح يستخدم لوصف ذلك القسم من مجموعة تكّون أكثر من النصف. وقد يستعمل المصطلح أيضا لوصف (أكثرية نسبية) أو أكثرية (Plurality) أي أكبر عدد من الأصوات أو الناخبين عندما يكون هناك اختيار بين بديلين أو أكثر من المرشحين في الإنتخابات غير أن العدد يقل عن %50 من مجموع الأصوات. ',
      },
      {
        title: 'برلمان',
        explanation:
          'برلمان مصطلح يستخدم لوصف ذلك القسم من مجموعة تكّون أكثر من النصف. وقد يستعمل المصطلح أيضا لوصف (أكثرية نسبية) أو أكثرية (Plurality) أي أكبر عدد من الأصوات أو الناخبين عندما يكون هناك اختيار بين بديلين أو أكثر من المرشحين في الإنتخابات غير أن العدد يقل عن %50 من مجموع الأصوات. ',
      },
    ],
  },
  {
    letter: 'ت',
    termsList: [
      {
        title: 'تعاونية',
        explanation:
          'تعاونية مصطلح يستخدم لوصف ذلك القسم من مجموعة تكّون أكثر من النصف. وقد يستعمل المصطلح أيضا لوصف (أكثرية نسبية) أو أكثرية (Plurality) أي أكبر عدد من الأصوات أو الناخبين عندما يكون هناك اختيار بين بديلين أو أكثر من المرشحين في الإنتخابات غير أن العدد يقل عن %50 من مجموع الأصوات. ',
      },
      {
        title: 'تسوية',
        explanation:
          'تسوية مصطلح  أكثرية أي أكبر عدد من الأصوات أو الناخبين عندما يكون هناك اختيار بين بديلين أو أكثر من المرشحين في الإنتخابات غير أن العدد يقل عن %50 من مجموع الأصوات. ',
      },
    ],
  },
]

const Drawer = () => {
  const [showDrawer, setShowDrawer] = useState(false)
  const [searchText, setSearchText] = useState('')
  const [listTerms, setListTerms] = useState<object[]>([])
  useEffect(() => {
    console.log('dictionaryList', dictionaryList)
    const terms = dictionaryList
      .map((term: any) => {
        return [...term.termsList]
      })
      .flat()
    console.log('terms', terms)
   
      setListTerms(terms)
    

    console.log('dictionaryList2', dictionaryList)
  }, [])
  return (
    <>
      <ToggleDrawer handleDrawer={setShowDrawer} />
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
          <div className="relative mt-10 w-full">
            <input
              type="text"
              className="w-full rounded-md border px-3 py-1.5 pr-12 text-sm shadow-sm focus:border-main focus:outline-main"
              placeholder="ابحث عن مصطلح"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />

            <span className="absolute inset-y-0 right-0 inline-flex items-center overflow-hidden  px-3  text-xl text-gray-400">
              <SearchIcon />
            </span>
          </div>
          {/* <div className="mt-4">
            {dictionaryList.map((dict: any) => (
              <Terms
                key={dict.letter}
                letter={dict.letter}
                termsList={dict.termsList}
              />
            ))}
          </div> */}
          {searchText ? (
            <div className="mt-4">
              {listTerms
                .filter((t: any) => t.title.includes(searchText))
                .map((term: any) => (
                  <FilteredTerms key={term.title} term={term} />
                ))}
            </div>
          ) : (
            <div className="mt-4">
              {dictionaryList.map((dict: any) => (
                <Terms
                  key={dict.letter}
                  letter={dict.letter}
                  termsList={dict.termsList}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Drawer
