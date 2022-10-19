import Image from 'next/image'
import { CloseIcon, DownloadIcon } from '../icons'

const ModalInfo = ({ doc, handleClose, modal }: any) => {
  return (
    <div className={modal ? 'modal open' : 'modal'}>
      {doc && (
        <div
          className={`flex h-[500px] w-[60%] bg-white p-4 transition-all duration-700 ease-in-out ${
            modal ? 'translate-y-0' : '-translate-y-[200px]'
          } `}
        >
          <div className="h-full w-1/2">
            <div className="relative my-1 mx-auto h-[90%] w-[90%]">
              <Image
                src={doc.thumbnail ? doc.thumbnail : '/img/document-1.jpg'}
                layout="fill"
                objectFit="cover"
                alt="chafafiya image"
              />
            </div>
          </div>
          <div className="w-1/2">
            <h3 className="mt-2 mb-4 text-lg font-medium">{doc.title}</h3>
            <p className="mb-4 text-sm font-medium text-gray-700">
              {doc.description}
            </p>
            <button className="flex w-full items-center justify-center gap-3 bg-blue-800 p-2.5 text-xl text-white">
              <span>
                <DownloadIcon />
              </span>
              تحميل
            </button>
          </div>
        </div>
      )}

      <span className="close" onClick={handleClose}>
        <CloseIcon />
      </span>
    </div>
  )
}

export default ModalInfo
