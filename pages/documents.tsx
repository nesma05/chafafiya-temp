import type { NextPage } from 'next'
import NextLink from 'next/link'
import DocumentsSection from '../components/documents/DocumentsSection'
import Navbar from '../components/Header/Navbar'
import PageTitle from '../components/PageTitle'


const documentsList = [{
  thumbnail:"/img/document-1.jpg",
  title:'القانون رقم 08 المتعلق بحماية ا|شخاص الذاتي  ا',
  description:'نموذج طلب الحصول على اCعلومات نموذج طلب ا,ذن اCسبق الخاص بمعالجة اCعطيات ذات الطابع الشخصي واCتعلق بتدبير طلبات الحصول على اCعلومات من طرف اCؤسسات والهيئات الخاضعة للقانون 13.31 اCتعلق بالحق في الحصول على اCعلومات',
  url:'/'
},
{
  thumbnail:"/img/document-2.png",
  title:'نموذج طلب اليذن المسبق الخاص بمعالجة المعطيات ذات الطابع الشخصي والمتعلق بتدبير طلبات الحصول على المعلومات من طرف سسات والهيئات الخاضعة للقانون 13.31 المتعلق بالحق في الحصول على المعلومات',
  description:'طلب الحصول على اCعلومات نموذج طلب ا,ذن اCسبق الخاص بمعالجة اCعطيات ذات الطابع الشخصي واCتعلق بتدبير طلبات الحصول على اCعلومات من طرف اCؤسسات والهيئات الخاضعة للقانون 13.31 اCتعلق بالحق في الحصول على اCعلومات',
  url:'/'
},]

const Documents: NextPage = ({ dir }: any) => {
  // const {locale,locales,asPath} = useRouter()
  return (
    <div className='font-arabic' dir={dir}>
      <Navbar />

      <div className="my-10 mx-auto w-[90%]">
        <PageTitle>
          وثائق قانونية وتنظيمية
        </PageTitle>
        <DocumentsSection documentsList={documentsList}/>
      </div>
    </div>
  )
}

export default Documents
