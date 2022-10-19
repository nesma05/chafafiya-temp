import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { InfoState } from '../../context/filterContext'
import useTranslation from '../../utils/customHooks'
import { CloseIcon } from '../icons'

const filesColor = (file: string) => {
  switch (file) {
    case 'pdf':
      return 'bg-red-500'
    case 'html':
      return 'bg-sky-500'
    case 'docx':
      return 'bg-blue-500'
  }
}

const FiltersResults = () => {
  const {
    state: { informations, ministries, anexes },
    dispatch,
  } = InfoState()

  const handleMinistries = (ministry:any) =>{
    dispatch({ type: 'REMOVE_FILTER_BY_MINITRIES', payload: ministry })
  }

  const handleAnexes = (anex:any) =>{
    dispatch({ type: 'REMOVE_FILTER_BY_ANEXES', payload: anex })
  }

  const filters = (data: any) => {
    return data
      .filter((info: any) => ministries.includes(info.institut))
      .filter((info: any) => anexes.some((anex:any) => info.anexes.includes(anex)))
  }

  const dataList = () =>
    filters(informations).length > 0 ? filters(informations) : informations
   
  
  const { tr } = useTranslation()
  const Router = useRouter()

  useEffect(()=>{
    dispatch({type:'INFORMATION_LENGTH',payload:dataList().length})
  },[dataList()])

  return (
    <>
      <div className="text-md font-arabic sm:basis-3/4">
        <div>
          <h3 className="font-bold">{tr('infoTotal')}</h3>
          <input
            type="text"
            name="Fédération"
            className="input-style mb-4"
            placeholder="البحث في النتائج"
          />
          <div className="mb-2 flex flex-wrap">
            <h4 className="ml-1 text-lg">الوزارات</h4>
            {ministries.map((ministry:any) => (
              <div
                onClick={()=>handleMinistries(ministry)}
                key={ministry}
                className="mb-1 ml-1 cursor-pointer flex justify-center rounded-full bg-sky-500 py-[1px] px-2 font-bold text-white transition-all duration-300 hover:bg-sky-600"
              >
                <span>{ministry}</span>
                <span><CloseIcon/></span>
              </div>
            ))}
          </div>
          <div className="mb-6 flex flex-wrap">
            <h4 className="ml-1 text-lg">المحاور</h4>
            {anexes.map((anex:any) => (
              <div
                onClick={()=>handleAnexes(anex)}
                key={anex}
                className="mb-1 ml-1 cursor-pointer flex justify-center rounded-full bg-sky-500 py-[1px] px-2 font-bold text-white transition-all duration-300 hover:bg-sky-600"
              >
                <span>{anex}</span>
                <span><CloseIcon/></span>
              </div>
            ))}
          </div>

          <hr />
        </div>
        <div>
          {dataList().map((info: any) => (
            <div key={info.id} className="mb-4">
              <h2 className="my-3 cursor-pointer text-xl text-sky-700 transition-colors duration-300 hover:text-sky-500">
                {info.title}
              </h2>
              <span className="border-2 bg-gray-200 py-1 px-2">المحور</span>
              {info.anexes.map((anex: any) => (
                <div className="inline-block" key={anex}>
                  <span className="border-2 p-1">{anex}</span>
                </div>
              ))}
              <p className="mt-3 mb-5">{info.institut}</p>
              {info.files.map((file: any) => (
                <span
                  key={file}
                  className={`${filesColor(
                    file
                  )} rounded-xs ml-2 py-[1px] px-[2px] font-lato text-xs text-white`}
                >
                  {file.toUpperCase()}
                </span>
              ))}
              <div className="py-4"></div>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default FiltersResults
