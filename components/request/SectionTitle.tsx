
function SectionTitle({title,subTilte}:any) {
  return (
    <div className="basis-1/3">
      <h2 className="text-xl font-bold">{title}</h2>
      <p>{subTilte}</p>
    </div>
  )
}

export default SectionTitle
