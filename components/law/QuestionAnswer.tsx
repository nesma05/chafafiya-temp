import { useState } from 'react'
import Modal from '../home/Modal'
import { ChevronDown, DotsIcon } from '../icons'

const QuestionAnswer = ({
  term,
  index,
  selected,
  handleToggle,
  responsable = false,
}: any) => {
  const [rotate, setRotate] = useState(false)
  const [modal, setModal] = useState(false)
  const handleClose = () => {
    setModal(false)
  }

  return (
    <div className=" w-[100%] ">
      <Modal handleClose={handleClose} modal={modal} type={'respQuesAns'} />
      <div className="flex">
        {responsable && (
          <span className="cursor-pointer self-center text-xl" onClick={()=>setModal(true)}>
            <DotsIcon />
          </span>
        )}
        <div
          className={`flex flex-1 cursor-pointer items-center p-5 font-medium hover:bg-secondary/40 
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
      </div>
      <div
        className={`overflow-hidden border-b bg-white px-4 text-sm text-gray-500 transition-all duration-500 ease-in-out ${
          selected === index ? 'max-h-[2000px]' : 'max-h-0'
        }`}
      >
        <p className="py-3">{term.answer}</p>
        {term.image && (
          <div className="flex w-full justify-center">
            <div className="h-[300px] w-[400px] overflow-hidden">
              <img className="w-full" src={term.image} alt="" />
            </div>
          </div>
        )}
        {term.textes &&
          term.textes.map((txt: any, index: any) => (
            <p key={index} className="mb-2">
              {txt}
            </p>
          ))}
        {term.video && (
          <div className="my-10 flex w-full justify-center">
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
