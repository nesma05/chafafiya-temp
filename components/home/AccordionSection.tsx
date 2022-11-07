import { CalendarIcon, DocumentIcon, ResearchIcon } from '../icons'
import Accordion from './Accordion'
import SubTitle from './SubTitle'

const accordionContent = [
  {
    title: 'ابحث عن المعلومة قبل تقديم الطلب',
    link: '/',
    text: [
      'قبل إيداع طلبك للحصول على المعلومات يرجى الإطلاع على المعلومات المرغوب فيها إما:',
      '• عبر بوابة النشر الإستباقي للمعلومات',
      '• أو عبر المواقع الخدماتية التي توفر هذه المعلومات',
      '• أو عبر مواقع المؤسسات والهيئات',
    ],
    icon: <ResearchIcon />,
    inputText: 'تقديم الطلب',
    inputType: 'search',
  },
  {
    title: 'تقديم الطلب',
    link: '/',
    text: [
      'قبل إيداع طلبك للحصول على المعلومات يرجى الإطلاع على المعلومات المرغوب فيها إما:',
      '• عبر بوابة النشر الإستباقي للمعلومات',
      '• أو عبر المواقع الخدماتية التي توفر هذه المعلومات',
      '• أو عبر مواقع المؤسسات والهيئات',
    ],
    icon: <DocumentIcon />,
    inputText: 'تقديم الطلب',
    inputType: 'button',
  },
  {
    title: 'تتبع وضعية طلبك أو قدم شكاية حول طلبك',
    link: '/',
    text: [
      'ستقوم المؤسسة أو الهيئة المعنية بدراسة طلبك والرد عليه داخل الآجال المحددة قانونيا،',
      'تمكنك البوابة من تتبع طلبك،',
      'وفي حالة عدم الرضى عن الإجابة أو عدم الرد داخل الآجال يمكنك تقديم شكاية',
    ],
    icon: <CalendarIcon />,
    inputText: 'تتبع وضعية الطلب',
    inputType: 'button',
  },
]

const AccordionSection = () => {
  return (
    <div className="mx-auto my-20 flex w-[80%] flex-wrap justify-between gap-2.5">
      <SubTitle>قم بالبحث وحدد ما إذا كنت بحاجة إلى تقديم طلب</SubTitle>
      {accordionContent.map((content: any) => (
        <Accordion key={content.title} content={content} />
      ))}
    </div>
  )
}

export default AccordionSection
