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

const Law: NextPage = ({ dir }: any) => {
  return (
    <div className="font-arabic" dir={dir}>
      <Navbar />
      <PageTitle>
        ما هو القانون رقم 13-31 المتعلق بالحق في الحصول على المعلومات؟
      </PageTitle>
      <div className="m-auto my-20 w-[80%]">
        <div className='border rounded-t-xl overflow-hidden'>
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
      <Footer />
    </div>
  )
}

export default Law
