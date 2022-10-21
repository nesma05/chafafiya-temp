import { useState } from 'react'
import { MinusIcon, PlusIcon } from '../icons'

const Terms = ({ term }: any) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="mb-2 w-[100%] p-1 ">
      <div
        className="flex cursor-pointer items-center gap-2 border py-1 px-2 font-medium text-white"
        onClick={() => {
          setOpen(!open)
        }}
      >
        <span>{term.title}</span>
        {open ? (
          <span className="m-start">
            <MinusIcon />
          </span>
        ) : (
          <span className="m-start">
            <PlusIcon />
          </span>
        )}
      </div>
      <div
        className={`overflow-hidden rounded bg-white p-2 text-sm transition-all duration-500 ease-in-out ${
          open ? 'max-h-[1000px]' : 'max-h-0 py-0'
        }`}
      >
        <p className="text-xs">{term.explanation}</p>
      </div>
    </div>
  )
}

export default Terms
