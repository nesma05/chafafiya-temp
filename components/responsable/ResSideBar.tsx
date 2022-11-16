import { useState } from 'react'
import { BurgerIcon, CopyIcon, DotIcon, ExclamationIcon } from '../icons'

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
  const [selectedItem, setSelectedItem] = useState(0)
  const [open, setOpen] = useState(true)

  const handleItemClick = (index: any) => {
    setSelectedItem(index)
  }
  return (
    <div
      className={`h-[700px] ${
        open ? 'w-[250px]' : 'w-[70px]'
      } overflow-y-auto border-l-2 border-gray-300 bg-white px-2 text-sm transition-all duration-100 ease-in-out`}
    >
      <div
        className="my-2 mx-3 cursor-pointer text-3xl text-main"
        onClick={() => setOpen(!open)}
      >
        <BurgerIcon />
      </div>
      <div className="mt-4">
        <ul>
          {responsableList.map((resList: any, i: any) => (
            <li
              onClick={() => handleItemClick(i)}
              key={i}
              className={`flex w-full cursor-pointer items-center py-2 px-0.5 ${
                selectedItem === i ? 'bg-blue-200 font-medium' : ''
              }`}
            >
              <span className="mx-3 border-2 border-black p-0.5">
                {resList.icon}
              </span>
              {open && (
                <div className={`flex flex-1 justify-between `}>
                  <span
                    dangerouslySetInnerHTML={{ __html: `${resList.title}` }}
                  />
                  <span className="m-start font-bold">255</span>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ResSideBar
