import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { NextIcon, PreviousIcon } from './icons'

const BreadCrumb = () => {
  const { locale, locales, asPath } = useRouter()
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="flex text-sm">
        <NextLink href={'/'} passHref>
          <li className="mx-1">الرئيسية</li>
        </NextLink>
        <li>{locale === 'ar' ? <PreviousIcon /> : <NextIcon />}</li>
        <NextLink href={'/'} passHref>
          <li className="mx-1">تقديم الطلب</li>
        </NextLink>
        <li>{locale === 'ar' ? <PreviousIcon /> : <NextIcon />}</li>
        <NextLink href={'/'} passHref>
          <li className="mx-1">إيداع الطلب</li>
        </NextLink>
      </ol>
    </nav>
  )
}

export default BreadCrumb
