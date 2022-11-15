import { useState } from 'react'
import { AttachmentIcon, CloseIcon, SendIcon } from '../icons'
import RespSearchInput from './RespSearchInput'

const ContactColleagues = () => {
  const [files, setFiles] = useState<any>([])

  const handelFileInput = (e: any) => {
    const file = e.target.files[0]
    setFiles([...files, file])
  }

  const handleRemoveFile = (fileName: any) => {
    const filteredFiles = files.filter((file: any) => file.name !== fileName)
    setFiles(filteredFiles)
  }
  return (
    <div>
      <div className="w-full px-2">
        <h2 className="mb-1 font-medium">طلب عناصر إضافية من الزملاء</h2>
        <RespSearchInput />
      </div>
      <div className="mt-4 h-[calc(100vh-330px)] overflow-y-auto px-2">
        <div className="mb-4 w-fit">
          <span>مرسل إلى </span>
          <span>أحمد الوكيلي (رئيس قسم المالية)</span>
          <div className="max-w-md rounded-r-lg rounded-bl-lg bg-main p-3 text-white">
            <p>
              السلام عليكم سيد أحمد، المرجو موافاتي بالتقرير السنوي لميزانية سنة
              2021
            </p>
          </div>
          <span className="text-xs leading-none text-gray-500">
            اليوم 12:30
          </span>
        </div>
        <div className="m-start w-fit">
          <span>أحمد الوكيلي (رئيس قسم المالية)</span>
          <div className="max-w-md rounded-l-lg rounded-br-lg bg-gray-300 p-3">
            <p>
              وعليكم السلام سيد أنس، يمكنك الإطلاع على التقرير السنوي لميزانية
              سنة 2021 لجماعة آيت داوود في الوثيقة أدناه تحياتي
            </p>
          </div>
          <span className="text-xs leading-none text-gray-500">
            اليوم 12:30
          </span>
        </div>
      </div>

      <div className="absolute bottom-0 w-full  border-t-2 px-2">
        <ul className="mb-1">
          {files.map((file: any) => (
            <li
              key={file.name}
              className="m-1 flex w-fit items-center gap-1 rounded-full px-3 underline"
            >
              <span>{file.name}</span>
              <span
                className="cursor-pointer"
                onClick={() => handleRemoveFile(file.name)}
              >
                <CloseIcon />
              </span>
            </li>
          ))}
        </ul>
        <div className='flex items-center gap-2'>
          <label htmlFor="inputFileColl" className="w-fit cursor-pointer">
            <span className="text-xl">
              <AttachmentIcon />
            </span>
            <input
              type="file"
              name=""
              id="inputFileColl"
              className="hidden"
              onChange={handelFileInput}
            />
          </label>

          <textarea
            className="w-full py-2 px-4"
            placeholder="إكتب نص الرسالة هنا ..."
            rows={2}
          ></textarea>

          <button className="text-2xl text-gray-500">
            <SendIcon />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContactColleagues
