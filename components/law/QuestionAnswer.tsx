import { useState } from 'react'
import { ChevronDown } from '../icons'

const QuestionAnswer = ({ term, index, selected, handleToggle }: any) => {
  const [rotate, setRotate] = useState(false)

  return (
    <div className=" w-[100%] ">
      <div
        className={`flex cursor-pointer items-center p-5 font-medium hover:bg-secondary/40 
        ${
          selected === index
            ? 'bg-secondary/40 text-main'
            : 'bg-white text-gray-900'
        }`}
        onClick={() => {
          setRotate(!rotate)
          handleToggle(index)
        }}
      >
        <span>{term.title}</span>

        <span className="m-start">
          <ChevronDown rotate={rotate} />
        </span>
      </div>
      <div
        className={`overflow-hidden border-b bg-white px-4 text-sm text-gray-500 transition-all duration-200 ease-in-out ${
          selected === index ? 'max-h-[1000px] py-6' : 'max-h-0 py-0'
        }`}
      >
        <p>{term.explanation}</p>
      </div>
    </div>
  )
}

export default QuestionAnswer
