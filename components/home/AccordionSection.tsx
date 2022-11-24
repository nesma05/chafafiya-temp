import { CalendarIcon, DocumentIcon, ResearchIcon } from '../icons'
import Accordion from './Accordion'
import SubTitle from './SubTitle'
import useTranslation from '../../utils/customHooks'

const accordionIcons = [
  {
    icon: <ResearchIcon />,
  },
  {
    icon: <DocumentIcon />,
  },
  {
    icon: <CalendarIcon />,
  },
]

const AccordionSection = () => {
  const { tr } = useTranslation()

  const accordionContent = tr('accordionContent').map((content:any,index:any)=>{
    return {...content, icon:accordionIcons[index].icon}
   })

  return (
    <div className="mx-auto my-20 flex w-[80%] flex-wrap justify-between gap-2.5">
      <SubTitle>{tr('heroAccorTitle')}</SubTitle>
      {accordionContent.map((content: any,index:any) => (
        <Accordion key={index} content={content} />
      ))}
    </div>
  )
}

export default AccordionSection
