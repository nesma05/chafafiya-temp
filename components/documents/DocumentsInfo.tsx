import Image from 'next/image'

const DocumentInfo = ({ doc, handleClick }: any) => {
  const truncate = (source: any, size: any) => {
    return source.length > size ? source.slice(0, size - 1) + '…' : source
  }
  return (
    <>
      <div
        onClick={handleClick}
        className="h-[350px] w-[250px] cursor-pointer rounded-lg border-2 border-slate-700  p-1 shadow-lg"
      >
        <div className="relative my-1 mx-auto h-[80%] w-[90%]">
          <Image
            src={doc.thumbnail}
            layout="fill"
            objectFit="cover"
            alt="chafafiya image"
            priority
          />
        </div>
        <p className="mb-3 text-center text-sm font-medium text-gray-800">
          {truncate(doc.title, 50)}
        </p>
      </div>
    </>
  )
}

export default DocumentInfo
