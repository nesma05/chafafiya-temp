import { useState } from 'react'

const Pagination = ({
  data,
  currentPage,
  setCurrentPage,
  rowsPerPage,
  dataList,
  pageNumberLimit,
  maxPageNumberLimit,
  setmaxPageNumberLimit,
  minPageNumberLimit,
  setminPageNumberLimit,
}: any) => {
  const pageNumbers: number[] = []
  console.log('maxPageNumberLimit', maxPageNumberLimit)
  console.log('pageNumbers', pageNumbers)

  //   const [pageNumberLimit] = useState(5)
  //   const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5)
  //   const [minPageNumberLimit, setminPageNumberLimit] = useState(0)
  const handleNextbtn = () => {
    setCurrentPage(currentPage + 1)

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit)
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit)
    }
  }

  const handlePrevbtn = () => {
    setCurrentPage(currentPage - 1)

    if ((currentPage - 1) % pageNumberLimit == 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit)
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit)
    }
  }
  for (let i = 1; i <= Math.ceil(dataList.length / rowsPerPage); i++) {
    pageNumbers.push(i)
  }

  const paginate = (pageNumber: any) => setCurrentPage(pageNumber)
  return (
    <>
      {data.length > 0 && (
        <div className="my-10 w-full text-center">
          <nav>
            <ul className="inline-flex items-center -space-x-px">
              {minPageNumberLimit > 0 && (
                <li>
                  <button
                    onClick={handlePrevbtn}
                    disabled={currentPage == pageNumbers[0] ? true : false}
                    className="ml-0 block cursor-pointer rounded-l-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-300 hover:text-gray-700"
                  >
                    Prev
                  </button>
                </li>
              )}

              {pageNumbers.map((number: any) => {
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

              {maxPageNumberLimit < pageNumbers.length && <li>
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
              </li>}
            </ul>
          </nav>
        </div>
      )}
    </>
  )
}

export default Pagination
