import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { NextIcon, PreviousIcon } from './icons'
import useTranslation from '../utils/customHooks'


const BreadCrumb = () => {
  const { locale, locales, asPath } = useRouter()
  const pathNames = asPath.split('/').filter((el) => el)
  const {tr} = useTranslation()
  console.log('pathNames', pathNames)
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="flex text-sm">
        <li className="mx-1 flex items-center gap-1">
          <NextLink href={'/'} passHref>
            <span className='cursor-pointer hover:underline' >{tr('home')}</span>
          </NextLink>
          <li>{locale === 'ar' ? <PreviousIcon /> : <NextIcon />}</li>
        </li>

        {pathNames.map((name: any, index: any) => {
          const goTo = `/${pathNames.slice(0, index + 1).join('/')}`
          console.log('goTo',goTo)
          const isLast = pathNames.length - 1
          return isLast === index ? (
            <span>{tr(name)}</span>
          ) : (
            <li className="mx-1 flex items-center gap-1">
              <NextLink href={goTo} passHref>
                <span className='cursor-pointer hover:underline'>{tr(name)}</span>
              </NextLink>
              <li>{locale === 'ar' ? <PreviousIcon /> : <NextIcon />}</li>
            </li>
          )
        })}
        {/* <li>{locale === 'ar' ? <PreviousIcon /> : <NextIcon />}</li>
        <NextLink href={'/'} passHref>
          <li className="mx-1">تقديم الطلب</li>
        </NextLink>
        <li>{locale === 'ar' ? <PreviousIcon /> : <NextIcon />}</li>
        <NextLink href={'/'} passHref>
          <li className="mx-1">إيداع الطلب</li>
        </NextLink> */}
      </ol>
    </nav>
  )
}

export default BreadCrumb
