import Link from 'next/link'
import { useRouter } from 'next/router'
import { NextIcon, PreviousIcon } from '../icons'

const GlPagination = () => {
  const router = useRouter()
  const startIndex = Number(router.query.start) || 0
  const term = router.query.term
  

  return (
    <div className="m-4 flex justify-around font-medium text-blue-800">
      {startIndex >= 10 && (
        <Link href={`/searchengine?term=${term}&start=${startIndex - 10}`}>
          <div className="flex cursor-pointer flex-col items-center">
          {router.locale==='ar' ?  <NextIcon/>: <PreviousIcon/>}
            <p>{router.locale==='ar' ?  'السابق': 'Précedent'}</p>
          </div>
        </Link>
      )}
      <Link href={`/searchengine?term=${term}&start=${startIndex + 10}`}>
        <div className="flex cursor-pointer flex-col items-center">
          
          {router.locale==='ar' ?  <PreviousIcon/>: <NextIcon/>}
          <p>{router.locale==='ar' ?  'التالي': 'Suivant'}</p>
        </div>
      </Link>
    </div>
  )
}

export default GlPagination
