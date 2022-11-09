import { useState } from 'react'
import { ChevronDown, MinusIcon, PlusIcon } from '../icons'

const QuestionAnswer = ({ term }: any) => {
  const [open, setOpen] = useState(false)
  const [rotate, setRotate] = useState(false)

  return (
    <div className=" w-[100%] ">
      <div
        className={`gap flex cursor-pointer items-center border-b p-5 font-medium hover:bg-secondary/40 
        ${open ? 'bg-secondary/40 text-main' : 'text-gray-900 bg-white'}`}
        onClick={() => {
          setOpen(!open)
          setRotate(!rotate)
        }}
      >
        <span>{term.title}</span>

        <span className="m-start">
          <ChevronDown rotate={rotate} />
        </span>
      </div>
      <div
        className={`overflow-hidden rounded border-b bg-white px-4 text-sm text-gray-500 transition-all duration-200 ease-in-out ${
          open ? 'max-h-[1000px] py-6' : 'max-h-0 py-0'
        }`}
      >
        <p>{term.explanation}</p>
      </div>
    </div>
  )
}

export default QuestionAnswer
