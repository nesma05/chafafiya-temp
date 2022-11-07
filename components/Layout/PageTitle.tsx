import BreadCrumb from "./BreadCrumb"

const PageTitle = ({ children }: any) => {
  return (
    <div className="flex items-center justify-center h-[200px] mb-10 bg-main p-4 text-3xl text-white relative -skew-y-[2deg] before:absolute before:content-[''] before:h-[50%] before:w-[100%] before:top-0 before:bg-main before:skew-y-[2deg]">
      <div className="skew-y-[2deg]">
      <h1 className="text-3xl">{children} </h1>
      <BreadCrumb/>
      </div>
    </div>
  )
}

export default PageTitle
