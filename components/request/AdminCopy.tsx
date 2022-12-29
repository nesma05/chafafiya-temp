import axios from 'axios'
import { useEffect, useState } from 'react'
import { requestState } from '../../context/formContext'
import { CloseIcon, PlusIcon } from '../icons'

const showInitialState = {
  showOrgSec: false,
  showOrg: false,
  showSubOrg: false,
  showSecteurs: false,
  showSubSecteurs: false,
  showProv: false,
  showCollec: false,
}

const inputsInitialState = {
  selectedOrg: '',
  idOrg: '',
  selecSubAdm: '',
  subAdmID: '',
  subAdmVal: '',
  secteurVal: '',
  secteurID: '',
  category: '',
  collecID: '',
  collecVal: '',
  selectedReg: '',
  selectedSubReg: '',
}

const ListsInitialsState = {
  organitations: [],
  subAdministrations: [],
  secteurs: {},
  secteursDetails: [],
  subSecteurs: [],
  provinces: [],
  collectives: [],
}

const instiOrProvInitialState = {
  institution1: '',
  institution2:'',
  institution3: '',
  region:'',
  province: '',
}

function AdministrationDetails() {
  const [showElement, setShowElement] = useState(showInitialState)
  const [formInputs, setFormInputs] = useState(inputsInitialState)
  const [lists, setLists] = useState<any>(ListsInitialsState)
  const [institOrProv, setInstitOrProv] = useState(instiOrProvInitialState)
  console.log('secteurs', lists.secteurs)

  const {
    chosenState: { chosenOrgs },
    chosenDispatch,
  } = requestState()
  console.log('category', formInputs.category)

  const handleAdminChange = (e: any) => {
    setFormInputs({
      ...formInputs,
      selectedOrg: e.target.value,
      subAdmVal: '',
      collecVal: '',
    })

    setShowElement({
      ...showElement,
      showProv: false,
      showCollec: false,
      showSecteurs: false,
      showSubSecteurs: false,
      showOrg: false,
    })
    setTimeout(() => {
      setShowElement({
        ...showElement,
        showProv: false,
        showCollec: false,
        showSubOrg: false,
        showSecteurs: false,
        showSubSecteurs: false,
        showOrg: true,
      })
    }, 200)
  }

  const handleOrgChange = (e: any) => {
    setShowElement({ ...showElement, showSubOrg: false })

    setFormInputs({ ...formInputs, selecSubAdm: '', idOrg: e.target.value })

    setInstitOrProv({
      ...institOrProv,
      institution1: e.target.options[e.target.selectedIndex].dataset.institution,
    })

    setLists({ ...lists, subAdministrations: [] })
    setTimeout(() => {
      setShowElement({ ...showElement, showSubOrg: true })
    }, 500)
  }

  const handleRegChange = (e: any) => {
    setFormInputs({ ...formInputs, selectedReg: e.target.value })
    setInstitOrProv({
      ...institOrProv,
      region: e.target.options[e.target.selectedIndex].dataset.region,
    })
    setShowElement({ ...showElement, showProv: true, showCollec: false })
  }

  const handleSubRegChange = (e: any) => {
    setFormInputs({ ...formInputs, selectedSubReg: e.target.value })
    setInstitOrProv({
      ...institOrProv,
      province: e.target.options[e.target.selectedIndex].dataset.province,
    })
    setShowElement({ ...showElement, showCollec: true })
  }

  const handleNvChange = (e: any) => {
    setFormInputs({ ...formInputs, selecSubAdm: e.target.value })
  }

  const handleCatChange = (e: any) => {
    setFormInputs({ ...formInputs, category: e.target.value })
    const filterd = lists.secteurs?.secteurDetails.filter(
      (sec: any) => sec.category === e.target.value
    )

    setLists({ ...lists, secteurDetails: filterd })
  }

  const handleSubAdminChange = (e: any) => {
    const selectedID = e.target.options[e.target.selectedIndex].dataset.id
    setFormInputs({
      ...formInputs,
      subAdmVal: e.target.value,
      subAdmID: selectedID,
    })
    setTimeout(() => {
      setShowElement({ ...showElement, showSecteurs: true })
    }, 500)
  }

  const handleSecteurChange = (e: any) => {
    const selecredSectId = e.target.options[e.target.selectedIndex].dataset.id
    setFormInputs({
      ...formInputs,
      secteurVal: e.target.value,
      secteurID: selecredSectId,
    })
    setInstitOrProv({
      ...institOrProv,
      institution2: e.target.value,
    })
    setTimeout(() => {
      setShowElement({ ...showElement, showSubSecteurs: true })
    }, 500)
  }

  const handleCollecChange = (e: any) => {
    const selctedID = e.target.options[e.target.selectedIndex].dataset.id
    setFormInputs({
      ...formInputs,
      collecVal: e.target.value,
      collecID: selctedID,
    })
  }

  const handleSubSecteurs2 = (e:any)=>{
    setInstitOrProv({
      ...institOrProv,
      institution3: e.target.value,
    })
  }

  const handleAddChosenOrg = () => {
    if (formInputs.subAdmVal) {
      chosenDispatch({
        type: 'ADD_CHOSEN_ORGS',
        payload: {
          id: formInputs.subAdmID,
          name: institOrProv.institution3,
          niveau: formInputs.selecSubAdm,
          institOrProv1: institOrProv.institution1,
          institOrProv2: formInputs.subAdmVal,
          institOrProv3: institOrProv.institution2,
        },
      })
      setFormInputs({ ...formInputs, subAdmVal: '' })
    }

    if (formInputs.collecVal) {
      chosenDispatch({
        type: 'ADD_CHOSEN_ORGS',
        payload: {
          id: formInputs.collecID,
          name: formInputs.collecVal,
          niveau: formInputs.selecSubAdm,
          institOrProv1: institOrProv.region,
          institOrProv2: institOrProv.province,
        },
      })
      setFormInputs({ ...formInputs, collecVal: '' })
    }

    setShowElement(showInitialState)
  }

  const handleRemoveChosenOrg = (orgID: string) => {
    chosenDispatch({ type: 'REMOVE_CHOSEN_ORGS', payload: orgID })
  
  }

  const handleCancel = () => {
    setShowElement(showInitialState)
  }

  const getOrg = async (selected: string) => {
    const response = await axios(
      `https://chafafiya-app-json-server-production.up.railway.app/${selected}`
    )
    setLists({ ...lists, organitations: response?.data })
  }

  const getSubAdm = async () => {
    const response = await axios(
      `http://194.60.201.174:444/api/entite/children/${formInputs.idOrg}`
    )
    setLists({ ...lists, subAdministrations: response?.data?.secteurDetails })
  }
  // console.log('subadmin', lists.subAdministrations)
  // console.log('formInputs.idOrg',formInputs.idOrg)
  const getSecteurs = async (selected: any) => {
    const response = await axios(
      `http://194.60.201.174:444/api/entite/children/${selected}`
    )
    setLists({
      ...lists,
      secteurs: response?.data,
      secteurDetails: response?.data?.secteurDetails,
    })
  }
  console.log('subadmin', lists.secteurs)
  console.log('formInputs.subAdmID',formInputs.subAdmID)
  const getSubSecteurs = async (selected: any) => {
    const response = await axios(
      `http://194.60.201.174:444/api/entite/children/${selected}`
    )
    setLists({
      ...lists,
      subSecteurs: response?.data?.secteurDetails,
    })
  }

  const getProv = async (selected: string) => {
    const response = await axios(
      `https://chafafiya-app-json-server-production.up.railway.app/subRegions?region=${selected}`
    )
    setLists({ ...lists, provinces: response?.data })
  }

  const getColl = async (selected: string) => {
    const response = await axios(
      `https://chafafiya-app-json-server-production.up.railway.app/provinces?subRegion=${selected}`
    )
    setLists({ ...lists, collectives: response?.data })
  }

  //test api url
  const testApi = async (selected: string) => {
    const testResponse1 = await axios(
      `http://194.60.201.174:444/api/entite/children/${selected}`
    )
    console.log('testReponse1',testResponse1?.data)
    const testResponse2 = await axios(
      `http://194.60.201.174:444/api/entite-category`
    )
    console.log('testReponse2',testResponse2?.data)
    const testResponse3 = await axios(
      `http://194.60.201.174:444/api/entite`
    )
    console.log('testReponse3',testResponse3?.data)
  }
  useEffect(() => {
    testApi('39')
  },[] )


  useEffect(() => {
    setShowElement({ ...showElement, showSubOrg: false })

    if (formInputs.selectedOrg) getOrg(formInputs.selectedOrg)
  }, [formInputs.selectedOrg])

  useEffect(() => {
    getSubAdm()
  }, [formInputs.idOrg])

  useEffect(() => {
    getSecteurs(formInputs.subAdmID)
  }, [formInputs.subAdmID])

  useEffect(() => {
    getSubSecteurs(formInputs.secteurID)
  }, [formInputs.secteurID])

  useEffect(() => {
    getProv(formInputs.selectedReg)
  }, [formInputs.selectedReg])

  useEffect(() => {
    getColl(formInputs.selectedSubReg)
  }, [formInputs.selectedSubReg])

  return (
    <div className="basis-2/3">
      <div className="mb-2">
        {chosenOrgs.length > 0 ? (
          <div className="flex flex-wrap">
            {chosenOrgs.map((chOrg: any) => (
              <div
                className="ml-2 mb-2 flex w-fit cursor-pointer gap-2 rounded-md bg-cyan-600 px-2 py-0.5 text-white"
                key={chOrg.id}
                onClick={() => handleRemoveChosenOrg(chOrg.id)}
              >
                <span>{chOrg.institOrProv1}</span>
                <span className="font-bold">/</span>
                <span>{chOrg.institOrProv2}</span>
                <span className="font-bold">/</span>
                <span>{chOrg.institOrProv3}</span>
                <span className="font-bold">/</span>
                <span>{chOrg.name}</span>
                <span>
                  <CloseIcon />
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p>لم يتم إختيار أي مؤسسة أو هيئة معنية</p>
        )}
      </div>
      {showElement.showOrgSec ? (
        <div>
          <div>
            <input
              type="radio"
              name="type"
              className="ml-2"
              value="administrations"
              onChange={handleAdminChange}
            />
            <label>
              الإدارات العمومية (الوزارات وكتابات الدولة والمندوبيات السامية
              والوزارية)
            </label>
          </div>
          <div>
            <input
              type="radio"
              name="type"
              className="ml-2"
              value="institutions"
              onChange={handleAdminChange}
            />
            <label>المؤسسات والمقاولات العمومية</label>
          </div>
          <div>
            <input
              type="radio"
              name="type"
              className="ml-2"
              value="regions"
              onChange={handleAdminChange}
            />
            <label>الجماعات الترابية</label>
          </div>
          {showElement.showOrg && (
            <>
              <div className="mb-4">
                {formInputs.selectedOrg === 'regions' ? (
                  <select
                    name="region"
                    className="mt-2 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-gray-600 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500"
                    onChange={handleRegChange}
                  >
                    <option> -- إختر الجهة المعنية -- </option>
                    {lists.organitations?.map((org: any, index: any) => (
                      <option key={index} data-region={org.nom} value={org.identifiant}>
                        {org.nom}
                      </option>
                    ))}
                  </select>
                ) : (
                  <select
                    name="organization"
                    className="mt-2 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-gray-600 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500"
                    onChange={handleOrgChange}
                  >
                    <option> -- إختر المؤسسة أو الهيئة المعنية -- </option>
                    {lists.organitations?.map((org: any, index: any) => (
                      <option
                        key={index}
                        value={org.id}
                        data-institution={org.denomination}
                      >
                        {org.denomination}
                      </option>
                    ))}
                  </select>
                )}
              </div>
              <hr />
            </>
          )}
          {showElement.showSubOrg && (
            <div className="mt-4">
              {/* <div className="ml-8 inline-block">
                <input
                  type="radio"
                  name="niveau"
                  className="ml-2"
                  value="0"
                  onChange={handleNvChange}
                />
                <label>مركزية</label>
              </div>
              <div className="ml-8 inline-block">
                <input
                  type="radio"
                  name="niveau"
                  className="ml-2"
                  value="1"
                  onChange={handleNvChange}
                />
                <label>جهوية</label>
              </div> */}
              {/* <div className="ml-8 inline-block">
                <input
                  type="radio"
                  name="niveau"
                  className="ml-2"
                  value="2"
                  onChange={handleNvChange}
                />
                <label>إقليمية</label>
              </div>
              <div className="ml-8 inline-block">
                <input
                  type="radio"
                  name="niveau"
                  className="ml-2"
                  value="3"
                  onChange={handleNvChange}
                />
                <label>محلية</label>
              </div> */}
              <div>
                <select
                  name="activity"
                  value={formInputs.subAdmVal}
                  className="mt-2 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-gray-600 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500"
                  onChange={handleSubAdminChange}
                >
                  <option> -- إختر القطاع المعني -- </option>
                  {lists.subAdministrations?.map((subAdm: any) => (
                    <option key={subAdm.entite_id} data-id={subAdm.entite_id}>
                      {subAdm.denomination_ar}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
          {showElement.showSecteurs && (
            <div>
              {lists.secteurs?.categories.length > 1 && (
                <div className="mt-6 flex gap-4">
                  {lists.secteurs?.categories.map((cat: any) => (
                    <div key={cat.type} className="">
                      <input
                        type="radio"
                        name="niveau"
                        className="ml-2"
                        value={cat.type}
                        onChange={handleCatChange}
                      />
                      <label>{cat.type === 'CENTRAL' ? 'مركزية' : 'جهوية'}</label>
                    </div>
                  ))}
                </div>
              )}
              <select
                name="secteur"
                value={formInputs.secteurVal}
                className="mt-2 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-gray-600 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500"
                onChange={handleSecteurChange}
              >
                <option> -- إختر القطاع الثانوي -- </option>
                {formInputs.category
                  ? lists.secteurDetails.map((sectDet: any) => (
                      <option key={sectDet.entite_id} data-id={sectDet.entite_id} value={sectDet.denomination_ar}>
                        {sectDet.denomination_ar}
                      </option>
                    ))
                  : lists.secteurs?.categories.map((cat: any) => (
                      <optgroup
                        key={cat.type}
                        label={cat.type === 'CENTRAL' ? 'مركزية' : 'جهوية'}
                      >
                        {lists.secteurDetails.map(
                          (sectDet: any) =>
                            sectDet.category === cat.type && (
                              <option key={sectDet.entite_id} data-id={sectDet.entite_id}>
                                {sectDet.denomination_ar}
                              </option>
                            )
                        )}
                      </optgroup>
                    ))}
              </select>
            </div>
          )}
          {showElement.showSubSecteurs && (
            <div className="mt-6">
              <select
                name="activity"
                className="mt-2 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-gray-600 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500"
                onChange={handleSubSecteurs2}
              >
                <option> -- إختر القطاع الثانوي/2 -- </option>
                {lists.subSecteurs?.map((subSect: any) => (
                  <option key={subSect.entite_id} value={subSect.denomination_ar}>{subSect.denomination_ar}</option>
                ))}
              </select>
            </div>
          )}

          {showElement.showProv && (
            <div>
              <select
                name="activity"
                className="mt-2 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-gray-600 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500"
                onChange={handleSubRegChange}
              >
                <option> -- إختر المجلس الجهوي أو العمالة / الإقليم -- </option>
                {lists.provinces?.map((prov: any) => (
                  <option
                    key={prov.id}
                    value={prov.id}
                    data-province={prov.denomination}
                  >
                    {prov.denomination}
                  </option>
                ))}
              </select>
            </div>
          )}
          {showElement.showCollec && (
            <div>
              <select
                name="activity"
                value={formInputs.collecVal}
                className="mt-2 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-gray-600 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500"
                onChange={handleCollecChange}
              >
                <option> -- إختر المجلس الإقليمي أو الجماعة المعنية -- </option>
                {lists.collectives?.map((coll: any) => (
                  <option key={coll.id} data-id={coll.id}>
                    {coll.denomination}
                  </option>
                ))}
              </select>
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
          onClick={() => setShowElement({ ...showElement, showOrgSec: true })}
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
