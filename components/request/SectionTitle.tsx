import { useState } from 'react'
import { NoteIcon } from '../icons'

function SectionTitle({ title, subTilte }: any) {
  const [showNote, setShowNote] = useState(false)
  return (
    <div className="basis-1/3">
      <div className="flex items-center gap-1">
        <h2 className="text-xl font-bold">{title}</h2>
        <span
          className="text-lg"
          onMouseEnter={() => setShowNote(true)}
          onMouseLeave={() => setShowNote(false)}
        >
          <NoteIcon />
        </span>
      </div>
      <div className="relative gap-2 rounded-md p-2 text-xs">
        <p
          className={`absolute bg-white p-1.5 shadow-md transition-all duration-150 ease-in-out ${
            showNote
              ? 'visible -translate-y-2 opacity-100'
              : 'invisible translate-y-0 opacity-0'
          }`}
        >
          يشرح النص المرفق وظائف هذا القسم. يشرح النص المرفق وظائف هذا القسم.
          يشرح النص المرفق وظائف هذا القسم. يشرح النص المرفق وظائف هذا القسم
          يشرح
        </p>
      </div>
    </div>
  )
}

export default SectionTitle
