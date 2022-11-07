import { useState } from 'react'
import Modal from '../home/Modal'
import IllustrationDetails from './IllustrationDetails'

const PicturesSection = ({ illustrationsList,type }: any) => {
  const [modal, setModal] = useState(false)
  const [tempImg, setTempImg] = useState('')

  console.log({ tempImg })

  const handleClose = () => {
    setTempImg('')
    setModal(false)
  }

  const getDocument = (img: any) => {
    setTempImg(img)
    setModal(true)
  }
  return (
    <>
      <Modal
        tempSource={tempImg}
        handleClose={handleClose}
        modal={modal}
        type={type}
      />
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

export default PicturesSection
