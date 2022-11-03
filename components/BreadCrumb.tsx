import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { NextIcon, PreviousIcon } from './icons'
import useTranslation from '../utils/customHooks'

const BreadCrumb = () => {
  const { locale, asPath } = useRouter()
  console.log('aspath', asPath)
  const pathNames = asPath.includes('?')
    ? asPath
        .split('/')
        .filter((el) => el)
        .join('')
        .split('?')
        .filter((el, index) => index === 0)
    : asPath.split('/').filter((el) => el)

  const { tr } = useTranslation()
  console.log('pathNames', pathNames)
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="flex text-sm">
        <li className="mx-1 flex items-center gap-1">
          <NextLink href={'/'} passHref>
            <span className="cursor-pointer hover:underline">{tr('home')}</span>
          </NextLink>
          <span>{locale === 'ar' ? <PreviousIcon /> : <NextIcon />}</span>
        </li>

        {pathNames.map((name: any, index: any) => {
          const goTo = `/${pathNames.slice(0, index + 1).join('/')}`
          console.log('goTo', goTo)
          const isLast = pathNames.length - 1
          return isLast === index ? (
            <span key={index}>{tr(name)}</span>
          ) : (
            <li key={index} className="mx-1 flex items-center gap-1">
              <NextLink href={goTo} passHref>
                <span className="cursor-pointer hover:underline">
                  {tr(name)}
                </span>
              </NextLink>
              <span>{locale === 'ar' ? <PreviousIcon /> : <NextIcon />}</span>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export default BreadCrumb
