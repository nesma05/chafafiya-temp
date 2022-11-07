import { CloseIcon } from '../icons'

const Modal = ({ tempSource, handleClose, modal, type }: any) => {
  return (
    <div className={modal ? 'modal open' : 'modal'}>
      {type === 'image' && (
        <img src={tempSource} className=" h-auto w-4/6 sm:w-3/6" />
      )}
      {type === 'video' && (
        <iframe
          width="560"
          height="315"
          src={`${tempSource}?rel=0`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      )}
      <span className="close" onClick={handleClose}>
        <CloseIcon />
      </span>
    </div>
  )
}

export default Modal
