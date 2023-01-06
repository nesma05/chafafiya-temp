import axios from 'axios'
import { on } from 'events'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import config from '../../utils/config'

const EditEntitiesModal = ({
  categories,
  entites,
  oneEntite,
  handleClose,
}: any) => {
  const [category, setCategory] = useState('')
  const [categoryID, setCategoryID] = useState('')
  const [administration, setAdministration] = useState('')
  const [parentEntite, setParentEntite] = useState('')
  const [parentEntiteID, setParentEntiteID] = useState('')
  const [filteredEntites, setFilteredEntites] = useState([])

  const { baseUrl, envMode } = config

  const Router = useRouter()

  const sentEditedData = {
    parentId: parentEntiteID ? parentEntiteID : 0,
    entCategory: categoryID ? categoryID : null,
    denomination_ar: administration,
    niveau: !parentEntiteID ? 1 : null,
  }
  // console.log('parentEntiteID', parentEntiteID)
  // console.log('categoryID', categoryID)
  const handleCatChange = (e: any) => {
    //setCategory(e.target.value)
    //setCategoryID(e.target.options[e.target.selectedIndex].dataset.id)
    setCategoryID(e.target.value)
  }

  const entitesFiltered = (entiteName: any) => {
    const filtered = entites.filter((ent: any) => ent.denomination_ar != entiteName)
    setFilteredEntites(filtered)
  }

  const handleAdminChange = (e: any) => {
    setAdministration(e.target.value)
    entitesFiltered(e.target.value)
  }

  const handleParentChange = (e: any) => {
    //setParentEntite(e.target.value)
    //setParentEntiteID(e.target.options[e.target.selectedIndex].dataset.id)
    setParentEntiteID(e.target.value)
  }
  const handleCancel = () => {
    //setCategory('')
    setAdministration('')
    //setParentEntite('')
    setCategoryID('')
    setParentEntiteID('')
    setFilteredEntites([])
    handleClose()
  }
  const handleSave = (e: any) => {
    e.target.disabled = true
    if (envMode == 'development') console.log('sentEditedData', sentEditedData)
    axios
      .patch(`${baseUrl}/api/entite/${oneEntite?.id}`, sentEditedData)
      .then((res: any) => {
        if (res) {
          e.target.disabled = false

          Router.push(`${Router.asPath}`)

          // setCategory('')
          setAdministration('')
          // setParentEntite('')
          setCategoryID('')
          setParentEntiteID('')
          setFilteredEntites([])
          handleClose()
        }
      })
  }

  useEffect(() => {
    //   setCategory(oneEntite?.category)
    setAdministration(oneEntite?.entiteName)
    //  setParentEntite(oneEntite?.parentName)
    //   setCategoryID(oneEntite?.categoryId)
    //   setParentEntiteID(oneEntite?.parentEntiteId)
    setCategoryID(oneEntite?.categoryId)
    setParentEntiteID(oneEntite?.parentEntiteId)
    entitesFiltered(oneEntite?.entiteName)
  }, [oneEntite])
  return (
    <div className="h-[500px] w-[500px] overflow-hidden rounded bg-white">
      <h2 className="bg-gray-300 py-2 px-6 font-bold">تحيين الإدارة</h2>
      <div className="flex flex-col gap-10 p-10">
        <div>
          <label className="">اختر الصنف:</label>
          <select
            name="category"
            className="mt-1 w-full rounded-md border border-gray-300 bg-white py-1 px-3 text-gray-600 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500"
            value={categoryID}
            onChange={handleCatChange}
          >
            <option value="">-- إختيار الصنف --</option>
            {categories?.map((cat: any) => (
              <option key={cat.id} data-id={cat.id} value={cat.id}>
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
            onChange={handleAdminChange}
          />
        </div>
        <div>
          <label>إختر الإنتماء: </label>
          <select
            name="parentEntite"
            className="mt-1 w-full rounded-md border border-gray-300 bg-white py-1 px-3 text-gray-600 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500"
            value={parentEntiteID}
            onChange={handleParentChange}
          >
            <option value="">-- إختيار الإنتماء --</option>
            {filteredEntites?.map((ent: any) => (
              <option key={ent.id} data-id={ent.id} value={ent.id}>
                {ent.denomination_ar}
              </option>
            ))}
          </select>
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

export default EditEntitiesModal
