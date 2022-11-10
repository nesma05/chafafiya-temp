import React from 'react'
import DomainsDetails from './DomainsDetails'
import FormSection from './FormSection'
import SectionTitle from './SectionTitle'

const DomainsSection = () => {
  return (
    <FormSection>
      <SectionTitle title={'المجالات'} />
      <DomainsDetails />
    </FormSection>
  )
}

export default DomainsSection
