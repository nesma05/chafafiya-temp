import { NoteIcon } from "../icons"

function SectionTitle({ title, subTilte }: any) {
  return (
    <div className="basis-1/3">
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="flex gap-2 rounded-md bg-secondary/20 p-2 text-xs">
        <span className="text-lg"><NoteIcon/></span>
        <p>يشرح النص المرفق وظائف هذا القسم. يشرح النص المرفق وظائف هذا القسم. يشرح
        النص المرفق وظائف هذا القسم. يشرح النص المرفق وظائف هذا القسم يشرح</p>
      </div>
    </div>
  )
}

export default SectionTitle
