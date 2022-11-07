import Image from 'next/image'
import { useState } from 'react'
import Modal from './Modal'

const PresentationSection = () => {
  const [modal, setModal] = useState(false)
  const [tempSource, setTempSource] = useState('')

  const handleClose = () => {
    setTempSource('')
    setModal(false)
  }

  const getSource = (source: any) => {
    setTempSource(source)
    setModal(true)
  }
  return (
    <>
      <Modal tempSource={tempSource} handleClose={handleClose} modal={modal} type={'video'} />
      <div className="relative my-20 mx-auto h-[300px] w-[80%] md:w-[55%] cursor-pointer">
        <Image
          onClick={() =>
            getSource('https://www.youtube.com/embed/btyV8NDdMzM')
          }
          src={'/img/play-video.jpg'}
          layout="fill"
          objectFit="cover"
          alt="présentation"
          priority
        />
      </div>
    </>
  )
}

export default PresentationSection
