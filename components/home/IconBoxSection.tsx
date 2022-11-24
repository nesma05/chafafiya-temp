import {
  BuildingIcon,
  CheckedIcon,
  ClockIcon,
  DocumentIcon,
  SandTimerIcon,
} from '../icons'
import IconBox from './IconBox'
import useTranslation from '../../utils/customHooks'
import { boxContent } from '../../utils/constants'

const extraIconBoxContent = [
  {
    color: 'bg-main/20 text-main',
    icon: <BuildingIcon />,
  },
  {
    color: 'bg-secondary/30 text-main/70',
    icon: <DocumentIcon />,
  },
  {
    color: 'bg-main/20 text-main',
    icon: <CheckedIcon />,
  },
  {
    color: 'bg-extra/20 text-extra',
    icon: <SandTimerIcon />,
  },
  {
    color: 'bg-secondary/30 text-main/70',
    icon: <ClockIcon />,
  },
]

const IconBoxSection = () => {
  const { tr } = useTranslation()
 const iconBoxContent = tr('iconBoxContent').map((content:any,index:any)=>{
  return {...content, color:extraIconBoxContent[index].color,icon:extraIconBoxContent[index].icon}
 })

  return (
    <div className="my-[150px] mx-auto flex w-[80%] flex-wrap justify-center gap-2">
      {iconBoxContent.map((content: any,index:any) => (
        <IconBox
          key={index}
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
