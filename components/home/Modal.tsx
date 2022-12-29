import { CloseIcon } from '../icons'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })
import 'react-quill/dist/quill.snow.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
      { align: ['', 'right', 'center', 'justify'] },
    ],
    ['link', 'image', 'video'],
    ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
}

const editorContent = `<div style='text-align:right'>
<p>
          وفقا fحكام الدستور، لا سيما المادة 27 منه، يحدد القانون 13.31 المتعلق
          بالحق في الوصول إلى المعلومات نطاق الحق في الوصول إلى المعلومات التي
          تحتفظ بها ا,دارات العامة والمؤسسات والهيئات المنتخبة التي تقدم الخدمة
          العامة، وكذلك شروط وإجراءات التي تقدم
        </p>
        <img src="/img/faqtmage.png" alt="" />
</div>`

const Modal = ({
  tempSource,
  handleClose,
  modal,
  type,
  categories,
  entites,
  entiteID,
  niveau,
  parentId,
}: any) => {
  console.log('Entite', entiteID)
  const [category, setCategory] = useState('')
  const [categoryID, setCategoryID] = useState('')
  const [administration, setAdministration] = useState('')
  const [parentEntite, setParentEntite] = useState('')
  const [parentEntiteID, setParentEntiteID] = useState('')

  console.log('entiteID', entiteID)

  const Router = useRouter()

  const sentAddedData = {
    parentId: parentId ? parentId : null,
    entCategoryId: categoryID,
    denomination_ar: administration,
    niveau: niveau,
  }

  const sentEditedData = {
    parentId: parentEntiteID ? parentEntiteID : 0,
    entCategory: categoryID,
    denomination_ar: administration,
    niveau: !parentEntiteID ? 1 : null,
  }

  const handleCatChange = (e: any) => {
    setCategory(e.target.value)
    setCategoryID(e.target.options[e.target.selectedIndex].dataset.id)
  }

  const handleParentChange = (e: any) => {
    setParentEntite(e.target.value)
    setParentEntiteID(e.target.options[e.target.selectedIndex].dataset.id)
  }

  const handleSave = (type: string) => {
    if (type === 'add') {
      console.log('add')
      axios
        .post('http://194.60.201.174:444/api/entite', sentAddedData)
        .then((res: any) => {
          if (res) {
            Router.push(`${Router.asPath}`)
            handleClose()
          }
        })
    } else {
      console.log('edit')
      axios
        .patch(
          `http://194.60.201.174:444/api/entite/${entiteID}`,
          sentEditedData
        )
        .then((res: any) => {
          if (res) {
            Router.push(`${Router.asPath}`)
            handleClose()
          }
        })
    }
  }

  const getEntite = async (id: any) => {
    const response = await axios(`http://194.60.201.174:444/api/entite/${id}`)
    setAdministration(response?.data?.denomination_ar)
    setCategory(response?.data?.entCategory?.title_ar)

    const response2 = await axios(
      `http://194.60.201.174:444/api/entite/${response?.data?.parentId}`
    )
    setParentEntite(response2?.data?.denomination_ar)
  }

  useEffect(() => {
    getEntite(entiteID)

    return () => {
      setCategory('')
      setCategoryID('')
      setAdministration('')
      setParentEntite('')
    }
  }, [entiteID])

  return (
    <div className={modal ? 'modal open' : 'modal'}>
      {type === 'image' && (
        <img src={tempSource} className=" h-auto w-4/6 sm:w-3/6" />
      )}
      {type === 'video' && (
        <iframe
          width="560"
          height="315"
          src={tempSource}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      )}
      {type === 'respQuesAns' && (
        <div className="sm:w-6/6 flex h-[90%] w-5/6 items-start rounded-lg bg-white py-4">
          <div className="mx-auto w-[95%]">
            <div>
              <div className="flex gap-8">
                <label className="mb-1.5 inline-block">نص السؤال:</label>
                <div>
                  <span className="cursor-pointer border-r-2 border-main px-2 font-bold text-main">
                    AR
                  </span>
                  <span className="cursor-pointer border-r-2 border-main px-2">
                    AMZ
                  </span>
                  <span className="cursor-pointer border-r-2 border-main px-2">
                    FR
                  </span>
                  <span className="cursor-pointer border-r-2 border-main px-2">
                    EN
                  </span>
                </div>
              </div>
              <input
                className="text-md w-full rounded-md border border-gray-300 p-3 text-sm text-gray-800 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500"
                name="firstname"
                type="text"
                value={
                  'تقديم حول القانون رقم 13.31 المتعلق بالحق في الوصول إلى المعلومات'
                }
              />
            </div>
            <div className="mt-12">
              <div className="flex gap-8">
                <label className="mb-1.5 inline-block">نص الجواب:</label>
                <div>
                  <span className="cursor-pointer border-r-2 border-main px-2 font-bold text-main">
                    AR
                  </span>
                  <span className="cursor-pointer border-r-2 border-main px-2">
                    AMZ
                  </span>
                  <span className="cursor-pointer border-r-2 border-main px-2">
                    FR
                  </span>
                  <span className="cursor-pointer border-r-2 border-main px-2">
                    EN
                  </span>
                </div>
              </div>
              <ReactQuill
                modules={modules}
                theme="snow"
                value={editorContent}
              />
            </div>
            <button className="mt-2 rounded-md bg-main py-2 px-5 text-white">
              حفظ
            </button>
          </div>
        </div>
      )}
      {type === 'addAdminLevel1' && (
        <div className="h-[400px] w-[500px] overflow-hidden rounded bg-white">
          <h2 className="bg-gray-300 py-2 px-6 font-bold">إضافة إدارة جديدة</h2>
          <div className="flex flex-col gap-10 p-10">
            <div>
              <label className="">اختيار الصنف:</label>
              <select
                name="category"
                className="mt-1 w-full rounded-md border border-gray-300 bg-white py-1 px-3 text-gray-600 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500"
                value={category}
                onChange={handleCatChange}
              >
                <option>-- إختيار الصنف --</option>
                {categories?.map((cat: any) => (
                  <option key={cat.id} data-id={cat.id}>
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
            <button onClick={handleClose} className="text-main underline">
              إلغاء
            </button>
            <button
              onClick={() => handleSave('add')}
              className="mx-2 rounded-md bg-main py-1.5 px-2 text-white sm:px-3"
            >
              حفظ
            </button>
          </div>
        </div>
      )}
      {type === 'editAdmin' && (
        <div className="h-[500px] w-[500px] overflow-hidden rounded bg-white">
          <h2 className="bg-gray-300 py-2 px-6 font-bold">تحيين الإدارة</h2>
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
            <div>
              <label>إختر الإنتماء: </label>
              <select
                name="parentEntite"
                className="mt-1 w-full rounded-md border border-gray-300 bg-white py-1 px-3 text-gray-600 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500"
                value={parentEntite}
                onChange={handleParentChange}
              >
                <option>-- إختيار الإنتماء --</option>
                {entites?.map((ent: any) => (
                  <option
                    key={ent.id}
                    data-id={ent.id}
                    value={ent.denomination_ar}
                  >
                    {ent.denomination_ar}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex justify-end gap-4 px-10">
            <button onClick={handleClose} className="text-main underline">
              إلغاء
            </button>
            <button
              onClick={() => handleSave('edit')}
              className="mx-2 rounded-md bg-main py-1.5 px-2 text-white sm:px-3"
            >
              حفظ
            </button>
          </div>
        </div>
      )}
      <span className="close" onClick={handleClose}>
        <CloseIcon />
      </span>
    </div>
  )
}

export default Modal
