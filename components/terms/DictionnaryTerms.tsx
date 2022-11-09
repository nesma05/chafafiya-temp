import { useState } from 'react'
import { MinusIcon, PlusIcon } from '../icons'

const Terms = ({ letter, termsList}: any) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="w-[100%] mb-2 p-1 ">
      <div
        className="cursor-pointer py-1 px-2 text-white flex items-center gap-2 border font-medium"
        onClick={() => {
          setOpen(!open)
        }}
      >
        <span>{letter}</span>
        {open ? <span className='m-start'><MinusIcon/></span> :<span className='m-start'><PlusIcon/></span>}
      </div>
      <div
        className={`overflow-hidden rounded bg-white px-2 text-sm transition-all duration-500 ease-in-out ${
          open ? 'max-h-[1000px] py-2' : 'max-h-0 py-0'
        }`}
      >
        <ul>
          {termsList.map((term: any) => (
            <li key={term.title} className='mb-2'>
              <p className="mb-1 underline font-bold">{term.title}</p>
              <p className='text-xs'>{term.explanation}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Terms