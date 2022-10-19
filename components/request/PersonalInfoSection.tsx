import useTranslation from '../../utils/customHooks'
import FormSection from './FormSection'
import PersonalInfoDetails from './PersonalInfoDetails'
import SectionTitle from './SectionTitle'

function PersonalInfoSection() {
  const {tr} = useTranslation()
  return (
    <FormSection>
      <SectionTitle title={tr('infoPerso')}/>
      <PersonalInfoDetails/>
     </FormSection>
  )
}

export default PersonalInfoSection