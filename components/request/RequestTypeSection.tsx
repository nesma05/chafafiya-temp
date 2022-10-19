import useTranslation from '../../utils/customHooks'
import FormSection from './FormSection'
import RequestTypeDetails from './RequestTypeDetails'
import SectionTitle from './SectionTitle'

function RequestTypeSection() {
    const {tr} = useTranslation()
    return (
      <FormSection>
        <SectionTitle title={tr('type')}/>
        <RequestTypeDetails/>
      </FormSection>
    )
}

export default RequestTypeSection