import { useEffect, useState } from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import Modal from '../components/home/Modal'

import { EditIcon, UpIcon } from '../components/icons'

import SecondaryLayout, {
  PageWithSecondaryLayoutType,
} from '../components/Layout/SecondaryLayout'
import ResponsableHeader from '../components/responsable/ResponsableHeader'
import axios from 'axios'
import { illustrationsList, lawList, videosList } from '../utils/constants'
import QuestionAnswer from '../components/law/QuestionAnswer'
import config from '../utils/config'
import IllustrationsSection from '../components/law/IllustrationsSection'
import SubTitle from '../components/home/SubTitle'
import EditEntitiesModal from '../components/editContent/EditEntitiesModal'
import AddEntitiesModal from '../components/editContent/AddEntitiesModal'

const sideBarList = [
  {
    id: '01',
    text: 'الصفحات',
    main: 'yes',
    link: '/editContent',
  },
  {
    id: '02',
    text: 'بوابة الحصول على المعلومات',
  },
  {
    id: '03',
    text: 'ما هو القانون رقم 13-31',
  },
  {
    id: '04',
    text: 'كيف يمكنك تقديم طلب',
  },
  {
    id: '05',
    text: 'تدبير الإدارات',
    main: 'yes',
    link: '/editContent?adminNiveau=1',
  },
]

const adminList = [
  {
    id: 'ad01',
    name: 'وزارة الإسكان والتعمير',
    type: 'الإدارة العمومية',
  },
  {
    id: 'ad02',
    name: 'وزارة العدل',
    type: 'الإدارة العمومية',
  },
  {
    id: 'ad03',
    name: 'الأكاديمية الجهوية للتربية والتكوين الداخلة-وادي الذهب',
    type: 'المؤسسات والمقاولات العمومية',
  },
]

const langLists = [
  {
    id: 'l01',
    text: 'AR',
  },
  {
    id: 'l02',
    text: 'AMZ',
  },
  {
    id: 'l03',
    text: 'FR',
  },
  {
    id: 'l04',
    text: 'EN',
  },
]

