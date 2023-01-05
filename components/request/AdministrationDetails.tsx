import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
import { useEffect, useState } from 'react'
import { requestState } from '../../context/formContext'
import { CloseIcon, NoteIcon, PlusIcon } from '../icons'
import config from '../../utils/config'

function AdministrationDetails() {
  const showInitialState = {
    showOrgSec: false,
    firstLevel: false,
    children: false,
  }

  const inputsInitialState = {
    category: '',
    level1Value: '',
    level1ID: '',
  }

  const [showElement, setShowElement] = useState(showInitialState)
  const [formInputs, setFormInputs] = useState(inputsInitialState)
  const [categories, setCategories] = useState([])
  const [firstLevelEntites, setFirstLevelEntites] = useState([])
  const [children, setChildren] = useState<any>([])

  const { baseUrl, envMode } = config

  const {
    chosenState: { chosenOrgs },
    chosenDispatch,
  } = requestState()
  if (envMode == 'development') console.log('chosenOrgs', chosenOrgs)

  const getCategories = async () => {
    const response = await axios(`${baseUrl}/api/entite-category/PRIMARY`)
    setCategories(response?.data)
    setShowElement({ ...showElement, showOrgSec: true })
  }

  const getFirstLevelEntites = async (selected: string) => {
    const response = await axios(
      `${baseUrl}/api/entite/category/${selected}/niveau/1`
    )
    setFirstLevelEntites(response?.data)
  }

  const getChildren = async (id: string) => {
    const emptyChildren: any[] = []
    setChildren(emptyChildren)
    const response = await axios(`${baseUrl}/api/entite/children/${id}`)
    if (response?.data.secteurDetails.length > 0) {
      const newChildren = {
        id: uuidv4(),
        subLevelValue: '',
        subLevelID: '',
        categories: response?.data?.categories,
        subCategory: '',
        filterChildren: [],
        childrenDetails: response?.data?.secteurDetails,
      }
      setChildren([newChildren])
      setShowElement({ ...showElement, children: true })
    }
  }

  const handleCategoriesChange = (e: any) => {
    setChildren([])
    setFormInputs({
      ...formInputs,
      category: e.target.value,
      level1Value: '',
      level1ID: '',
    })

    setShowElement({ ...showElement, firstLevel: true })
  }

  const handleLevel1Change = (e: any) => {
    setFormInputs({
      ...formInputs,
      level1Value: e.target.value,
      level1ID: e.target.options[e.target.selectedIndex].dataset.id,
    })
  }

  const handleSubLevelChange = async (id: any, e: any, index: any) => {
    const selectedID = e.target.options[e.target.selectedIndex].dataset.id

    const newChildren = children.map((child: any) => {
      if (id === child.id) {
        child.subLevelValue = e.target.value
        child.subLevelID = selectedID
      }
      return child
    })

    setChildren(newChildren)

    const updatedChildren = [...children].slice(0, index + 1)

    const response = await axios(
      `http://194.60.201.174:444/api/entite/children/${selectedID}`
    )

    if (response?.data.secteurDetails.length > 0) {
      const newChildren = {
        id: uuidv4(),
        subLevelValue: '',
        subLevelID: '',
        subCategory: '',
        categories: response?.data?.categories,
        filterChildren: [],
        childrenDetails: response?.data?.secteurDetails,
      }

      setChildren([...updatedChildren, newChildren])
    } else if (
      response?.data.secteurDetails.length === 0 &&
      children.length > index + 1
    ) {
      const removeLastChild = [...children].slice(0, -1)
      setChildren(removeLastChild)
    }
  }

  const handleSubCategoryChange = (id: any, e: any, index: any) => {
    const updatedChildren = [...children].slice(0, index + 1)

    const newChildren = updatedChildren.map((child: any) => {
      if (id === child.id) {
        const filterd = child.childrenDetails.filter(
          (childDet: any) => childDet.entCategory?.slug === e.target.value 
        )

        child.subCategory = e.target.value
        child.filterChildren = filterd
      }
      return child
    })

    setChildren(newChildren)
  }

  const handleAddChosenOrg = () => {
    const childrenValues = children.map((child: any) => {
      return { entiteValue: child.subLevelValue }
    })
    chosenDispatch({
      type: 'ADD_CHOSEN_ORGS',
      payload: {
        id: uuidv4(),
        values: [{ entiteValue: formInputs.level1Value }, ...childrenValues],
      },
    })
    setFirstLevelEntites([])
    setChildren([])
    setFormInputs(inputsInitialState)
    setCategories([])
    setShowElement(showInitialState)
  }

  const handleCancel = () => {
    setFirstLevelEntites([])
    setChildren([])
    setFormInputs(inputsInitialState)
    setCategories([])
    setShowElement(showInitialState)
  }

  const handleRemoveChosenOrg = (orgID: string) => {
    chosenDispatch({ type: 'REMOVE_CHOSEN_ORGS', payload: orgID })
  }

  useEffect(() => {
    if (formInputs.category) getFirstLevelEntites(formInputs.category)
  }, [formInputs.category])

  useEffect(() => {
    if (formInputs.level1Value) getChildren(formInputs.level1ID)
  }, [formInputs.level1Value])

  return (
    <div className="basis-2/3">
      <div className="mb-2">
        {chosenOrgs.length > 0 ? (
          <div className="flex flex-wrap">
            {chosenOrgs.map((chOrg: any) => (
              <div key={chOrg.id} className="relative">
                <div>
                  <div className=" ml-2 mb-2 flex w-fit cursor-pointer gap-2 rounded-md bg-cyan-600 px-2 py-0.5 text-white">
                    {chOrg.values.map((val: any, index: any, arr: any) => (
                      <div key={val.entiteValue} className="">
                        <div>
                          <span className="">{val.entiteValue} </span>
                          {index != arr.length - 1 && (
                            <span className="font-bold">/</span>
                          )}
                        </div>
                      </div>
                    ))}

                    <span onClick={() => handleRemoveChosenOrg(chOrg.id)}>
                      <CloseIcon />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>اختر المؤسسة او الهيئة المعنية</p>
        )}
      </div>
      {showElement.showOrgSec ? (
        <div>
          {categories && (
            <div>
              {categories?.map((cat: any) => (
                <div key={cat.id}>
                  <input
                    type="radio"
                    name="type"
                    className="ml-2"
                    value={cat.id}
                    onChange={handleCategoriesChange}
                  />
                  <label>{cat.title_ar}</label>
                </div>
              ))}
            </div>
          )}

          {showElement.firstLevel && (
            <div className="mt-4">
              <div>
                <select
                  name="activity"
                  value={formInputs.level1Value}
                  className="mt-2 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-gray-600 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500"
                  onChange={handleLevel1Change}
                >
                  <option> -- إختر المؤسسة أو الهيئة المعنية -- </option>
                  {firstLevelEntites?.map((entite: any) => (
                    <option key={entite.entite_id} data-id={entite.entite_id}>
                      {entite.denomination_ar}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
          {showElement.children && (
            <div className="mt-4">
              {children?.map((child: any, index: any) => (
                <div key={child.id}>
                  {child.categories?.length > 1 && (
                    <div className="mt-6 flex gap-4">
                      {child.categories?.map(
                        (cat: any) =>
                           (
                            <div key={cat.type} className="">
                              <input
                                type="radio"
                                name="category"
                                className="ml-2"
                                value={cat.type}
                                onChange={(e) =>
                                  handleSubCategoryChange(child.id, e, index)
                                }
                              />
                              <label>{cat.title? cat.title :'الكل'}</label>
                            </div>
                          ) 
                      )}
                    </div>
                  )}
                  <select
                    name="activity"
                    value={child.level1Value}
                    className="mt-2 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-gray-600 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500"
                    onChange={(e) => handleSubLevelChange(child.id, e, index)}
                  >
                    <option> -- إختر المؤسسة الفرعية -- </option>
                    {child.subCategory
                      ? child.filterChildren?.map((childDet: any) => (
                          <option key={childDet.id} data-id={childDet.id}>
                            {childDet.denomination_ar}
                          </option>
                        ))
                      : child.categories.length > 1
                      ? child.categories?.map((cat: any) => (
                          <optgroup key={cat.type} label={cat.title? cat.title : 'أخرى'}>
                            {child.childrenDetails?.map(
                              (chDet: any) =>
                                (chDet.entCategory?.slug === cat.type ||
                                  chDet.entCategory === cat.type) && (
                                  <option key={chDet.id} data-id={chDet.id}>
                                    {chDet.denomination_ar}
                                  </option>
                                )
                            )}
                          </optgroup>
                        ))
                      : child.childrenDetails?.map((cDet: any) => (
                          <option key={cDet.id} data-id={cDet.id}>
                            {cDet.denomination_ar}
                          </option>
                        ))}
                  </select>
                </div>
              ))}
            </div>
          )}

          <div className="mt-3 flex justify-end gap-4 text-lg underline">
            <button className="flex gap-1 text-blue-900" onClick={handleCancel}>
              إلغاء
            </button>
            <button
              className="flex gap-1 text-blue-900"
              onClick={handleAddChosenOrg}
            >
              تأكيد{' '}
            </button>
          </div>
        </div>
      ) : chosenOrgs.length >= 3 ? (
        <p className="font-bold underline">الحد الأقصى للإختيارات هو 3</p>
      ) : (
        <button
          className="flex items-center gap-1 text-blue-900"
          onClick={getCategories}
        >
          <span className="text-md underline"> إضافة مؤسسة أو هيئة معنية </span>{' '}
          <span className="font-bold">
            <PlusIcon />
          </span>
        </button>
      )}
    </div>
  )
}

export default AdministrationDetails
