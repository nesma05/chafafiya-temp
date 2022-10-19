import { boxContent } from '../../utils/constants'
import Box from './Box'

const BoxSection = () => {
  return (
    <div className="flex flex-wrap justify-center gap-2 w-[80%] my-6 mx-auto">
      {boxContent.map((box: any) => (
        <Box key={box.title} title={box.title} text={box.text} link={box.link} />
      ))}
    </div>
  )
}

export default BoxSection
