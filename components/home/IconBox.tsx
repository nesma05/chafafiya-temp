
const IconBox = ({ text, icon, count,color }: any) => {
  return (
    <div className={`w-full sm:w-[45%] lg:w-[194px] p-2 ${color} text-center rounded-lg`}>
      <div className='text-2xl flex items-center justify-center gap-2 font-extrabold'>
        {icon}
        <span className=''>{count}</span>
      </div>
      <p className="mb-3 text-xs font-medium">{text}</p>
    </div>
  )
}

export default IconBox
