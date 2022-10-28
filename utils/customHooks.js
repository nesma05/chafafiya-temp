import { useRouter } from 'next/router'

//import { LanguageContext, defaultLocale } from "../context/langContext"
import { LangStrings } from '../lang/langStrings'

export default function useTranslation() {
  const { locale, defaultLocale } = useRouter()

  function tr(key) {
    if (!LangStrings[locale][key]) {
      console.warn(`No string '${key}' for locale '${locale}'`)
    }

    return LangStrings[locale][key] || LangStrings[defaultLocale][key] || ''
  }

  return { tr, locale }
}
