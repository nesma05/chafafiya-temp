import SectionTitle from './SectionTitle'
import AdministrationDetails from './AdministrationDetails'
import FormSection from './FormSection'
import useTranslation from '../../utils/customHooks'

function AdministrationSection() {
  const {tr} = useTranslation()
  return (
    <FormSection>
      <SectionTitle title={tr('administration')} subTilte={"المؤسسة أو الهيئة الموجه إليها طلب الحصول على المعلومات"}/>
      <AdministrationDetails/>
    </FormSection>
  )
}

export default AdministrationSection
