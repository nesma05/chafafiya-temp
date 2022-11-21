import { NextPage } from 'next'
import NextLink from 'next/link'
import { useState } from 'react'
import { PlusIcon } from '../components/icons'
import Table from '../components/userDashboard/Table'
import TabsNames from '../components/userDashboard/TabsNames'
import requestsList  from '../utils/requestsList.json'
import complaintsList from '../utils/complaintsList.json'

const userDashboard: NextPage = () => {
  const [toggleIndex, setToggleIndex] = useState(1)

  const handleToggle = (index: any) => {
    setToggleIndex(index)
  }

  return (
    <div>
      <div className="bg-gray-100 p-12 pb-20">
        <h1 className="text-2xl">مرحبا بك سيد أحمد الوكيلي</h1>
      </div>
      <div className='-mt-16'>
        <TabsNames toggleIndex={toggleIndex} handleToggle={handleToggle} />
        <div className={`py-20 px-8 ${
          toggleIndex === 1 ? 'visible block' : 'invisible hidden'
        }`}>
          <div className="flex items-center">
            <NextLink href={'/request'} passHref>
              <button className="flex items-center gap-2 mb-8 rounded-md bg-main py-1.5 px-2 text-white sm:px-3">
               <span>إيداع طلب جديد</span> <span className="bg-white text-main rounded-full p-0.5"><PlusIcon/></span>
              </button>
            </NextLink>
          </div>
          <Table rows={requestsList} />
        </div>
        <div className={`py-20 px-8 ${
          toggleIndex === 2 ? 'visible block' : 'invisible hidden'
        }`}>
          
          <Table rows={complaintsList} />
        </div>
        <div className={`py-20 px-8 ${
          toggleIndex === 3 ? 'visible block' : 'invisible hidden'
        }`}>
         
          <Table rows={complaintsList} />
        </div>
      </div>
    </div>
  )
}

export default userDashboard
