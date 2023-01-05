import axios from 'axios'
import { useRouter } from 'next/router'
import { useState } from 'react'
import config from '../../utils/config'

const AddEntitiesModal = ({
  categories,
  parentId,
  niveau,
  handleClose,
}: any) => {
  const [category, setCategory] = useState('')
  const [categoryID, setCategoryID] = useState('')
  const [administration, setAdministration] = useState('')

  const {baseUrl}=config

  const Router = useRouter()

  const sentAddedData = {
    parentId: parentId ? parentId : null,
    entCategoryId: categoryID,
    denomination_ar: administration,
    niveau: niveau ? niveau : null,
  }

  const handleCatChange = (e: any) => {
    setCategory(e.target.value)
    setCategoryID(e.target.options[e.target.selectedIndex].dataset.id)
  }

  const handleCancel = () => {
    setCategory('')
    setAdministration('')
    handleClose()
  }
  const handleSave = (e: any) => {
    e.target.disabled = true

    axios
      .post(`${baseUrl}/api/entite`, sentAddedData)
      .then((res: any) => {
        if (res) {
          e.target.disabled = false
          Router.push(`${Router.asPath}`)

          setCategory('')
          setAdministration('')
          handleClose()
        }
      })
  }
  return (
    <div className="h-[400px] w-[500px] overflow-hidden rounded bg-white">
      <h2 className="bg-gray-300 py-2 px-6 font-bold">إضافة وحدة إدارية جديدة</h2>
      <div className="flex flex-col gap-10 p-10">
        <div>
          <label className="">اختر الصنف:</label>
          <select
            name="category"
            className="mt-1 w-full rounded-md border border-gray-300 bg-white py-1 px-3 text-gray-600 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500"
            value={category}
            onChange={handleCatChange}
          >
            <option>-- إختيار الصنف --</option>
            {categories?.map((cat: any) => (
              <option key={cat.id} data-id={cat.id} value={cat.title_ar}>
                {cat.title_ar}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="">إسم الإدارة:</label>
          <input
            type="text"
            name="administration"
            value={administration}
            className="mt-1 w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-gray-600 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500"
            onChange={(e) => setAdministration(e.target.value)}
          />
        </div>
      </div>
      <div className="flex justify-end gap-4 px-10">
        <button onClick={handleCancel} className="text-main underline">
          إلغاء
        </button>
        <button
          onClick={handleSave}
          className="mx-2 rounded-md bg-main py-1.5 px-2 text-white sm:px-3"
        >
          حفظ
        </button>
      </div>
    </div>
  )
}

export default AddEntitiesModal
