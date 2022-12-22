import { useState } from 'react'
import { useRouter } from 'next/router'
import { MinusIcon, NextIcon, PreviousIcon } from '../icons'
import Modal from './Modal'

const slides = [
    {
      imagePath: '/img/caroussel-1.png',
      targetUrl:'https://www.youtube.com/embed/btyV8NDdMzM'
    },
    {
      imagePath: '/img/caroussel-2.png',
      targetUrl:'/law'
    },
    {
      imagePath: '/img/caroussel-3.png',
      targetUrl:'/portal'
    },
    {
      imagePath: '/img/caroussel-4.png',
      targetUrl:'/howReq'
    },
   
  ]

const Carroussel = () => {

  const [currentIndex, setCurrentIndex] = useState(0)
  const [modal, setModal] = useState(false)
  const [tempSource, setTempSource] = useState('')
  const {push}=useRouter()

  const handleClose = () => {
    setTempSource('')
    setModal(false)
  }

  const handleClick = () => {
    if(currentIndex === 0) {
        setTempSource(slides[currentIndex].targetUrl)
        setModal(true)
        return
        
    }
    push(slides[currentIndex].targetUrl)
  }
 
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  return (
    <>
    <Modal tempSource={tempSource} handleClose={handleClose} modal={modal} type={'video'} />
    <div className="group relative m-auto h-[350px] w-[60%] py-16 px-4">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].imagePath})` }}
        className="h-full w-full bg-cover bg-center duration-500 cursor-pointer"
        onClick={handleClick}
      ></div>
      {/* Left Arrow */}
      <div
        onClick={nextSlide}
        className="absolute top-[50%] left-5 hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block"
      >
        <PreviousIcon />
      </div>
      {/* Right Arrow */}
      <div
        onClick={prevSlide}
        className="absolute top-[50%] right-5 hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block"
      >
        <NextIcon />
      </div>
      <div className="top-4 flex justify-center gap-1 py-2">
        {slides.map((slide, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`cursor-pointer text-2xl text-gray-400 ${currentIndex === index && 'text-secondary'}`}
          >
            <MinusIcon />
          </span>
        ))}
      </div>
    </div>
    </>
  )
}

export default Carroussel
