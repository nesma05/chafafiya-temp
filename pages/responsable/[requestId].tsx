import { NextPage } from 'next'
import Image from 'next/image'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { useEffect, useState } from 'react'
import { AttachmentIcon, AvatarIcon, CopyIcon, SearchIcon } from '../../components/icons'
import ConverHistory from '../../components/responsable/ConverHistory'
import { responsableList } from '../../components/responsable/ResSideBar'
import TimeStamp from '../../components/responsable/TimeStamp'
import { requester } from '../../utils/constants'
import { requestFollow } from '../../utils/constants'

const ResRequest: NextPage = ({ request}: any) => {
  const { query } = useRouter()
  console.log('query', query)

  return (
    <div dir="rtl">
      <header className="px-10 py-4">
        <div className="flex items-center justify-between">
          <NextLink href={'/'} passHref>
            <Image
              src={'/img/chafafiya-logo.png'}
              width={220}
              height={70}
              className="cursor-pointer"
              alt="website logo"
            />
          </NextLink>
          <div className="flex items-center">
            <span>الإدارة: </span>
            <span>المسؤول عن المعلومات</span>
            <span className="mx-4 rounded-full bg-cyan-500 text-4xl text-white">
              <AvatarIcon />
            </span>
          </div>
        </div>
      </header>
      <div className="flex border-t-2 ">
        <div className="h-[700px] w-[70px] border-l-2 border-gray-300">
          <div className="pt-20">
            <ul>
              <li className={`flex w-full cursor-pointer items-center p-2 `}>
                <span className="mx-3 border-2 border-black p-0.5">
                  <CopyIcon />
                </span>
              </li>
              {responsableList.map((resList: any, i: any) => (
                <li
                  key={i}
                  className={`flex w-full cursor-pointer items-center p-2 `}
                >
                  <span className="mx-3  border-2 border-black p-0.5">
                    {resList.icon}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex-1">
          <div className="p-6 cursor-pointer">
            <NextLink href={'/responsable'} passHref>
              <p>الرجوع إلى لائحة الطلبات</p>
            </NextLink>
          </div>
          <div className="flex w-full border-t-2">
            <div className="w-[300px] border-l-2">
              <div className="flex flex-col gap-3 border-b-2 p-4">
                <h2 className="font-medium">صاحب(ة) الطلب</h2>
                <p className="flex items-center gap-3">
                  <span>
                    <AvatarIcon />
                  </span>
                  <span>
                    {requester.firstname} {requester.lastname}
                  </span>
                </p>
                <p className="flex items-center gap-3">
                  <span>
                    <AvatarIcon />
                  </span>
                  <span>{requester.address}</span>
                </p>
                <p className="flex items-center gap-3">
                  <span>
                    <AvatarIcon />
                  </span>
                  <span>{requester.email}</span>
                </p>
                <p className="flex items-center gap-3">
                  <span>
                    <AvatarIcon />
                  </span>
                  <span>{requester.phone}</span>
                </p>
                <p className="flex items-center gap-3">
                  <span>
                    <AvatarIcon />
                  </span>
                  <span>مواطن(ة) مغربي(ة): {requester.cinNumber}</span>
                </p>
              </div>
              <div className="p-3">
                <TimeStamp />
              </div>
            </div>
            <div className="w-[47%] border-l-2 pt-6">
             
               <ConverHistory requestFollow={request} user="responsable"/>
              <div className="px-1">
                <div className="flex gap-2">
                  <select className="mt-2 block bg-white py-2 px-3 text-gray-600 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500">
                    <option> تمديد مدة المعالجة</option>
                    <option> رفض الطلب </option>
                    <option> قبول الطلب </option>
                    <option>قبول جزئي للطلب </option>
                  </select>
                  <select className="mt-2 block bg-white py-2 px-3 text-gray-600 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500">
                    <option>المعلومات المطلوبة منشورة ومتاحة للعموم</option>
                    <option>أسباب الرفض أو التمديد</option>
                  </select>
                </div>
                <textarea
                  className="w-full py-2 px-4"
                  placeholder="نص الرد على الطلب"
                  rows={4}
                ></textarea>
                <div className='p-1.5 bg-gray-300 flex justify-between'>
                  <label htmlFor="inputFileResp" className='flex items-center gap-2 cursor-pointer w-fit'>
                    <span className='text-xl'><AttachmentIcon/></span>
                    <span>إضافة مرفقات</span>
                    <input type="file" name="" id="inputFileResp" className='hidden'/>
                  </label>
                  <button className='py-1 px-2 bg-blue-600 text-white border-2 border-slate-900'>إرسال الإجابة</button>
                </div>
              </div>
            </div>
            <div className="flex-1 p-2">
              <h2 className="font-medium">طلب عناصر إضافية من الزملاء</h2>
              <div className="relative mt-3 w-full">
                <input
                  type="text"
                  className="w-full rounded-md border border-gray-300 p-3 pr-12 text-sm shadow-sm focus:outline-gray-400"
                  placeholder=""
                />

                <button className="absolute inset-y-0 right-0 inline-flex items-center overflow-hidden bg-gray-300 px-3">
                  <SearchIcon />
                </button>
              </div>
              <div>
                <div className="mt-2 overflow-y-auto  px-1 h-[calc(100vh-330px)]">
                  <div className="mb-4">
                    <span>مرسل إلى </span>
                    <span>أحمد الوكيلي (رئيس قسم المالية)</span>
                    <div className="rounded-r-lg rounded-bl-lg bg-blue-500 p-3 text-sm text-white">
                      <p>
                        السلام عليكم سيد أحمد، المرجو موافاتي بالتقرير السنوي
                        لميزانية سنة 2021
                      </p>
                    </div>
                    <span className="text-xs leading-none text-gray-500">
                      اليوم 12:30
                    </span>
                  </div>
                  <div className="mb-4">
                    <span>أحمد الوكيلي (رئيس قسم المالية)</span>
                    <div className="rounded-l-lg rounded-br-lg bg-gray-300 p-3 text-sm">
                      <p>
                        وعليكم السلام سيد أنس، يمكنك الإطلاع على التقرير السنوي
                        لميزانية سنة 2021 لجماعة آيت داوود في الوثيقة أدناه
                        تحياتي
                      </p>
                    </div>
                    <span className="text-xs leading-none text-gray-500">
                      اليوم 12:30
                    </span>
                  </div>
                </div>
                <div className='flex items-center gap-2 border-t-2'>
                <textarea
                  className="w-full py-2 px-4"
                  placeholder="إكتب نص الرسالة هنا ..."
                  rows={1}
                ></textarea>
                
                  <label htmlFor="inputFileColl" className='cursor-pointer w-fit'>
                    <span className='text-xl'><AttachmentIcon/></span>
                    <input type="file" name="" id="inputFileColl" className='hidden'/>
                  </label>
                  <button className='text-blue-600 underline'>إرسال </button>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ResRequest

export async function getServerSideProps({ query }: any) {
  const { requestId } = query

  const request = requestFollow.filter(
    (request: any) => request.code === query.requestId
  )[0]

  return {
    props: {
      request,
    },
  }
}
