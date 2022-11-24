import { boxContent } from '../../utils/constants'
import Box from './Box'
import useTranslation from '../../utils/customHooks'


const BoxSection = () => {
  const { tr } = useTranslation()
  return (
    <div className="flex flex-wrap justify-center gap-2 w-[80%] my-6 mx-auto">
      {tr('boxContent').map((box: any,index:any) => (
        <Box key={index} title={box.title} text={box.text} link={box.link} />
      ))}
    </div>
  )
}

export default BoxSection
