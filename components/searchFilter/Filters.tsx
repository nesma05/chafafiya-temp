import { useState } from 'react'
import { ministriesList, anexesList, fileTypes } from '../../utils/constants'
import { InfoState } from '../../context/filterContext'
import useTranslation from '../../utils/customHooks'
import { useRouter } from 'next/router'

const Filters = () => {
  const [showMinistriesSection, setShowMinistriesSection] = useState(false)
  const [showAllMinistries, setShowAllMinistries] = useState(false)
  const [ministryInput, setMinistryInput] = useState('')

  const [showAllAnexes, setShowAllAnexes] = useState(false)
  const [anexInput, setAnexInput] = useState('')

  const { dispatch } = InfoState()

  const { tr } = useTranslation()
  const Router = useRouter()

  const toggleSections = (section: string) => {
    if (section === 'ministries') setShowMinistriesSection(true)
  }

  const handelMinistryInput = (e: any) => {
    setMinistryInput(e.target.value)
  }

  const handelAnexyInput = (e: any) => {
    setAnexInput(e.target.value)
  }

  const handleMinistiesCheckbox = (e: any) => {
    if (e.target.checked)
      dispatch({
        type: 'ADD_FILTER_BY_MINITRIES',
        payload: e.target.value,
      })
    else
      dispatch({ type: 'REMOVE_FILTER_BY_MINITRIES', payload: e.target.value })
  }

  const handleAnexesCheckbox = (e: any) => {
    if (e.target.checked)
      dispatch({
        type: 'ADD_FILTER_BY_ANEXES',
        payload: e.target.value,
      })
    else dispatch({ type: 'REMOVE_FILTER_BY_ANEXES', payload: e.target.value })
  }

  return (
    <>
      <div className="text-md flex flex-col gap-2 font-arabic sm:basis-1/4">
        <h3 className="font-bold">{tr('typeAdmin')}</h3>
        <div>
          <input
            type="radio"
            name="type"
            className="ml-2"
            value="ministries"
            onChange={(e) => toggleSections(e.target.value)}
          />
          <label>
            الإدارات العمومية (الوزارات وكتابات الدولة والمندوبيات السامية
            والوزارية)
          </label>
        </div>
        <div>
          <input
            type="radio"
            name="type"
            className="ml-2"
            value="institutions"
          />
          <label>المؤسسات والمقاولات العمومية</label>
        </div>
        <div>
          <input
            type="radio"
            name="type"
            className="ml-2"
            value="collectives"
          />
          <label>الجماعات الترابية</label>
        </div>
        <div
          className={`${
            showMinistriesSection && !showAllMinistries
              ? 'max-h-[320px]'
              : showMinistriesSection && showAllMinistries
              ? 'max-h-[5000px]'
              : 'max-h-0'
          } overflow-hidden transition-all duration-300`}
        >
          <div>
            <h3 className="font-bold">الوزارات</h3>
            <input
              type="text"
              name="ministry"
              value={ministryInput}
              className="input-style"
              placeholder="البحث في الوزارات"
              onChange={handelMinistryInput}
            />
          </div>
          <div
            className={`${
              showMinistriesSection && showAllMinistries
                ? 'max-h-[2000px]'
                : 'max-h-[200px]'
            } overflow-hidden transition-all duration-300`}
          >
            {ministriesList
              .filter((ministry) => ministry.indexOf(ministryInput) >= 0)
              .map((ministry) => (
                <div className="mb-3 flex items-center gap-1" key={ministry}>
                  <input
                    type="checkbox"
                    value={ministry}
                    onChange={handleMinistiesCheckbox}
                    className="flex-none rounded border-gray-300 text-sky-600"
                  />
                  <label className="rounded-full px-3">{ministry}</label>
                </div>
              ))}
          </div>
          <p
            onClick={() => setShowAllMinistries(!showAllMinistries)}
            className="mx-auto mt-3 w-fit cursor-pointer text-lg text-sky-700 transition-colors duration-300 hover:text-sky-500"
          >
            إظهار {showAllMinistries ? 'بعض' : 'جميع'} الوزارات
          </p>
        </div>

        <div>
          <hr></hr>
          <h3 className="mt-4 font-bold">{tr('anexes')}</h3>
          <input
            type="text"
            name="anex"
            value={ministryInput}
            className="input-style"
            placeholder="البحث في المحاور"
            onChange={handelAnexyInput}
          />
        </div>
        <div>
          {anexesList.map((anex) => (
            <div className="mb-3 flex items-center gap-1" key={anex}>
              <input
                type="checkbox"
                value={anex}
                onChange={handleAnexesCheckbox}
                className="flex-none rounded border-gray-300 text-sky-600"
              />
              <label className="rounded-full px-3">{anex}</label>
            </div>
          ))}
        </div>
        <div>
          <hr></hr>
          <h3 className="mt-4 font-bold">صيغة الملف</h3>
        </div>
        <div>
          {fileTypes.map((fileType) => (
            <div className="mb-3 flex items-center gap-1" key={fileType}>
              <input
                type="checkbox"
                value={fileType}
                className="flex-none rounded border-gray-300 text-sky-600"
              />
              <label className="rounded-full px-3">{fileType}</label>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Filters
