import Image from 'next/image'
import { useState } from 'react'
import { InfoIcon, NoteIcon, PlayIcon } from '../icons'
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
      <div onClick={() =>
            getSource('https://www.youtube.com/embed/btyV8NDdMzM')} className="relative bg-[#e3feff] overflow-hidden my-20 mx-auto h-[250px] w-[80%] md:w-[55%] cursor-pointer">
        {/* <Image
          
          }
          src={'/img/play-video.jpg'}
          layout="fill"
          objectFit="cover"
          alt="présentation"
          priority
        /> */}
        <h2 className='text-2xl w-[270px] absolute left-8 sm:left-16 top-[30%] font-semibold'>كيف يمكنك تقديم طلب الحصول على المعلومات؟</h2>
        <span className='text-5xl absolute bottom-8 left-8'><PlayIcon/></span>
        <span className='text-[10rem] sm:text-[13rem] absolute -bottom-12 sm:-bottom-16 -right-10 sm:-right-14 text-white'><InfoIcon/></span>
      </div>
    </>
  )
}

export default PresentationSection
