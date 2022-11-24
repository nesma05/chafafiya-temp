import NextLink from 'next/link'
import type { NextPage } from 'next'
import rows from '../../utils/people.json'
import { requestFollow } from '../../utils/constants'
import ResSideBar from '../../components/responsable/ResSideBar'
import ResDetails from '../../components/responsable/ResDetails'

import SecondaryLayout, {
  PageWithSecondaryLayoutType,
} from '../../components/Layout/SecondaryLayout'
import ResponsableHeader from '../../components/responsable/ResponsableHeader'
import {
  AttachmentIcon,
  CloseIcon,
  CopyIcon,
} from '../../components/icons'
import { useState } from 'react'

const respRequestsMessages: PageWithSecondaryLayoutType = () => {
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
    <div className="text-sm">
      <ResponsableHeader />
      <div className="flex border-t-2 border-b-2 mb-10 h-[calc(100vh-100px)]">
        <div className="px-2 pt-8">
          <div className="flex items-center gap-3 bg-secondary/20 py-2 px-0.5">
            <CopyIcon />
            <p className=" font-bold">
              جميع طلبات مسؤول المعلومات <span className="font-bold">10</span>
            </p>
          </div>
        </div>
        <div className=" flex flex-1 border-r-2">
          <div className=' overflow-y-scroll'>
            <div className="border-b-2 px-2 pt-4 pb-8">
              <p className="text-lg font-bold">
                طلبات مسؤول المعلومات :<span className="font-bold"> 10</span>
              </p>
            </div>
            <div>
              <div className="w-[250px] border-b-2 px-2 pb-2">
                <div className="flex justify-between py-4">
                  <h4 className="font-bold">المهدي هرموش</h4>
                  <span className="text-gray-500">1 شتنبر</span>
                </div>
                <p className="font-bold">
                  اسم الشخص المكلف بتلقي طلبات الحصول غلى المعلومات بمديرية
                  الملاحة التجارية ةالنقل و اللوجستيك
                </p>
              </div>
              <div className="w-[250px] border-b-2 pb-2">
                <div className="flex justify-between px-2 py-4">
                  <h4 className="font-bold">المهدي هرموش</h4>
                  <span className="text-gray-500">1 شتنبر</span>
                </div>
                <p className="font-bold">
                  اسم الشخص المكلف بتلقي طلبات الحصول غلى المعلومات بمديرية
                  الملاحة التجارية ةالنقل و اللوجستيك
                </p>
              </div>
              <div className="w-[250px] border-b-2 pb-2">
                <div className="flex justify-between px-2 py-4">
                  <h4 className="font-bold">المهدي هرموش</h4>
                  <span className="text-gray-500">1 شتنبر</span>
                </div>
                <p>
                  اسم الشخص المكلف بتلقي طلبات الحصول غلى المعلومات بمديرية
                  الملاحة التجارية ةالنقل و اللوجستيك
                </p>
              </div>
              <div className="w-[250px] border-b-2 pb-2">
                <div className="flex justify-between px-2 py-4">
                  <h4 className="font-bold">المهدي هرموش</h4>
                  <span className="text-gray-500">1 شتنبر</span>
                </div>
                <p>
                  اسم الشخص المكلف بتلقي طلبات الحصول غلى المعلومات بمديرية
                  الملاحة التجارية ةالنقل و اللوجستيك
                </p>
              </div>
              <div className="w-[250px] border-b-2 pb-2">
                <div className="flex justify-between px-2 py-4">
                  <h4 className="font-bold">المهدي هرموش</h4>
                  <span className="text-gray-500">1 شتنبر</span>
                </div>
                <p>
                  اسم الشخص المكلف بتلقي طلبات الحصول غلى المعلومات بمديرية
                  الملاحة التجارية ةالنقل و اللوجستيك
                </p>
              </div>
              <div className="w-[250px] border-b-2 pb-2">
                <div className="flex justify-between px-2 py-4">
                  <h4 className="font-bold">المهدي هرموش</h4>
                  <span className="text-gray-500">1 شتنبر</span>
                </div>
                <p>
                  اسم الشخص المكلف بتلقي طلبات الحصول غلى المعلومات بمديرية
                  الملاحة التجارية ةالنقل و اللوجستيك
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 border-r-2">
            <div className="h-full relative">
              <div className="overflow-y-auto p-2">
                <div className="mb-4 w-fit">
                  <div className="max-w-md rounded-r-lg rounded-bl-lg bg-secondary/20 p-3">
                    <p>
                      السلام عليكم سيد أحمد، المرجو موافاتي بالتقرير السنوي
                      لميزانية سنة 2021
                    </p>
                  </div>
                  <span className="text-xs leading-none text-gray-500">
                    13 شتنبر 2022 الساعة 12:42
                  </span>
                </div>
                <div className="m-start w-fit">
                  <div className="max-w-md rounded-l-lg rounded-br-lg bg-gray-200 p-3">
                    <p>
                      وعليكم السلام سيد أنس، يمكنك الإطلاع على التقرير السنوي
                      لميزانية سنة 2021 لجماعة آيت داوود في الوثيقة أدناه تحياتي
                    </p>
                  </div>
                  <span className="text-xs leading-none text-gray-500">
                    14 شتنبر 2022 الساعة 12:42
                  </span>
                </div>
                
              </div>
              <div className="absolute bottom-0 w-full border-t-2">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default respRequestsMessages

respRequestsMessages.getLayout = SecondaryLayout
