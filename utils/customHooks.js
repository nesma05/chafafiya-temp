import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { LangStrings } from '../lang/langStrings'

export default function useTranslation() {
  const { locale, defaultLocale } = useRouter()

  function tr(key) {
    if (!LangStrings[locale][key]) {
      console.warn(`No string '${key}' for locale '${locale}'`)
    }

    return LangStrings[locale][key] || LangStrings[defaultLocale][key] || 'No Match'
  }

  return { tr, locale }
}

export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => {
      const el = ref?.current

      if (!el || el.contains(e.target)) {
        return
      }

      handler(e)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  })
}
