import NextLink from 'next/link'
import { useState } from 'react'
import { ArrowDown, MinusIcon, PlusIcon } from '../icons'
import SearchInput from '../searchFilter/SearchInput'
import useTranslation from '../../utils/customHooks'


const Accordion = ({ content }: any) => {
  const [open, setOpen] = useState(false)
  const {tr} = useTranslation()
  return (
    <div className="w-full lg:w-[30%] divide-y-2">
      <div
        className="h-[90px] w-full p-5 bg-secondary/30 hover:bg-secondary/50 font-bold flex items-center cursor-pointer gap-2 shadow-xl"
        onClick={() => {
          setOpen(!open)
        }}
      >
        <span className='text-4xl p-2 border-2 border-main rounded-full bg-white'>{content.icon}</span>
        <span>{content.title}</span>
        {open ? <span className='m-start'><MinusIcon/></span> :<span className='m-start'><PlusIcon/></span>}
      </div>
      <div
        className={`flex flex-col overflow-hidden rounded shadow-xl bg-white px-3 text-sm transition-all duration-500 ease-in-out ${
          open ? 'h-[350px]' : 'h-0'
        }`}
      >
        <div className="py-2">
          {content.text.map((tx: any,index:any) => (
            <p key={index} className="mb-1">{tx}</p>
          ))}
        </div>
        {content.inputType === 'button' && (
          <div className='text-center mt-auto mb-4'>
          <NextLink href={content.link} passHref>
            <button className="bg-main py-1.5 px-2 sm:px-3 text-white rounded-md">
              {content.inputText}
            </button>
          </NextLink>
          </div>
        )}
        {content.inputType === 'search' && (
          <div className='mt-auto mb-4 flex flex-col items-center'>
            <span className='text-lg text-main'>{tr('homeAccorSearchText')}</span>
            <p className='text-gray-500 text-xs text-center'>{tr('searchInputText')}</p>
            <span className='text-4xl text-main'><ArrowDown/> </span>
            <span><SearchInput button="yes"/></span>
          </div>
          
        )}
      </div>
    </div>
  )
}

export default Accordion
