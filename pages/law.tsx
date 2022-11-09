import { NextPage } from 'next'
import IllustrationsSection from '../components/law/IllustrationsSection'
import SubTitle from '../components/home/SubTitle'
import Footer from '../components/Layout/Footer'
import Navbar from '../components/Layout/Header/Navbar'
import PageTitle from '../components/Layout/PageTitle'
import { lawList } from '../utils/constants'
import { illustrationsList } from '../utils/constants'
import { videosList } from '../utils/constants'
import QuestionAnswer from '../components/law/QuestionAnswer'

const Law: NextPage = () => {
  return (
    <div>
      <PageTitle>
        ما هو القانون رقم 13-31 المتعلق بالحق في الحصول على المعلومات؟
      </PageTitle>
      <div className="m-auto my-20 w-[80%]">
        <div className="overflow-hidden rounded-t-xl border">
          {lawList.map((list: any) => (
            <QuestionAnswer key={list.id} term={list} color={'gray-700'} />
          ))}
        </div>
        <div className="mt-14 px-1">
          <SubTitle>رسوم بيانية</SubTitle>
          <IllustrationsSection
            illustrationsList={illustrationsList}
            type="image"
          />
        </div>
        <div className="mt-14 px-1">
          <SubTitle>مقاطع مرئية</SubTitle>
          <IllustrationsSection illustrationsList={videosList} type="video" />
        </div>
      </div>
    </div>
  )
}

export default Law
