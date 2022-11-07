import type { NextPage } from 'next'
import DocumentsSection from '../components/documents/DocumentsSection'
import Footer from '../components/Layout/Footer'
import Navbar from '../components/Layout/Header/Navbar'
import PageTitle from '../components/Layout/PageTitle'
import { documentsList } from '../utils/constants'


const Documents: NextPage = ({ dir }: any) => {
  // const {locale,locales,asPath} = useRouter()
  return (
    <div className="font-arabic" dir={dir}>
      <Navbar />
      <PageTitle>وثائق قانونية وتنظيمية</PageTitle>
      <div className="my-10 mx-auto w-[90%]">
        <DocumentsSection documentsList={documentsList} />
      </div>
      <Footer />
    </div>
  )
}

export default Documents
