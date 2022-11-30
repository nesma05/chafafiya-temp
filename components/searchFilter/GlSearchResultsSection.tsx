import { useEffect } from 'react'
import { InfoState } from '../../context/filterContext'
import GlSearchResults from './GlSearchResults'
import SearchInput from './SearchInput'

const GlSearcHResultsSection = ({ toggleIndex, router, results }: any) => {
  
 
  return (
    <div
      className={` ${
        toggleIndex === 2 ? 'visible block' : 'invisible hidden'
      }`}
    >
      <div className="my-8 mx-10 w-[80%] space-y-4">
        <SearchInput button="yes" />
      </div>
      <div className='my-8 mx-10 max-w-xl space-y-4'>
      {router.asPath.includes('institWebsites') ? <GlSearchResults results={results}/> : <div>لا توجد أي نتائج للبحث</div>}
      </div>
     
    </div>
  )
}

export default GlSearcHResultsSection
