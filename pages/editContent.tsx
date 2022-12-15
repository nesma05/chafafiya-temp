import { useState } from 'react'
import Modal from '../components/home/Modal'
import SubTitle from '../components/home/SubTitle'
import IllustrationsSection from '../components/law/IllustrationsSection'
import QuestionAnswer from '../components/law/QuestionAnswer'
import SecondaryLayout, {
  PageWithSecondaryLayoutType,
} from '../components/Layout/SecondaryLayout'
import ResponsableHeader from '../components/responsable/ResponsableHeader'
import { illustrationsList, lawList, videosList } from '../utils/constants'

const EditContent: PageWithSecondaryLayoutType = () => {
  const [selected, setSelected] = useState(null)
  const [selectedItem, setSelectedItem] = useState(0)
  const [toggleIndex, setToggleIndex] = useState(1)
  
  

  const sideBarList = [
    {
      id: '01',
      text: 'بوابة الحصول على المعلومات',
    },
    {
      id: '02',
      text: 'ما هو القانون رقم 13-31',
    },
    {
      id: '03',
      text: 'كيف يمكنك تقديم طلب',
    },
  ]

  const langLists = [
    {
      id: 'l01',
      text: 'AR',
    },
    {
      id: 'l02',
      text: 'AMZ',
    },
    {
      id: 'l03',
      text: 'FR',
    },
    {
      id: 'l04',
      text: 'EN',
    },
  ]

  const handleToggle = (i: any) => {
    if (selected === i) {
      return setSelected(null)
    }

    return setSelected(i)
  }

  const handleItemClick = (index: any) => {
    setSelectedItem(index)
    setToggleIndex(index+1)
  }

  const inputContent = ()=>{
    if(toggleIndex===1) return 'ما هي بوابة الحصول على المعلومات؟'
    if(toggleIndex===2) return 'ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ?'
    if(toggleIndex===3) return "C'est quoi le portail de l'accés à l'information?"
    if(toggleIndex===4) return 'What is the access to information portal?'
  }

  return (
    <div className="text-sm">
      <ResponsableHeader responsable={"Adminitrateur"} />
      <div className="mt-10 flex w-full justify-start border-t-2 border-gray-300">
        <div className="w-[250px] bg-gray-600 text-white">
          <ul className="p-2">
            <li className="mb-1 border-b border-black p-1 font-bold">
              الصفحات
            </li>
            {sideBarList.map((ls: any) => (
              <li key={ls.id} className="cursor-pointer p-2">
                {ls.txt}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1">
          <div className="flex h-[200px] items-center">
            <div className="mx-auto flex w-[70%] items-center gap-3">
              <div className="flex-1">
                <div className="flex gap-8">
                  <label className="mb-1.5 inline-block"> عنوان الصفحة:</label>
                  <div>
                    {langLists.map((lang: any, index:any) => (
                      <span
                        key={lang.id}
                        className={`cursor-pointer border-r-2 border-main px-2 font-bold ${
                          selectedItem === index ? 'text-main' : ''
                        }`}
                        onClick={()=>handleItemClick(index)}
                      >
                        {lang.text}
                      </span>
                    ))}
                  </div>
                </div>
                <input
                  className="text-md mt-1.5 w-full rounded-md border border-gray-300 p-3 text-sm text-gray-800 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500"
                  placeholder="عنوان الصفحة"
                  name="firstname"
                  type="text"
                  value={inputContent()}
                />
              </div>
            </div>
          </div>
          <div className="mx-auto mb-20 w-[80%]">
            <div className="overflow-hidden rounded-t-xl border">
              {lawList.map((list: any, index: any) => (
                <QuestionAnswer
                  key={list.id}
                  term={list}
                  handleToggle={handleToggle}
                  index={index}
                  selected={selected}
                  responsable={true}
                />
              ))}
            </div>
            <div className="mt-14 px-1">
              <SubTitle>رسوم بيانية</SubTitle>
              <IllustrationsSection
                illustrationsList={illustrationsList}
                type="image"
                withModal={false}
              />
            </div>
            <div className="mt-14 px-1">
              <SubTitle>مقاطع مرئية</SubTitle>
              <IllustrationsSection
                illustrationsList={videosList}
                type="video"
                withModal={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default EditContent

EditContent.getLayout = SecondaryLayout
