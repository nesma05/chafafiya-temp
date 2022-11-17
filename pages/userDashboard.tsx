import { NextPage } from 'next'
import NextLink from 'next/link'
import { useState } from 'react'
import Table from '../components/userDashboard/Table'
import TabsNames from '../components/userDashboard/TabsNames'

const Law: NextPage = () => {
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
        <div className="py-20 px-8">
          <div className="flex items-center">
            <NextLink href={'/request'} passHref>
              <button className="mb-8 rounded-md bg-main py-1.5 px-2 text-white sm:px-3">
                إيداع طلب جديد
              </button>
            </NextLink>
          </div>
          <Table />
        </div>
      </div>
    </div>
  )
}

export default Law
