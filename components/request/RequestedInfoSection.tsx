import SectionTitle from './SectionTitle'
import FormSection from './FormSection'
import RequestedInfoDetails from './RequestedInfoDetails'

function RequestedInfoSection() {
  return (
    <FormSection>
      <SectionTitle title={'المعلومات المطلوبة'} />
      <RequestedInfoDetails/>
    </FormSection>
  )
}

export default RequestedInfoSection