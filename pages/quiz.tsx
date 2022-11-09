import type { NextPage } from 'next'
import { useState } from 'react'
import Footer from '../components/Layout/Footer'
import Navbar from '../components/Layout/Header/Navbar'
import { NoteIcon } from '../components/icons'
import PageTitle from '../components/Layout/PageTitle'

const questionsList = [
  {
    question: 'هل يمكن إعادة استعمال المعلومات؟',
    answers: [
      { ansrId: 'an01', answer: 'لا يمكن' },
      { ansrId: 'an02', answer: 'يمكن' },
    ],
    correctAnswers: ['an02'],
    note: 'يمكن إعادة استعمال المعلومات بشرط :',
  },
  {
    question: 'كم هي مدة عضوية لجنة الحق في الحصول على المعلومات؟',
    answers: [
      { ansrId: 'an03', answer: 'خمس سنوات قابلة للتجديد مرتين' },
      { ansrId: 'an04', answer: 'ثلاث سنوات قابلة للتجديد مرة واحدة' },
      { ansrId: 'an05', answer: 'خمس سنوات قابلة للتجديد مرة واحدة' },
    ],
    correctAnswers: ['an03', 'an05'],
    note: 'يمكن إعادة تجديد العضوية بشرط :',
  },
  {
    question: 'كم عدد الجماعات الحضرية في المغرب؟',
    answers: [
      { ansrId: 'an06', answer: '321' },
      { ansrId: 'an07', answer: '221' },
      { ansrId: 'an08', answer: '421' },
    ],
    correctAnswers: ['an06', 'an07'],
    note: 'مجموع الجماعات بالمغرب 1503',
  },
]

type QuastionState = {
  question: string
  answers: object[]
  correctAnswers: string[]
  note: string
}

const TL_QST = 3

const Home: NextPage = () => {
  // const {locale,locales,asPath} = useRouter()
  const [questions, setQuestions] = useState<QuastionState[]>([])
  const [number, setNumber] = useState(0)
  const [score, setScore] = useState(0)
  const [userAnswers, setUserAnswers] = useState<string[]>([])
  const [startGame, setStartGame] = useState(false)
  const [qtAnswered, setQtAnswered] = useState(false)

  console.log('userAnswers', userAnswers)
  console.log('score', score)

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
    setNumber(nextQt)
    setQtAnswered(false)
    setUserAnswers([])
  }

  const handleChange = (e: any) => {
    if (e.target.checked) {
      setUserAnswers([...userAnswers, e.target.value])
    } else {
      userAnswers.filter((usrAnswer: any) => usrAnswer === e.target.value)
    }
  }

  const changeStyle = (answer: any) => {
    if (qtAnswered)
      return questions[number]?.correctAnswers.includes(answer)
        ? 'text-green-500'
        : 'text-red-500'
  }

  return (
    <div>
      
      <PageTitle>
        ما مقدار معرفتك بالقانون 13-31 المتعلق بالحق في الحصول على المعلومات؟
      </PageTitle>
      <div className=" mt-[120px] mb-20 ">
        <div className="my-4 mx-auto w-[60%] text-center">
          <p className="my-10 font-medium text-gray-700">
            يعتبر حق الحصول على اCعلومات حقا من الحقوق والحريات اfساسية التي نص
            عليها الدستور الصادر بتنفيذه الظهير الشريف رقم 91.11.1 بتاريخ 29
            يوليوز 2011 ،و6سيما الفصل 27 منه. إن تكريس هذا الحق يأتي ليؤكد
            ا6لتزام الدائم للمملكة اCغربية بحقوق ا,نسان كما هي متعارف عليها
          </p>
          {!startGame && (
            <button
              onClick={handleStart}
              className="rounded-full border-2 border-slate-700 py-1.5 px-6 font-medium"
            >
              ابدأ الإختبار
            </button>
          )}
        </div>
        {startGame && (
          <div className="mx-auto w-[40%] font-medium">
            <div className="border-2 border-slate-700 p-3">
              <p>السؤال {number + 1} من 3</p>
              <p>{questions[number]?.question}</p>
            </div>
            <div className="p-3">
              {questions[number]?.answers.map((qtAnswer: any) => (
                <div key={qtAnswer.ansrId} className="mb-2">
                  <input
                    type="checkbox"
                    value={qtAnswer.ansrId}
                    onChange={handleChange}
                  />
                  <label className={`mx-2 ${changeStyle(qtAnswer.ansrId)}`}>
                    {qtAnswer.answer}
                  </label>
                </div>
              ))}
              {qtAnswered && startGame && (
                <div className="flex w-fit gap-2 bg-blue-400 p-2">
                  <span className="text-2xl">
                    <NoteIcon />
                  </span>
                  <p>{questions[number]?.note}</p>
                </div>
              )}
            </div>
            <div className="text-center">
              {!qtAnswered && startGame && (
                <button
                  className="rounded-full border-2 border-slate-700 py-1.5 px-6 font-medium"
                  onClick={checkAnswer}
                >
                  تأكيد الجواب
                </button>
              )}
              {qtAnswered && startGame && !(TL_QST - number === 1) && (
                <button
                  className="rounded-full border-2 border-slate-700 py-1.5 px-6 font-medium"
                  onClick={nextQuestion}
                >
                  {' '}
                  السؤال التالي
                </button>
              )}
              {qtAnswered && TL_QST - number === 1 && (
                <div className="mx-auto w-full text-center">
                  <p className="font-medium">
                    انتهى الإختبار! حصلت على {score} إجابة صحيحة من أصل {TL_QST}
                  </p>
                  <button
                    onClick={handleStart}
                    className="rounded-full border-2 border-slate-700 py-1.5 px-6 font-medium"
                  >
                    ابدأ الإختبار من جديد
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
   
    </div>
  )
}

export default Home
