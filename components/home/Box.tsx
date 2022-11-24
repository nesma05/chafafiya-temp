import NextLink from 'next/link'
import useTranslation from '../../utils/customHooks'


const Box = ({ title, text, link }: any) => {
  const { tr } = useTranslation()
  return (
    <div className="flex w-full sm:w-[220px] cursor-pointer flex-col gap-2 rounded-lg bg-white p-6 shadow-xl">
      <h5 className=" text-md font-semibold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="mb-3 flex-1 text-xs font-normal text-gray-500">{text}</p>
      <NextLink href={link} passHref>
        <span className="text-sm text-main hover:underline">
          {tr('heroBoxLink')}
        </span>
      </NextLink>
    </div>
  )
}

export default Box
