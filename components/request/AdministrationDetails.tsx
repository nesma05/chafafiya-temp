import axios from 'axios'
import { useEffect, useState } from 'react'
import { requestState } from '../../context/formContext'
import { CloseIcon, PlusIcon } from '../icons'

const showInitialState = {
  showOrgSec: false,
  showOrg: false,
  showSubOrg: false,
  showProv: false,
  showCollec: false,
}

const inputsInitialState = {
  selectedOrg: '',
  idOrg: '',
  selecSubAdm: '',
  subAdmID: '',
  subAdmVal: '',
  collecID: '',
  collecVal: '',
  selectedReg: '',
  selectedSubReg: '',
}

const ListsInitialsState = {
  organitations: [],
  subAdministrations: [],
  provinces: [],
  collectives: [],
}

const instiOrProvInitialState = {
  institution:'',
  province:''
}

function AdministrationDetails() {
  const [showElement, setShowElement] = useState(showInitialState)
  const [formInputs, setFormInputs] = useState(inputsInitialState)
  const [lists, setLists] = useState(ListsInitialsState)
  const [institOrProv,setInstitOrProv] =useState(instiOrProvInitialState)
  console.log('institOrProv',institOrProv)

  const { chosenState: { chosenOrgs }, chosenDispatch } = requestState()
  console.log('chosenOrgs',chosenOrgs)

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
      showOrg: false,
    })
    setTimeout(() => {
      setShowElement({
        ...showElement,
        showProv: false,
        showCollec: false,
        showSubOrg: false,
        showOrg: true,
      })
    }, 200)
  }

  const handleOrgChange = (e: any) => {
    setShowElement({ ...showElement, showSubOrg: false })

    setFormInputs({ ...formInputs, selecSubAdm: '', idOrg: e.target.value })
    
    setInstitOrProv({...institOrProv,institution:e.target.options[e.target.selectedIndex].dataset.institution})

    setLists({ ...lists, subAdministrations: [] })
    setTimeout(() => {
      setShowElement({ ...showElement, showSubOrg: true })
    }, 500)
  }

  const handleRegChange = (e: any) => {
    setFormInputs({ ...formInputs, selectedReg: e.target.value })
    setShowElement({ ...showElement, showProv: true, showCollec: false })
  }

  const handleSubRegChange = (e: any) => {
    setFormInputs({ ...formInputs, selectedSubReg: e.target.value })
    setInstitOrProv({...institOrProv,province:e.target.options[e.target.selectedIndex].dataset.province})
    setShowElement({ ...showElement, showCollec: true })
  }

  const handleNvChange = (e: any) => {
    setFormInputs({ ...formInputs, selecSubAdm: e.target.value })
  }

  const handleSubAdminChange = (e: any) => {
    const selectedID = e.target.options[e.target.selectedIndex].dataset.id
    setFormInputs({
      ...formInputs,
      subAdmVal: e.target.value,
      subAdmID: selectedID,
    })
  }

  const handleCollecChange = (e: any) => {
    const selctedID = e.target.options[e.target.selectedIndex].dataset.id
    setFormInputs({
      ...formInputs,
      collecVal: e.target.value,
      collecID: selctedID,
    })
  }

  const handleAddChosenOrg = () => {
    if (formInputs.subAdmVal) {
      chosenDispatch({
        type: 'ADD_CHOSEN_ORGS',
        payload: {
          id: formInputs.subAdmID,
          name: formInputs.subAdmVal,
          niveau: formInputs.selecSubAdm,
          institOrProv:institOrProv.institution
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
          institOrProv:institOrProv.province
        },
      })
      setFormInputs({ ...formInputs, collecVal: '' })
    }

    setShowElement(showInitialState)
  }

  const handleRemoveChosenOrg = (orgID: string) => {
    chosenDispatch({ type: 'REMOVE_CHOSEN_ORGS', payload: orgID })
  //   const newInstitOrProv = institOrProv.filter((el:any) => {
  //     return chosenOrgs.some((ch:any)=> ch.institOrProv.indexOf(el) === -1);
  //  });
  //  setInstitOrProv(newInstitOrProv)
  }

  const handleCancel = () => {
    setShowElement(showInitialState)
  }

  const getOrg = async (selected: string) => {
    const response = await axios(`https://chafafiya-app-json-server-production.up.railway.app/${selected}`)
    setLists({ ...lists, organitations: response?.data })
  }

  const getSubAdm = async (selected: string) => {
    const response = await axios(
      `https://chafafiya-app-json-server-production.up.railway.app/subAdministrations?idOrg=${formInputs.idOrg}&niveau=${selected}`
    )
    setLists({ ...lists, subAdministrations: response?.data })
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

  useEffect(() => {
    setShowElement({ ...showElement, showSubOrg: false })

    if (formInputs.selectedOrg) getOrg(formInputs.selectedOrg)
  }, [formInputs.selectedOrg])

  useEffect(() => {
    getSubAdm(formInputs.selecSubAdm)
  }, [formInputs.selecSubAdm])

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
          <div className='flex flex-wrap'>
            {chosenOrgs.map((chOrg: any,index:any) => (
              <div
                className="ml-2 mb-2 flex gap-2 w-fit cursor-pointer rounded-md bg-cyan-600 px-2 py-0.5 text-white"
                key={chOrg.id}
                onClick={() => handleRemoveChosenOrg(chOrg.id)}
              >
                <span>{chOrg.institOrProv}</span>
                <span className='font-bold'>/</span>
                <span>{chOrg.name}</span>
                <span><CloseIcon/></span>
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
                    name="organization"
                    className="mt-2 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-gray-600 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500"
                    onChange={handleRegChange}
                  >
                    <option> -- إختر الجهة المعنية -- </option>
                    {lists.organitations?.map((org: any, index: any) => (
                      <option key={index} value={org.identifiant}>
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
                      <option key={index} value={org.id} data-institution={org.denomination}>
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
              <div className="ml-8 inline-block">
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
              </div>
              <div className="ml-8 inline-block">
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
              </div>
              <div>
                <select
                  name="activity"
                  value={formInputs.subAdmVal}
                  className="mt-2 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-gray-600 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500"
                  onChange={handleSubAdminChange}
                >
                  <option> -- إختر القطاع المعني -- </option>
                  {lists.subAdministrations?.map((subAdm: any) => (
                    <option key={subAdm.id} data-id={subAdm.id}>
                      {subAdm.denomination}
                    </option>
                  ))}
                </select>
              </div>
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
                  <option key={prov.id} value={prov.id} data-province={prov.denomination}>
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
      ) : (
       
        chosenOrgs.length >= 3 ? <p className='font-bold underline'>الحد الأقصى للإختيارات هو 3</p> : <button
          className="flex gap-1 items-center text-blue-900"
          onClick={() => setShowElement({ ...showElement, showOrgSec: true })}
        >
          <span className="text-md underline"> إضافة مؤسسة أو هيئة معنية </span>{' '}
          <span className="font-bold"><PlusIcon/></span>
        </button>
      )}
    </div>
  )
}

export default AdministrationDetails
