import { forwardRef, useState } from 'react'
import { MinusIcon, PlusIcon } from '../icons'

const DictionnaryTerms = forwardRef(
  ({ letter, termsList, count, color }: any, ref: any) => {
    const [open, setOpen] = useState(true)

    return (
      <div ref={ref} className="mb-2 w-[100%] p-1">
        {termsList.length > 0 && (
          <div
            className={`flex cursor-pointer items-center gap-2  border py-1 px-2 font-medium text-${color}`}
            onClick={() => {
              setOpen(!open)
            }}
          >
            <span className="w-8 rounded bg-main py-0.5 text-center text-white ">
              {letter}
            </span>
            <div className="m-start flex items-center gap-3">
              {count && (
                <span
                  className="rounded py-0.5 px-2.5 font-bold text-main"
                >
                  {termsList.length}
                </span>
              )}
              {open ? (
                <span>
                  <MinusIcon />
                </span>
              ) : (
                <span>
                  <PlusIcon />
                </span>
              )}
            </div>
          </div>
        )}
        <div
          className={`overflow-hidden rounded bg-white px-2 text-sm transition-all duration-500 ease-in-out ${
            open ? 'max-h-[1000px]' : 'max-h-0'
          }`}
        >
          <ul className="py-2">
            {termsList.map((term: any, index: any) => (
              <li key={index} className="mb-2">
                <p className="mb-1 font-bold underline">{term.title}</p>
                <p className="text-xs">{term.explanation}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
)

export default DictionnaryTerms
