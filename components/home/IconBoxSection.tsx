import {
  BuildingIcon,
  CheckedIcon,
  ClockIcon,
  DocumentIcon,
  SandTimerIcon,
} from '../icons'
import IconBox from './IconBox'

const iconBoxContent = [
  {
    text: 'عدد المؤسسات أو الهيئات المعنية',
    count: '1698',
    color:'bg-main/20 text-main',
    icon: <BuildingIcon />,
  },
  {
    text: 'عدد الطلبات المقدمة',
    count: '4698',
    color:'bg-secondary/30 text-main/70',
    icon: <DocumentIcon />,
  },
  {
    text: 'عدد الطلبات المعالجة',
    count: '3546',
    color:'bg-main/20 text-main',
    icon: <CheckedIcon />,
  },
  {
    text: 'عدد الطلبات في طور المعالجة',
    count: '2685',
    color:'bg-extra/20 text-extra',
    icon: <SandTimerIcon />,
  },
  {
    text: 'متوسط مدة الإجابة',
    count: '71',
    color:'bg-secondary/30 text-main/70',
    icon: <ClockIcon />,
  },
]

const IconBoxSection = () => {
  return (
    <div className="my-[150px]  mx-auto flex w-[80%] flex-wrap gap-2 justify-center">
      {iconBoxContent.map((content: any) => (
        <IconBox
          key={content.text}
          text={content.text}
          count={content.count}
          color={content.color}
          icon={content.icon}
        />
      ))}
    </div>
  )
}

export default IconBoxSection
