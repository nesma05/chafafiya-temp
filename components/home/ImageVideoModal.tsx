const ImageVideoModal = ({ tempSource, type }: any) => {
  return (
    <div>
      {type === 'image' && (
        <img src={tempSource}/>
      )}

      {type === 'video' && (
        <iframe
          width="560"
          height="315"
          src={tempSource}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      )}
    </div>
  )
}

export default ImageVideoModal
