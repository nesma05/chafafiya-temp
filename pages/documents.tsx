import type { NextPage } from 'next'
import DocumentsSection from '../components/documents/DocumentsSection'
import PageTitle from '../components/Layout/PageTitle'
import { documentsList } from '../utils/constants'

const Documents: NextPage = () => {

  return (
    <div>
      <PageTitle>وثائق قانونية وتنظيمية</PageTitle>
      <div className="my-10 mx-auto w-[90%]">
        <DocumentsSection documentsList={documentsList} />
      </div>
    </div>
  )
}

export default Documents
