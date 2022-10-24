import { NextPage } from 'next'
import FormContainer from '../components/request/FormContainer'
import AdministrationSection from '../components/request/AdministrationSection'
import RequestTypeSection from '../components/request/RequestTypeSection'
import PersonalInfoSection from '../components/request/PersonalInfoSection'
import RequesterSection from '../components/request/RequesterSection'
import RequestedInfoSection from '../components/request/RequestedInfoSection'
import FormContext from '../context/formContext'
import Navbar from '../components/Header/Navbar'

const Request: NextPage = ({ dir }: any) => {
  return (
    <div dir={dir}>
      <Navbar />
      <FormContext>
        <FormContainer dir={dir} title={'إيداع طلب الحصول على المعلومات'}>
          <AdministrationSection />
          <RequestTypeSection />
          <PersonalInfoSection />
          <RequesterSection />
          <RequestedInfoSection />
          <div>
            <button className="mt-4 w-fit rounded-md bg-cyan-600 px-12 py-2 text-lg text-white">
              إرسال
            </button>
          </div>
        </FormContainer>
      </FormContext>
    </div>
  )
}

export default Request
