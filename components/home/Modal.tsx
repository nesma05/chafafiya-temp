import { CloseIcon } from '../icons'
import dynamic from 'next/dynamic'
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })
import 'react-quill/dist/quill.snow.css'

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image', 'video'],
    ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
}

// Formats objects for setting up the Quill editor


const Modal = ({ tempSource, handleClose, modal, type }: any) => {
  return (
    <div className={modal ? 'modal open' : 'modal'}>
      {type === 'image' && (
        <img src={tempSource} className=" h-auto w-4/6 sm:w-3/6" />
      )}
      {type === 'video' && (
        <iframe
          width="560"
          height="315"
          src={tempSource}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      )}
      {type === 'respQuesAns' && (
        <div className="sm:w-6/6 flex h-[90%] w-5/6 items-start py-4 bg-white rounded-lg">
          <div className="mx-auto w-[95%]">
            <div>
              <label>نص السؤال:</label>
              <input
                className="text-md mt-1 w-full rounded-md border border-gray-300 p-3 text-sm text-gray-600 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500"
                name="firstname"
                type="text"
              />
            </div>
            <div className='mt-12'>
              <label className='mb-1 inline-block'>نص الجواب:</label>
              <ReactQuill modules={modules}  theme="snow"/>
            </div>
          </div>
        </div>
      )}
      <span className="close" onClick={handleClose}>
        <CloseIcon />
      </span>
    </div>
  )
}

export default Modal
