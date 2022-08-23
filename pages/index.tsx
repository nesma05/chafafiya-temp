import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { requestedInfo, receivedInfo } from '../utils/constants'
import { useRouter } from 'next/router'


import axios from 'axios'


const Home: NextPage = () => {
  const [selectedOrg, setSelectedOrg] = useState('')
  const [idOrg, setIdOrg] = useState('')
  const [showOrgSec, setShowOrgSec] = useState(false)
  const [showOrg, setShowOrg] = useState(false)
  const [showSubOrg, setShowSubOrg] = useState(false)
  const [showProv, setShowProv] = useState(false)
  const [showCollec, setShowCollec] = useState(false)
  const [showFile, setShowFile] = useState(false)
  const [organitations, setOrganitations] = useState([])
  const [selecSubAdm, setselecSubAdm] = useState('')
  const [subAdmID, setSubAdmID] = useState('')
  const [subAdmVal, setSubAdmVal] = useState('')
  const [collecID, setCollecID] = useState('')
  const [collecVal, setCollecVal] = useState('')
  const [subAdministrations, setSubAdministrations] = useState([])
  const [selectedReg, setSelectedReg] = useState('')
  const [requester, setRequester] = useState('')
  const [provinces, setProvinces] = useState([])
  const [selectedSubReg, setSelectedSubReg] = useState('')
  const [collectives, setCollectives] = useState([])
  const [chosenOrgs, setChosenOrgs] = useState<{ id: string; name: string }[]>(
    []
  )
  const { locale, locales, asPath } = useRouter()

  const handleAdminChange = (selected: string) => {
    setSelectedOrg(selected)

    setShowProv(false)
    setShowCollec(false)
    setShowOrg(true)
  }

  const handleOrgChange = (selected: string) => {
    setShowSubOrg(false)
    setselecSubAdm('')
    setIdOrg(selected)

    setSubAdministrations([])
    setTimeout(() => {
      setShowSubOrg(true)
    }, 500)
  }

  const handleRegChange = (selected: string) => {
    setSelectedReg(selected)
    setShowProv(true)
    setShowCollec(false)
  }

  const handleSubRegChange = (selected: string) => {
    setSelectedSubReg(selected)
    setShowCollec(true)
  }

  const handleNvChange = (selected: string) => {
    setselecSubAdm(selected)
  }

  const handleSubAdminChange = (e: any, selected: string) => {
    setSubAdmVal(selected)
    const selectedID = e.target.options[e.target.selectedIndex].dataset.id
    setSubAdmID(selectedID)
  }

  const handleCollecChange = (e: any, selected: string) => {
    setCollecVal(selected)
    const selctedID = e.target.options[e.target.selectedIndex].dataset.id
    setCollecID(selctedID)
  }

  const handleAddChosenOrg = () => {
    if (subAdmVal) {
      setChosenOrgs((prev) => [...prev, { id: subAdmID, name: subAdmVal }])
      setSubAdmVal('')
    }

    if (collecVal) {
      setChosenOrgs((prev) => [...prev, { id: collecID, name: collecVal }])
      setCollecVal('')
    }

    setShowOrg(false)
    setShowOrgSec(false)
    setShowSubOrg(false)
    setShowProv(false)
    setShowCollec(false)
  }

  const handleRemoveChosenOrg = (orgID: string) => {
    const filteredOrgs = chosenOrgs.filter((chOrg) => chOrg.id != orgID)
    setChosenOrgs(filteredOrgs)
  }

  const handleShowOrcSec = () => {
    setShowOrg(false)
    setShowOrgSec(false)
    setShowSubOrg(false)
    setShowProv(false)
    setShowCollec(false)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const myFormData = new FormData(e.target)
    myFormData.append('chosenOrgs', JSON.stringify(chosenOrgs))
    const formDataObj = Object.fromEntries(myFormData.entries())
    ;(formDataObj.requestedInfo as any) = myFormData.getAll('requestedInfo')
    console.log({formDataObj})
    // axios
    //   .post('http://localhost:5000/create-pdf', formDataObj)
    //   .then((res) => console.log(res))
  }

  const getOrg = async (selected: string) => {
    const response = await axios(`https://chafafiya-api-json-server.herokuapp.com/${selected}`)
    setOrganitations(response?.data)
  }

  const getSubAdm = async (selected: string) => {
    const response = await axios(
      `https://chafafiya-api-json-server.herokuapp.com/subAdministrations?idOrg=${idOrg}&niveau=${selected}`
    )
    setSubAdministrations(response?.data)
  }

  const getProv = async (selected: string) => {
    const response = await axios(
      `https://chafafiya-api-json-server.herokuapp.com/subRegions?region=${selected}`
    )
    setProvinces(response?.data)
  }

  const getColl = async (selected: string) => {
    const response = await axios(
      `https://chafafiya-api-json-server.herokuapp.com/provinces?subRegion=${selected}`
    )
    setCollectives(response?.data)
  }

  useEffect(() => {
    setShowSubOrg(false)
    if (selectedOrg) getOrg(selectedOrg)
  }, [selectedOrg])

  useEffect(() => {
    getSubAdm(selecSubAdm)
  }, [selecSubAdm])

  useEffect(() => {
    getProv(selectedReg)
  }, [selectedReg])

  useEffect(() => {
    getColl(selectedSubReg)
  }, [selectedSubReg])

  return (
    <div className="font-arabic" dir="rtl">
     
     
      <div className="bg-cyan-600 px-14 py-4 text-3xl text-white">
        <h1>إيداع طلب الحصول على المعلومات</h1>
      </div>
      <div className="p-10">
        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex gap-20 border-2 px-14 py-8">
            <div className="basis-1/3">
              <h2 className="text-2xl font-bold">المؤسسة أو الهيئة المعنية</h2>
              <p>المؤسسة أو الهيئة الموجه إليها طلب الحصول على المعلومات</p>
            </div>

            <div className="basis-2/3">
              <div className="mb-2">
                {chosenOrgs.length > 0 ? (
                  <div>
                    {chosenOrgs.map((chOrg: any) => (
                      <div
                        className="ml-2 mb-2 inline-block cursor-pointer rounded-md bg-cyan-600 px-2 text-white"
                        key={chOrg.id}
                        onClick={() => handleRemoveChosenOrg(chOrg.id)}
                      >
                        <span>{chOrg.name}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          role="img"
                          width="1.5em"
                          height="1.5em"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 16 16"
                          className="inline-block"
                        >
                          <path
                            fill="currentColor"
                            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8L4.646 5.354a.5.5 0 0 1 0-.708z"
                          />
                        </svg>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p>لم يتم إختيار أي مؤسسة أو هيئة معنية</p>
                )}
              </div>
              {showOrgSec ? (
                <div>
                  <div className="text-lg">
                    <input
                      type="radio"
                      name="type"
                      className="ml-2"
                      value="administrations"
                      onChange={(e) => handleAdminChange(e.target.value)}
                    />
                    <label>
                      الإدارات العمومية (الوزارات وكتابات الدولة والمندوبيات
                      السامية والوزارية)
                    </label>
                  </div>
                  <div className="text-lg">
                    <input
                      type="radio"
                      name="type"
                      className="ml-2"
                      value="institutions"
                      onChange={(e) => handleAdminChange(e.target.value)}
                    />
                    <label>المؤسسات والمقاولات العمومية</label>
                  </div>
                  <div className="text-lg">
                    <input
                      type="radio"
                      name="type"
                      className="ml-2"
                      value="regions"
                      onChange={(e) => handleAdminChange(e.target.value)}
                    />
                    <label>الجماعات الترابية</label>
                  </div>
                  {showOrg && (
                    <>
                      <div className="mb-4">
                        {selectedOrg === 'regions' ? (
                          <select
                            name="organization"
                            className="mt-2 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-gray-600 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500"
                            onChange={(e) => handleRegChange(e.target.value)}
                          >
                            <option> -- إختر الجهة المعنية -- </option>
                            {organitations?.map((org: any, index: any) => (
                              <option key={index} value={org.identifiant}>
                                {org.nom}
                              </option>
                            ))}
                          </select>
                        ) : (
                          <select
                            name="organization"
                            className="mt-2 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-gray-600 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500"
                            onChange={(e) => handleOrgChange(e.target.value)}
                          >
                            <option>
                              {' '}
                              -- إختر المؤسسة أو الهيئة المعنية --{' '}
                            </option>
                            {organitations?.map((org: any, index: any) => (
                              <option key={index} value={org.id}>
                                {org.denomination}
                              </option>
                            ))}
                          </select>
                        )}
                      </div>
                      <hr />
                    </>
                  )}
                  {showSubOrg && (
                    <div className="mt-4">
                      <div className="ml-8 inline-block">
                        <input
                          type="radio"
                          name="niveau"
                          className="ml-2"
                          value="0"
                          onChange={(e) => handleNvChange(e.target.value)}
                        />
                        <label>مركزية</label>
                      </div>
                      <div className="ml-8 inline-block">
                        <input
                          type="radio"
                          name="niveau"
                          className="ml-2"
                          value="1"
                          onChange={(e) => handleNvChange(e.target.value)}
                        />
                        <label>جهوية</label>
                      </div>
                      <div className="ml-8 inline-block">
                        <input
                          type="radio"
                          name="niveau"
                          className="ml-2"
                          value="2"
                          onChange={(e) => handleNvChange(e.target.value)}
                        />
                        <label>إقليمية</label>
                      </div>
                      <div className="ml-8 inline-block">
                        <input
                          type="radio"
                          name="niveau"
                          className="ml-2"
                          value="3"
                          onChange={(e) => handleNvChange(e.target.value)}
                        />
                        <label>محلية</label>
                      </div>
                      <div>
                        <select
                          name="activity"
                          value={subAdmVal}
                          className="mt-2 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-gray-600 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500"
                          onChange={(e) =>
                            handleSubAdminChange(e, e.target.value)
                          }
                        >
                          <option> -- إختر القطاع المعني -- </option>
                          {subAdministrations?.map((subAdm: any) => (
                            <option key={subAdm.id} data-id={subAdm.id}>
                              {subAdm.denomination}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  )}
                  {showProv && (
                    <div>
                      <select
                        name="activity"
                        className="mt-2 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-gray-600 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500"
                        onChange={(e) => handleSubRegChange(e.target.value)}
                      >
                        <option>
                          {' '}
                          -- إختر المجلس الجهوي أو العمالة / الإقليم --{' '}
                        </option>
                        {provinces?.map((prov: any) => (
                          <option key={prov.id} value={prov.id}>
                            {prov.denomination}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                  {showCollec && (
                    <div>
                      <select
                        name="activity"
                        value={collecVal}
                        className="mt-2 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-gray-600 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500"
                        onChange={(e) => handleCollecChange(e, e.target.value)}
                      >
                        <option>
                          {' '}
                          -- إختر المجلس الإقليمي أو الجماعة المعنية --{' '}
                        </option>
                        {collectives?.map((coll: any) => (
                          <option key={coll.id} data-id={coll.id}>
                            {coll.denomination}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                  <div className="mt-3 flex justify-end gap-4 text-lg underline">
                    <button
                      className="flex gap-1 text-blue-900"
                      onClick={() => handleShowOrcSec()}
                    >
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
                <button
                  className="flex gap-1 text-blue-900"
                  onClick={() => setShowOrgSec(true)}
                >
                  <span className="text-md underline">
                    {' '}
                    إضافة مؤسسة أو هيئة معنية{' '}
                  </span>{' '}
                  <span className="text-2xl font-bold">+</span>
                </button>
              )}
            </div>
          </div>
          <div className="mb-4 flex gap-20 border-2 px-14 py-8">
            <div className="basis-1/3">
              <h2 className="text-2xl font-bold">نوع الطلب</h2>
            </div>
            <div className="flex basis-2/3 flex-col gap-3">
              <div className="text-lg">
                <input
                  type="radio"
                  name="requestType"
                  className="ml-2"
                  value="normalRequest"
                  onChange={() => setShowFile(false)}
                />
                <label>طلب عادي</label>
              </div>
              <div className="text-lg">
                <input
                  type="radio"
                  name="requestType"
                  className="ml-2"
                  value="urgentRequest"
                  onChange={() => setShowFile(true)}
                />
                <label>طلب استعجالي</label>
              </div>
              <p>
                (يتم اللجوء إلى الطلب الإستعجالي في الحالات التي يكون فيها
                الحصول على المعلومات ضروريا لحماية حياة وسلامة وحرية الأشخاص)
              </p>
              <textarea
                className="w-full rounded-md border border-gray-300 p-3 text-sm text-gray-600 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500"
                placeholder="تبرير دوافع الطلب الإستعجالي"
                name="urgentMessage"
                rows={4}
              ></textarea>
              {showFile && <input type="file" name="urgentFile" />}
            </div>
          </div>
          <div className="mb-4 flex gap-20 border-2 px-14 py-8">
            <div className="basis-1/3">
              <h2 className="text-2xl font-bold">بيانات شخصية</h2>
            </div>
            <div className="flex basis-2/3 flex-col gap-4">
              <div className="flex gap-4">
                <div className="flex-1">
                  <input
                    className="text-md w-full rounded-md border border-gray-300 p-3 text-sm text-gray-600 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500"
                    placeholder="الإسم الشخصي*"
                    name="firstname"
                    type="text"
                  />
                </div>
                <div className="flex-1">
                  <input
                    className="text-md w-full rounded-md border border-gray-300 p-3 text-sm text-gray-600 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500"
                    placeholder="الإسم العائلي*"
                    name="lastname"
                    type="text"
                  />
                </div>
              </div>
              <div>
                <input
                  className="text-md w-full rounded-md border border-gray-300 p-3 text-sm text-gray-600 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500"
                  placeholder="العنوان الشخصي*"
                  name="address"
                  type="text"
                />
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <input
                    className="text-md w-full rounded-md border border-gray-300 p-3 text-sm text-gray-600 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500"
                    placeholder="البريد الإكتروني*"
                    name="email"
                    type="text"
                  />
                </div>
                <div>
                  <input
                    className="text-md w-full rounded-md border border-gray-300 p-3 text-sm text-gray-600 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500"
                    placeholder="رقم الهاتف"
                    name="phone"
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-4 flex gap-20 border-2 px-14 py-8">
            <div className="basis-1/3">
              <h2 className="text-2xl font-bold">صاحب(ة) الطلب</h2>
            </div>
            <div className="basis-2/3">
              <div className="flex justify-between">
                <div className="text-sm">
                  <input
                    type="radio"
                    name="requestType"
                    className="ml-2"
                    value="citizin"
                    onChange={(e) => setRequester(e.target.value)}
                  />
                  <label>
                    مواطن(ة) مغربي(ة)، رقم البطاقة الوطنية للتعريف *
                  </label>
                </div>
                <div className="text-sm">
                  <input
                    type="radio"
                    name="requestType"
                    className="ml-2"
                    value="foreigner"
                    onChange={(e) => setRequester(e.target.value)}
                  />
                  <label>
                    مقيم أجنبي، رقم وثيقة إثبات الإقامة بصفة قانونية *
                  </label>
                </div>
              </div>
              {requester === 'foreigner' ? (
                <div className="mx-auto mt-8 w-1/2">
                  <input
                    className="text-md w-full rounded-md border border-gray-300 p-3 text-sm text-gray-600 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500"
                    placeholder="مقيم أجنبي، رقم وثيقة إثبات الإقامة بصفة قانونية *"
                    name="residenceNumber"
                    type="text"
                  />
                </div>
              ) : (
                <div className="mx-auto mt-8 w-1/2">
                  <input
                    className="text-md w-full rounded-md border border-gray-300 p-3 text-sm text-gray-600 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500"
                    placeholder="رقم البطاقة الوطنية للتعريف*"
                    name="cinNumber"
                    type="text"
                  />
                </div>
              )}
            </div>
          </div>
          <div className="mb-4 flex gap-20 border-2 px-14 py-8">
            <div className="basis-1/3">
              <h2 className="text-2xl font-bold">المعلومات المطلوبة</h2>
            </div>
            <div className="flex basis-2/3 flex-col gap-4">
              <div>
                <label className="text-lg">الموضوع *</label>
                <textarea
                  className="w-full rounded-md border border-gray-300 p-3 text-sm text-gray-600 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500"
                  placeholder="تحديد المعلومات المطلوبة..."
                  name="subject"
                  rows={4}
                ></textarea>
              </div>
              <div>
                <p className="text-lg">
                  الفترة الزمنية المعنية بالمعلومات المطلوبة :
                </p>
                <div className="flex gap-2">
                  <div className="flex-1">
                    <label>من</label>
                    <input
                      className="text-md w-full rounded-md border border-gray-300 p-3 text-sm text-gray-600 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500"
                      type="date"
                      name="from"
                    />
                  </div>
                  <div className="flex-1">
                    <label>إلى</label>
                    <input
                      className="text-md w-full rounded-md border border-gray-300 p-3 text-sm text-gray-600 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500"
                      type="date"
                      name="to"
                    />
                  </div>
                </div>
              </div>
              <div>
                <p className="mb-2 text-lg">المعلومات المطلوبة مضمنة ب *</p>
                <div className="flex flex-wrap justify-between">
                  {requestedInfo.map((reqInfo: any, index) => (
                    <div key={index} className="flex basis-1/3 gap-2 text-lg">
                      <input
                        type="checkbox"
                        name="requestedInfo"
                        value={reqInfo}
                      />
                      <label>{reqInfo}</label>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-2 text-lg">
                  الطريقة المرغوب فيها للحصول على المعلومات *
                </p>
                <div className="flex flex-wrap justify-between">
                  {receivedInfo.map((reqInfo: any, index) => (
                    <div key={index} className="flex basis-1/3 gap-2 text-lg">
                      <input type="radio" name="recievedInfo" value={reqInfo} />
                      <label>{reqInfo}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div>
            <button className="mt-4 w-fit rounded-md bg-cyan-600 px-12 py-2 text-lg text-white">
              إرسال
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Home
