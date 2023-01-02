import Image from 'next/image'
import { useState } from 'react'
import { InfoIcon, NoteIcon, PlayIcon } from '../icons'
import Modal from './Modal'
import PresentationModal from './ImageVideoModal'

const PresentationSection = () => {
  const [modal, setModal] = useState(false)
  const [tempSource, setTempSource] = useState('')

  const handleClose = () => {
    setTempSource('')
    setModal(false)
  }

  const getSource = (source: string) => {
    setTempSource(source)
    setModal(true)
  }
  return (
    <>
      <Modal handleClose={handleClose} modal={modal}>
        {/* <PresentationModal tempSource={tempSource}/> */}
        <div className="h-10 w-10 bg-white"></div>
      </Modal>
      <div
        onClick={() => getSource('https://www.youtube.com/embed/btyV8NDdMzM')}
        className="relative my-20 mx-auto h-[250px] w-[80%] cursor-pointer overflow-hidden bg-secondary/30 md:w-[55%]"
      >
        <h2 className="absolute left-8 top-[30%] w-[270px] text-2xl font-semibold sm:left-16">
          كيف يمكنك تقديم طلب الحصول على المعلومات؟
        </h2>
        <span className="absolute bottom-8 left-8 text-5xl">
          <PlayIcon />
        </span>
        <span className="absolute -bottom-12 -right-10 text-[10rem] text-white sm:-bottom-16 sm:-right-14 sm:text-[13rem]">
          <InfoIcon />
        </span>
      </div>
    </>
  )
}

export default PresentationSection
