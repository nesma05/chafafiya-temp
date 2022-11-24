import { useRouter } from 'next/router'
import { useState } from 'react'
import Pagination from '../Pagination'
import { responsableComplList } from './ComplSideBar'

const ResDetails = ({ rows, open }: any) => {
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(1)
  const [rowsPerPage] = useState(10)
  //const pageNumbers = []

  const [pageNumberLimit] = useState(5)
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5)
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0)

  const indexOfLastRows = currentPage * rowsPerPage
  const indexOfFirstRows = indexOfLastRows - rowsPerPage
  const currentRows = rows.slice(indexOfFirstRows, indexOfLastRows)
  console.log('indexOfFirstRows', indexOfFirstRows)
  console.log('indexOfLastRows', indexOfLastRows)

  // const handleNextbtn = () => {
  //   setCurrentPage(currentPage + 1)

  //   if (currentPage + 1 > maxPageNumberLimit) {
  //     setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit)
  //     setminPageNumberLimit(minPageNumberLimit + pageNumberLimit)
  //   }
  // }

  // const handlePrevbtn = () => {
  //   setCurrentPage(currentPage - 1)

  //   if ((currentPage - 1) % pageNumberLimit == 0) {
  //     setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit)
  //     setminPageNumberLimit(minPageNumberLimit - pageNumberLimit)
  //   }
  // }

  // for (let i = 1; i <= Math.ceil(rows.length / rowsPerPage); i++) {
  //   pageNumbers.push(i)
  // }

  // const paginate = (pageNumber: any) => setCurrentPage(pageNumber)

  const truncate = (source: any, size: any) => {
    return source.length > size ? source.slice(0, size - 1) + '…' : source
  }

  return (
    <div className="flex-1">
      <div className="mt-10 px-4">
        <ul className="flex w-full gap-4">
          {responsableComplList
            .filter((respList: any, i: any) => i !== 0)
            .map((resList: any, i: any) => (
              <li
                key={i}
                className="flex items-center border-2 border-slate-700 px-2 py-1"
              >
                <span>{resList.icon}</span>
                <span
                  dangerouslySetInnerHTML={{ __html: `${resList.title}` }}
                />
              </li>
            ))}
        </ul>
      </div>
      <div className="mt-8 flex flex-col ">
        <div className="-my-2 overflow-x-auto">
          <div className="inline-block w-full py-2 align-middle ">
            <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
              <table className="w-full table-fixed divide-y divide-gray-200">
                <tbody className="divide-y  divide-gray-200 bg-white">
                  {currentRows.map((row: any) => (
                    // <tr key={row._id}>
                    //   <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                    //     {row.name}
                    //   </td>
                    //   <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                    //     {row.address}
                    //   </td>
                    //   <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                    //     {row.company}
                    //   </td>
                    // </tr>
                    <tr
                      key={row.code}
                      className="cursor-pointer font-medium"
                      onClick={() => router.push(`/complResponsable/${row.code}`)}
                    >
                      <td className="w-[150px] truncate whitespace-nowrap px-6 py-4 font-medium text-gray-900">
                        {row.demandeur}
                      </td>
                      <td className="truncate whitespace-nowrap px-6 py-4 text-gray-500">
                        {row.contenu_demande}
                      </td>
                      <td className="w-[220px] truncate whitespace-nowrap px-6 py-4 text-left text-gray-500">
                        {row.date_demande}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Pagination
        data={rows}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        rowsPerPage={rowsPerPage}
        dataList={rows}
        pageNumberLimit={pageNumberLimit}
        maxPageNumberLimit={maxPageNumberLimit}
        setmaxPageNumberLimit={setmaxPageNumberLimit}
        minPageNumberLimit={minPageNumberLimit}
        setminPageNumberLimit={setminPageNumberLimit}
      />
      {/* {rows.length > 0 && (
        <div className="my-10 w-full text-center">
          <nav>
            <ul className="inline-flex items-center -space-x-px">
              <li>
                <button
                  onClick={handlePrevbtn}
                  disabled={currentPage == pageNumbers[0] ? true : false}
                  className="ml-0 block cursor-pointer rounded-l-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-300 hover:text-gray-700"
                >
                  Prev
                </button>
              </li>

              {pageNumbers.map((number) => {
                if (
                  number < maxPageNumberLimit + 1 &&
                  number > minPageNumberLimit
                ) {
                  return (
                    <li
                      key={number}
                      className={`cursor-pointer border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-300 hover:text-gray-700  ${
                        currentPage == number
                          ? 'border border-blue-300 bg-blue-200 hover:bg-blue-100 hover:text-blue-700'
                          : ''
                      }`}
                      onClick={() => paginate(number)}
                    >
                      {number}
                    </li>
                  )
                } else {
                  return null
                }
              })}

              <li>
                <button
                  onClick={handleNextbtn}
                  disabled={
                    currentPage == pageNumbers[pageNumbers.length - 1]
                      ? true
                      : false
                  }
                  className="block cursor-pointer rounded-r-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-300 hover:text-gray-700"
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
     )} */}
    </div>
  )
}

export default ResDetails
