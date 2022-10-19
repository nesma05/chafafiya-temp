import FormSection from "./FormSection"
import RequesterDetails from "./RequesterDetails"
import SectionTitle from "./SectionTitle"

function RequesterSection() {
    return (
        <FormSection>
          <SectionTitle title={'صاحب(ة) الطلب'}/>
          <RequesterDetails/>
         </FormSection>
      )
}

export default RequesterSection