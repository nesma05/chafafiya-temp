import { useState } from 'react'
import DocumentInfo from './DocumentsInfo'
import ModalInfo from './ModalInfo'

const DocumentsSection = ({ documentsList }: any) => {
  const [modal, setModal] = useState(false)
  const [tempDoc, setTempDoc] = useState({})

  console.log({ tempDoc })

  const handleClose = () => {
    setTempDoc({})
    setModal(false)
  }

  const getDocument = (doc: any) => {
    setTempDoc(doc)
    setModal(true)
  }
  return (
    <>
      <ModalInfo doc={tempDoc} handleClose={handleClose} modal={modal} />
      <div className="my-20  mx-auto flex flex-wrap gap-4">
        {documentsList.map((doc: any, index:any) => (
          <DocumentInfo key={index} doc={doc} handleClick={() => getDocument(doc)} />
        ))}
      </div>
    </>
  )
}

export default DocumentsSection
