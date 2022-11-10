import { useState } from 'react'
import { AttachmentIcon } from '../icons'

function RequestTypeDetails() {
  const [showUrgent, setShowUrgent] = useState(false)
  return (
    <div className="flex basis-2/3 flex-col gap-3">
      <div className="">
        <input
          type="radio"
          name="requestType"
          className="ml-2"
          value="normalRequest"
          onChange={() => setShowUrgent(false)}
        />
        <label>طلب عادي</label>
      </div>
      <div className="">
        <input
          type="radio"
          name="requestType"
          className="ml-2"
          value="urgentRequest"
          onChange={() => setShowUrgent(true)}
        />
        <label>طلب استعجالي</label>
      </div>
      {showUrgent && (
        <div>
          <p>
            (يتم اللجوء إلى الطلب الإستعجالي في الحالات التي يكون فيها الحصول
            على المعلومات ضروريا لحماية حياة وسلامة وحرية الأشخاص)
          </p>
          <textarea
            className="w-full rounded-md border border-gray-300 p-3 text-sm text-gray-600 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500"
            placeholder="تبرير دوافع الطلب الإستعجالي"
            name="urgentMessage"
            rows={4}
          ></textarea>

          <div>
            <label
              htmlFor="inputFileResp"
              className="flex w-fit cursor-pointer items-center gap-2"
            >
              <div className="flex gap-2 rounded-md bg-secondary p-2 text-sm">
                <span className='text-lg'>
                  <AttachmentIcon />{' '}
                </span>
                <span> إضافة ملف</span>
              </div>
              <input
                type="file"
                name="urgentFile"
                id="inputFileResp"
                className="hidden"
              />
            </label>
          </div>
        </div>
      )}
    </div>
  )
}

export default RequestTypeDetails
