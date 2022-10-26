import { useState } from 'react'

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
          <input type="file" name="urgentFile" />
        </div>
      )}
    </div>
  )
}

export default RequestTypeDetails
