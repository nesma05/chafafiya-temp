import { useState } from 'react'
import { CopyIcon, DotIcon, ExclamationIcon } from '../icons'

export const responsableList = [
  {
    title: 'جميع الطلبات',
    icon: <CopyIcon />,
  },
  {
    title: 'طلبات تنتهي قبل <strong>3 </strong>أيام',
    icon: <ExclamationIcon />,
  },
  {
    title: 'طلبات تنتهي قبل <strong>7 </strong>أيام',
    icon: <DotIcon color="brown" />,
  },
  {
    title: 'طلبات تنتهي قبل <strong>14 </strong>يوم',
    icon: <DotIcon color="orange" />,
  },
  {
    title: 'طلبات تنتهي بعد <strong>14 </strong>يوم',
    icon: <DotIcon color="green" />,
  },
  {
    title: 'طلبات منتهية',
    icon: <DotIcon color="gray" />,
  },
]

const ResSideBar = () => {
  const [showSideBar, setShowSideBar] = useState(true)
  const [selectedItem, setSelectedItem] = useState(0)
  const handleItemClick = (index: any) => {
    setSelectedItem(index)
  }
  return (
    <div className="h-[700px] w-[25%] overflow-y-auto border-l-2 border-gray-300 bg-white px-4">
      <div className="mt-10">
        <ul>
          {/* <li onClick={()=>handleItemClick(10)} className={`flex items-center w-full cursor-pointer p-2 ${selectedItem === 10 ? 'bg-blue-200 font-medium':''}`}>
                    <span className='ml-3' ><CopyIcon/></span><span>جميع الطلبات</span><span className='m-start'>255</span>
                </li> */}
          {responsableList.map((resList: any, i: any) => (
            <li
              onClick={() => handleItemClick(i)}
              key={i}
              className={`flex w-full cursor-pointer items-center p-2 ${
                selectedItem === i ? 'bg-blue-200 font-medium' : ''
              }`}
            >
              <span className="ml-3">{resList.icon}</span>
              <span dangerouslySetInnerHTML={{ __html: `${resList.title}` }} />
              <span className="m-start">255</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ResSideBar
