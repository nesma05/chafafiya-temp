
const ToggleDrawer = ({handleDrawer}:any) => {
  return (
    <div className="fixed bottom-0 z-40 w-screen sm:w-fit sm:right-4 ">
    <button
      onClick={() => handleDrawer(true)}
      className=" w-full bg-main px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-fit sm:rounded-t-lg "
    >
      قاموس/مصطلحات
    </button>
  </div>
  )
}

export default ToggleDrawer