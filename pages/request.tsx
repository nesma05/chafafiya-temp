import { NextPage } from 'next'
import FormContainer from '../components/request/FormContainer'
import AdministrationSection from '../components/request/AdministrationSection'
import RequestTypeSection from '../components/request/RequestTypeSection'
import PersonalInfoSection from '../components/request/PersonalInfoSection'
import RequesterSection from '../components/request/RequesterSection'
import RequestedInfoSection from '../components/request/RequestedInfoSection'
import FormContext from '../context/formContext'
import DomainsSection from '../components/request/DomainsSection'

const Request: NextPage = () => {
  return (
  
      <FormContext>
        <FormContainer title={'إيداع طلب الحصول على المعلومات'}>
          <AdministrationSection />
          <RequestTypeSection />
          <DomainsSection/>
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
 
  )
}

export default Request
