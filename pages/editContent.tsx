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


  const handleToggle = (i: any) => {
    if (selected === i) {
      return setSelected(null)
    }

    return setSelected(i)
  }
  return (
    <div className="text-sm">
      <ResponsableHeader responsable={'المسؤول عن المعلومات'} />
      <div className="mt-10 flex w-full justify-start border-t-2 border-gray-300">
        <div className="h-[700px] w-[250px] bg-gray-600 text-white">
          <ul className="p-2">
            <li className="mb-1 border-b border-black p-1 font-bold">
              الصفحات
            </li>
            <li className="cursor-pointer p-1">بوابة الحصول على المعلومات</li>
            <li className="cursor-pointer p-1">ما هو القانون رقم 13-31</li>
            <li className="cursor-pointer p-1">كيف يمكنك تقديم طلب</li>
          </ul>
        </div>
        <div className="flex-1">
          <div className="flex h-[200px] items-center">
            <div className="mx-auto flex w-[70%] items-center gap-3">
              <div className="flex-1">
                <input
                  className="text-md w-full rounded-md border border-gray-300 p-3 text-sm text-gray-600 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500"
                  placeholder="عنوان الصفحة"
                  name="firstname"
                  type="text"
                />
              </div>
              <div>
                <span className="cursor-pointer border-r-2 border-main px-2 font-bold text-main">
                  AR
                </span>
                <span className="cursor-pointer border-r-2 border-main px-2">
                  AMZ
                </span>
                <span className="cursor-pointer border-r-2 border-main px-2">
                  FR
                </span>
                <span className="cursor-pointer border-r-2 border-main px-2">
                  EN
                </span>
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
