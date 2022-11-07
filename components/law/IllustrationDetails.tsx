import Image from 'next/image'

const PictureDetails = ({ doc, handleClick }: any) => {
  return (
    <div
      onClick={handleClick}
      className="h-[220px] w-[300px] cursor-pointer rounded-lg p-1 shadow-xl"
    >
      <div className="relative my-1 mx-auto h-[100%] w-[100%]">
        <Image
          src={doc.thumbnail}
          layout="fill"
          objectFit="contain"
          alt="chafafiya document"
          priority
        />
      </div>
      <p className="mt-3 text-center text-sm font-bold text-gray-800">
        {doc.title}
      </p>
    </div>
  )
}

export default PictureDetails
