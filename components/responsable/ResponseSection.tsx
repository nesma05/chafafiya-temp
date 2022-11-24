import { AttachmentIcon, CloseIcon } from '../../components/icons'
import { useState } from 'react'

const ResponseSection = () => {
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
    <div className="absolute bottom-0 w-full border-t-2">
      <div className="flex gap-2 bg-[#eff6fc]">
        <select className="my-2 block bg-white bg-transparent p-2 text-gray-600 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500">
          <option> -- اختيار -- </option>
          <option> تمديد مدة المعالجة</option>
          <option> رفض الطلب </option>
          <option> قبول الطلب </option>
          <option>قبول جزئي للطلب </option>
        </select>
        <select className="my-2 block bg-white bg-transparent p-2 text-gray-600 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500">
          <option> -- اختيار -- </option>
          <option>المعلومات المطلوبة منشورة ومتاحة للعموم</option>
          <option>أسباب الرفض أو التمديد</option>
        </select>
      </div>
      <textarea
        className="w-full py-2 px-4"
        placeholder="نص الرد على الطلب"
        rows={4}
      ></textarea>
      <div className="bg-gray-200 p-1.5">
        <div className="flex justify-between">
          <label
            htmlFor="inputFileResp"
            className="flex w-fit cursor-pointer items-center gap-2"
          >
            <span className="text-xl">
              <AttachmentIcon />
            </span>
            <span>إضافة مرفقات</span>
            <input
              type="file"
              name=""
              id="inputFileResp"
              className="hidden"
              onChange={handelFileInput}
            />
          </label>
          <button className="rounded-md bg-main py-1 px-2 text-white">
            إرسال الإجابة
          </button>
        </div>
        <ul>
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
      </div>
    </div>
  )
}

export default ResponseSection
