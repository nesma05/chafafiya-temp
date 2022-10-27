import BreadCrumb from "./BreadCrumb"

const PageTitle = ({ children }: any) => {
  return (
    <div className="flex flex-col gap-5 items-center justify-center h-[200px] mb-10 bg-main p-4 text-center text-3xl text-white relative after:absolute after:content-[''] after:h-[25%] after:w-[100%] after:bg-main after:left-0 after:-bottom-6 after:-skew-y-2">
      <h1 className="text-3xl">{children} </h1>
      <BreadCrumb/>
    </div>
  )
}

export default PageTitle
