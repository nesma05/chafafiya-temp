
function PersonalInfoDetails() {
  return (
    <div className="flex basis-2/3 flex-col gap-4">
    <div className="flex gap-4">
      <div className="flex-1">
        <input
          className="text-md w-full rounded-md border border-gray-300 p-3 text-sm text-gray-600 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500"
          placeholder="الإسم الشخصي*"
          name="firstname"
          type="text"
        />
      </div>
      <div className="flex-1">
        <input
          className="text-md w-full rounded-md border border-gray-300 p-3 text-sm text-gray-600 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500"
          placeholder="الإسم العائلي*"
          name="lastname"
          type="text"
        />
      </div>
    </div>
    <div>
      <input
        className="text-md w-full rounded-md border border-gray-300 p-3 text-sm text-gray-600 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500"
        placeholder="العنوان الشخصي*"
        name="address"
        type="text"
      />
    </div>
    <div className="flex gap-4">
      <div className="flex-1">
        <input
          className="text-md w-full rounded-md border border-gray-300 p-3 text-sm text-gray-600 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500"
          placeholder="البريد الإكتروني*"
          name="email"
          type="text"
        />
      </div>
      <div>
        <input
          className="text-md w-full rounded-md border border-gray-300 p-3 text-sm text-gray-600 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500"
          placeholder="رقم الهاتف"
          name="phone"
          type="text"
        />
      </div>
    </div>
  </div>
  )
}

export default PersonalInfoDetails