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
        <ul className="mb-8 flex flex-wrap">
          {dictionaryList.map((dict: any, index: any) => dict.termsList.length > 0 && (
            <li
              key={index}
              className="m-1 py-0.5 w-8 text-center cursor-pointer border text-main border-main"
              onClick={() => handleClick(dict.letter)}
            >
              <span>{dict.letter}</span>
              
            </li>
          ))}
        </ul>
        {dictionaryList.map((dict: any) => (
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
