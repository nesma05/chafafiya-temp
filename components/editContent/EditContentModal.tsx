
import dynamic from 'next/dynamic'
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })
import 'react-quill/dist/quill.snow.css'

const EditContentModal =() => {
   
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
  return (
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
                defaultValue={ 'تقديم حول القانون رقم 13.31 المتعلق بالحق في الوصول إلى المعلومات'}         
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
  )
}



export default EditContentModal