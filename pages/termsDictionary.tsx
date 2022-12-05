import { NextPage } from 'next'
import { useRef } from 'react'
import PageTitle from '../components/Layout/PageTitle'
import DictionnaryTerms from '../components/terms/DictionnaryTerms'
import { dictionaryList } from '../utils/constants'
const TermsDictionary: NextPage = () => {
  const refs = dictionaryList.reduce((acc, value) => {
    acc[value.letter] = useRef()
    return acc
  }, {} as any)

  const handleClick = (letter: any) =>{
    //const element = refs[letter].getBoundingClientRect().top + window.pageYOffset -10;
    window.scrollTo({
        top: refs[letter].current.offsetTop - 80,
        behavior: 'smooth',
      });
  }
 
    
  return (
    <>
      <PageTitle>قاموس/ مصطلحات</PageTitle>
      <div className="mx-auto my-20 w-[80%]">
        <div className="mb-8 flex flex-wrap">
          {dictionaryList.map((dict: any, index: any) => (
            <span
              key={index}
              className="m-1 p-1.5 cursor-pointer"
              onClick={() => handleClick(dict.letter)}
            >
              {dict.letter}
            </span>
          ))}
        </div>
        {dictionaryList.map((dict: any, index: any) => (
          <DictionnaryTerms
            key={dict.letter}
            letter={dict.letter}
            termsList={dict.termsList}
            count={true}
            ref={refs[dict.letter]}
          />
        ))}
      </div>
    </>
  )
}

export default TermsDictionary
