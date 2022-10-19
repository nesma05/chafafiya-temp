import { useState } from "react"

function RequestOwnerDetails() {
    const [requester,setRequester] =useState('')
  return (
    <div className="basis-2/3">
    <div className="flex justify-between">
      <div className="text-sm">
        <input
          type="radio"
          name="requester"
          className="ml-2"
          value="citizin"
          onChange={(e) => setRequester(e.target.value)}
        />
        <label>
          مواطن(ة) مغربي(ة)، رقم البطاقة الوطنية للتعريف *
        </label>
      </div>
      <div className="text-sm">
        <input
          type="radio"
          name="requester"
          className="ml-2"
          value="foreigner"
          onChange={(e) => setRequester(e.target.value)}
        />
        <label>
          مقيم أجنبي، رقم وثيقة إثبات الإقامة بصفة قانونية *
        </label>
      </div>
    </div>
    {requester === 'foreigner' ? (
      <div className="mx-auto mt-8 w-1/2">
        <input
          className="text-md w-full rounded-md border border-gray-300 p-3 text-sm text-gray-600 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500"
          placeholder="مقيم أجنبي، رقم وثيقة إثبات الإقامة بصفة قانونية *"
          name="cinNumber"
          type="text"
        />
      </div>
    ) : (
      <div className="mx-auto mt-8 w-1/2">
        <input
          className="text-md w-full rounded-md border border-gray-300 p-3 text-sm text-gray-600 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500"
          placeholder="رقم البطاقة الوطنية للتعريف*"
          name="cinNumber"
          type="text"
        />
      </div>
    )}
  </div>
  )
}

export default RequestOwnerDetails