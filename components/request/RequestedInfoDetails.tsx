import { receivedInfo, requestedInfo } from "../../utils/constants"

function RequestedInfoDetails() {
  return (
    <div className="flex basis-2/3 flex-col gap-4">
    <div>
      <label>الموضوع *</label>
      <textarea
        className="w-full rounded-md border border-gray-300 p-3 mt-1 text-gray-600 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500"
        placeholder="تحديد المعلومات المطلوبة..."
        name="subject"
        rows={4}
      ></textarea>
    </div>
    <div>
      <p>
        الفترة الزمنية المعنية بالمعلومات المطلوبة :
      </p>
      <div className="flex gap-2">
        <div className="flex-1">
          <label>من</label>
          <input
            className="text-md w-full rounded-md border border-gray-300 p-3 text-sm text-gray-600 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500"
            type="date"
            name="from"
          />
        </div>
        <div className="flex-1">
          <label>إلى</label>
          <input
            className="text-md w-full rounded-md border border-gray-300 p-3 text-sm text-gray-600 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500"
            type="date"
            name="to"
          />
        </div>
      </div>
    </div>
    <div>
      <p className="mb-2">المعلومات المطلوبة مضمنة ب *</p>
      <div className="flex flex-wrap justify-between">
        {requestedInfo.map((reqInfo: any, index) => (
          <div key={index} className="flex basis-1/3 gap-2">
            <input
              type="checkbox"
              name="requestedInfo"
              value={reqInfo}
            />
            <label>{reqInfo}</label>
          </div>
        ))}
      </div>
    </div>
    <div>
      <p className="mb-2">
        الطريقة المرغوب فيها للحصول على المعلومات *
      </p>
      <div className="flex flex-wrap justify-between">
        {receivedInfo.map((reqInfo: any, index) => (
          <div key={index} className="flex basis-1/3 gap-2">
            <input type="radio" name="recievedInfo" value={reqInfo} />
            <label>{reqInfo}</label>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default RequestedInfoDetails