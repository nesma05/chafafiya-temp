import { useState } from 'react'
import ImageVideoModal from '../home/ImageVideoModal'
import Modal from '../home/Modal'
import IllustrationDetails from './IllustrationDetails'

const IllustrationSection = ({
  illustrationsList,
  type,
  withModal = true,
}: any) => {
  const [modal, setModal] = useState(false)
  const [tempImg, setTempImg] = useState('')

  const handleClose = () => {
    setTempImg('')
    setModal(false)
  }

  const getDocument = (img: any) => {
    if (!withModal) return
    setTempImg(img)
    setModal(true)
  }
  return (
    <>
      <Modal handleClose={handleClose} modal={modal}>
        <ImageVideoModal tempSource={tempImg} type={type} />
      </Modal>
      <div className="mx-auto mb-20 flex flex-wrap gap-8">
        {illustrationsList.map((doc: any, index: any) => (
          <IllustrationDetails
            key={index}
            doc={doc}
            handleClick={() => getDocument(doc.media)}
          />
        ))}
      </div>
    </>
  )
}

export default IllustrationSection