const EditContent: PageWithSecondaryLayoutType = ({
  entite,
  singleEntite,
  adminNiveau,
  parentId,
}: any) => {
  const [selected, setSelected] = useState(null)
  const [selectedItem, setSelectedItem] = useState(0)
  const [toggleIndex, setToggleIndex] = useState(1)
  const [categories, setCategories] = useState([])
  const [entites, setEntites] = useState([])
  const [oneEntite, setOneEntite] = useState({})

  const [modal, setModal] = useState(false)
  const [editModal, setEditModal] = useState(false)

  const Router = useRouter()

  const { baseUrl } = config

  const handleClose = () => {
    setModal(false)
    setEditModal(false)
  }

  const handleToggle = (i: any) => {
    if (selected === i) {
      return setSelected(null)
    }

    return setSelected(i)
  }

  const handleItemClick = (index: any) => {
    setSelectedItem(index)
    setToggleIndex(index + 1)
  }

  const getResponse = () => {
    if (Array.isArray(entite)) return entite
    else return entite.secteurDetails
  }

  const handleReturn = () => {
    if (singleEntite.parentId)
      return Router.push(`/editContent?parentId=${singleEntite.parentId}`)
    else return Router.push(`/editContent?adminNiveau=1`)
  }

  const inputContent = () => {
    if (toggleIndex === 1) return 'ما هي بوابة الحصول على المعلومات؟'
    if (toggleIndex === 2) return 'ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ?'
    if (toggleIndex === 3)
      return "C'est quoi le portail de l'accés à l'information?"
    if (toggleIndex === 4) return 'What is the access to information portal?'
  }

  const getCategories = async () => {
    const CatygoryType = Router.query.adminNiveau ? 'PRIMARY' : 'SECONDARY'
    const response = await axios(
      `${baseUrl}/api/entite-category/${CatygoryType}`
    )

    setCategories(response?.data)
  }

  const getEntites = async () => {
    const response = await axios(`${baseUrl}/api/entite`)
    setEntites(response?.data)
  }

  const getOneEntite = async (id: any) => {
    setOneEntite({})
    const response = await axios(`${baseUrl}/api/entite/${id}`)

    // const response2 = await axios(
    //   `${baseUrl}/api/entite/${response?.data?.parentId}`
    // )
    const entiteToEdit = {
      id,
      //category: response?.data?.entCategory?.title_ar,
      categoryId: response?.data?.entCategory?.id,
      entiteName: response?.data?.denomination_ar,
      //parentName: response2?.data?.denomination_ar,
      parentEntiteId: response?.data?.parentId,
    }
    setOneEntite(entiteToEdit)
  }

  const handleAddAdmin = () => {
    getCategories()
    setModal(true)
  }

  const handleEditAdmin = (id: any) => {
    getOneEntite(id)
    getCategories()
    getEntites()
    setEditModal(true)
  }

  return (
    <div className="text-sm">
      <ResponsableHeader responsable={'Adminitrateur'} />
      <div className="flex w-full justify-start border-t-2 border-gray-300">
        <div className="w-[250px] bg-gray-600 text-white">
          <ul className="p-2">
            {sideBarList.map((ls: any) => (
              <li
                key={ls.id}
                className={`cursor-pointer ${
                  ls.main ? 'mb-1 border-b border-black p-1 font-bold' : 'p-2'
                }`}
              >
                {ls.link ? (
                  <NextLink href={ls.link} passHref>
                    <a>{ls.text}</a>
                  </NextLink>
                ) : (
                  ls.text
                )}
              </li>
            ))}
          </ul>
        </div>
        {!Router.query.adminNiveau && !Router.query.parentId && (
          <div className="flex-1">
            <div className="flex h-[200px] items-center">
              <div className="mx-auto flex w-[70%] items-center gap-3">
                <div className="flex-1">
                  <div className="flex gap-8">
                    <label className="mb-1.5 inline-block">
                      {' '}
                      عنوان الصفحة:
                    </label>
                    <div>
                      {langLists.map((lang: any, index: any) => (
                        <span
                          key={lang.id}
                          className={`cursor-pointer border-r-2 border-main px-2 font-bold ${
                            selectedItem === index ? 'text-main' : ''
                          }`}
                          onClick={() => handleItemClick(index)}
                        >
                          {lang.text}
                        </span>
                      ))}
                    </div>
                  </div>
                  <input
                    dir={toggleIndex > 1 ? 'ltr' : 'rtl'}
                    className="text-md mt-1.5 w-full rounded-md border border-gray-300 p-3 text-sm text-gray-800 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500"
                    placeholder="عنوان الصفحة"
                    name="firstname"
                    type="text"
                    defaultValue={inputContent()}
                  />
                </div>
              </div>
            </div>
            <div className="mx-auto mb-20 w-[80%]">
              <div className="overflow-hidden rounded-t-xl border">
                {lawList.map((list: any, index: any) => (
                  <QuestionAnswer
                    key={list.id}
                    term={list}
                    handleToggle={handleToggle}
                    index={index}
                    selected={selected}
                    responsable={true}
                  />
                ))}
              </div>
              <div className="mt-14 px-1">
                <SubTitle>رسوم بيانية</SubTitle>
                <IllustrationsSection
                  illustrationsList={illustrationsList}
                  type="image"
                  withModal={false}
                />
              </div>
              <div className="mt-14 px-1">
                <SubTitle>مقاطع مرئية</SubTitle>
                <IllustrationsSection
                  illustrationsList={videosList}
                  type="video"
                  withModal={false}
                />
              </div>
            </div>
          </div>
        )}
        {(Router.query.adminNiveau || Router.query.parentId) && (
          <div className="min-h-[500px] flex-1">
            <Modal showClose={false} modal={modal}>
              <AddEntitiesModal
                handleClose={handleClose}
                categories={categories}
                niveau={adminNiveau}
                parentId={parentId}
              />
            </Modal>
            <Modal showClose={false} modal={editModal}>
              <EditEntitiesModal
                handleClose={handleClose}
                categories={categories}
                entites={entites}
                oneEntite={oneEntite}
              />
            </Modal>
            <div className="p-8">
              {Router.query.parentId ? (
                <div className="flex items-center gap-10 text-lg underline">
                  <h1>
                    لائحة إدارات <span>{singleEntite.denomination_ar}</span>
                  </h1>
                  <h3
                    onClick={handleReturn}
                    className="flex cursor-pointer items-center text-sm text-main"
                  >
                    الرجوع إلى الأعلى{' '}
                    <span className="text-xl">
                      <UpIcon />
                    </span>
                  </h3>
                </div>
              ) : (
                <h1 className="text-lg underline">لائحة إدارات المستوى 1</h1>
              )}

              <div className="text-left">
                <button
                  onClick={handleAddAdmin}
                  className="mx-2 rounded-md bg-main py-1.5 px-2 text-white sm:px-3"
                >
                  {adminNiveau ? (
                    <>
                      <span> إضافة إدارة من المستوى </span>
                      <span>{adminNiveau}</span>
                    </>
                  ) : (
                    <span> إضافة إدارة فرعية </span>
                  )}
                </button>
              </div>
              <div className="mt-8 flex flex-col ">
                <div className="-my-2 overflow-x-auto">
                  <div className="inline-block w-full py-2 align-middle ">
                    <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
                      <table className="w-full divide-y divide-gray-200">
                        <tbody className="divide-y  divide-gray-200 bg-white">
                          {getResponse()?.map((row: any) => (
                            <tr
                              key={row.id}
                              className="cursor-pointer font-medium"
                            >
                              <td className="w-[50%] px-2 py-2 font-bold text-gray-900">
                                {row.denomination_ar}
                              </td>
                              <td className="px-2 py-2 text-left text-gray-500">
                                {row.entCategory?.title_ar}
                              </td>
                              <td className="flex items-center justify-end gap-3 px-2 py-2 ">
                                <button
                                  onClick={() => handleEditAdmin(row.id)}
                                  className="flex items-center gap-1 rounded-lg border border-main py-1 px-2 text-main"
                                >
                                  <span>تحيين</span>
                                  <span>
                                    <EditIcon />
                                  </span>
                                </button>
                                <NextLink
                                  href={`/editContent?parentId=${row.id}`}
                                  passHref
                                >
                                  <a className="text-main underline">
                                    الإدارة الفرعية
                                  </a>
                                </NextLink>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
export default EditContent

export async function getServerSideProps({ query }: any) {
  const { adminNiveau, parentId } = query
  let entite: any
  let singleEntite: any

  if (adminNiveau)
    entite = await axios(
      `http://194.60.201.174:444/api/entite/niveau/${adminNiveau}`
    )
  if (parentId) {
    entite = await axios(
      `http://194.60.201.174:444/api/entite/children/${parentId}`
    )
    singleEntite = await axios(
      `http://194.60.201.174:444/api/entite/${parentId}`
    )
  }

  return {
    props: {
      entite: entite?.data ? entite?.data : null,
      singleEntite: singleEntite?.data ? singleEntite?.data : null,
      adminNiveau: adminNiveau ? adminNiveau : '',
      parentId: parentId ? parentId : '',
    },
  }
}

EditContent.getLayout = SecondaryLayout
