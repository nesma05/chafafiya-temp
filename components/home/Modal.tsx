import { CloseIcon } from '../icons'

const Modal = ({ tempSource, handleClose, modal }: any) => {
  return (
    <div className={modal ? 'modal open' : 'modal'}>
      {/* <img src={tempSource} className=" w-4/6 sm:w-3/6 h-auto" /> */}
      <iframe
        width="560"
        height="315"
        src={tempSource}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
      <span className="close" onClick={handleClose}>
        <CloseIcon />
      </span>
    </div>
  )
}

export default Modal
