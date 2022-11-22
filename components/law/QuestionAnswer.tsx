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
        <span>{term.question}</span>

        <span className="m-start">
          <ChevronDown rotate={rotate} />
        </span>
      </div>
      <div
        className={`overflow-hidden border-b bg-white px-4 text-sm text-gray-500 transition-all duration-500 ease-in-out ${
          selected === index ? 'max-h-[1000px]' : 'max-h-0'
        }`}
      >
        <p className="py-3">{term.answer}</p>
        {term.image && (
          <div className="h-[300px] w-[400px] overflow-hidden">
            <img className="w-full" src={term.image} alt="" />
          </div>
        )}
        {term.textes &&
          term.textes.map((txt: any, index: any) => (
            <p key={index} className="mb-2">
              {txt}
            </p>
          ))}
        {term.video && (
          <div>
            <iframe
              width="560"
              height="315"
              src={term.video}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        )}
      </div>
    </div>
  )
}

export default QuestionAnswer
