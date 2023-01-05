import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { LangStrings } from '../lang/langStrings'
import axios from 'axios'
import config from '../utils/config'


export default function useTranslation() {
  const { locale, defaultLocale } = useRouter()

  const { envMode } = config

  function tr(key) {
    if (!LangStrings[locale][key]) {
      if (envMode == 'development') console.warn(`No string '${key}' for locale '${locale}'`)
    }

    return (
      LangStrings[locale][key] || LangStrings[defaultLocale][key] || 'No Match'
    )
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

export function useCaptcha() {
  const [img, setImg] = useState('')
  const [captcha, setcaptcha] = useState('')
  const [message, setMessage] = useState('')
  const router = useRouter()

  const handleClick = async (e) => {
    e.preventDefault()
    // const { data } = await axios.post('http://localhost:5000/check', {
    //   captcha,
    // })
    // if (data.message === 'not valide captcha') {
    //   setcaptcha('')
    //   handleCaptcha()
    // }
    // setMessage(data.message)

    router.push('/followReq')
  }

  const handleCaptcha = async () => {
    const { data } = await axios('http://localhost:5000/captcha')
    setImg(data.image)
  }

  useEffect(() => {
    handleCaptcha()
  }, [])

  return { handleClick, handleCaptcha, setcaptcha, img, captcha, message }
}

export function useQuiz(questionsList) {
  const [questions, setQuestions] = useState([])
  const [number, setNumber] = useState(0)
  const [score, setScore] = useState(0)
  const [userAnswers, setUserAnswers] = useState([])
  const [startGame, setStartGame] = useState(false)
  const [qtAnswered, setQtAnswered] = useState(false)

  const handleStart = () => {
    setQuestions(questionsList)
    setStartGame(true)
    setNumber(0)
    setScore(0)
    setQtAnswered(false)
  }

  const checkAnswer = () => {
    setQtAnswered(true)
    if (
      userAnswers.sort().join(',') ===
      questions[number]?.correctAnswers.sort().join(',')
    ) {
      setScore((prev) => prev + 1)
    }
  }

  const nextQuestion = () => {
    const nextQt = number + 1
    setNumber((prev) => prev + 1)
    setQtAnswered(false)
    setUserAnswers([])
  }

  const prevAnswer = () => {
    const nextQt = number + 1
    setNumber((prev) => prev - 1)
    setQtAnswered(false)
    setUserAnswers([])
  }

  const handleChange = (e) => {
    if (e.target.checked) {
      setUserAnswers([...userAnswers, e.target.value])
    } else {
      userAnswers.filter((usrAnswer) => usrAnswer === e.target.value)
    }
  }

  const changeStyle = (answer) => {
    if (qtAnswered)
      return questions[number]?.correctAnswers.includes(answer)
        ? 'text-green-500 font-bold'
        : 'text-red-500 font-bold'
  }
  return {
    handleStart,
    checkAnswer,
    nextQuestion,
    prevAnswer,
    handleChange,
    changeStyle,
    questions,
    number,
    score,
    startGame,
    qtAnswered,
  }
}
