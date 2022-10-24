import { NextPage } from 'next'
import { useState } from 'react'
import rows from '../utils/people.json'
import Pagination from '../components/Pagination'

const Table = ({ dir }) => {
  const columns = Object.keys(rows[0])
  console.log('length',rows.length)
  const [query, setQuery] = useState({
    col1: '',
    col2: '',
    col3: '',
    col4: '',
    col5: '',
    col6: '',
  })
  console.log('values', Object.values(query))
  const [currentPage, setCurrentPage] = useState(1)
  const [rowsPerPage] = useState(10)
  // const pageNumbers = []

  const [pageNumberLimit] = useState(5)
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5)
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0)

  const indexOfLastRows = currentPage * rowsPerPage
  const indexOfFirstRows = indexOfLastRows - rowsPerPage
  const currentRows = rows.slice(indexOfFirstRows, indexOfLastRows)

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

  
 const createFilters =()=>{
  const queryKeys = Object.keys(query)
  const mapedFilters = queryKeys.map((key,i)=>{
    return function(row) {
      return columns.some(
        (column) =>
          row[columns[i]].toLowerCase().indexOf(query[key].toLowerCase()) > -1
      )
    }
  })
  return mapedFilters
 }

  function filtering(rows) {
    return rows.filter(v => createFilters().every(f => f(v)))
    //return createFilters().reduce((accu, func) => accu.filter(func), rows)
    // return rows
    //   .filter((row) =>
    //     columns.some(
    //       (column) =>
    //         row[columns[0]].toLowerCase().indexOf(query.col1.toLowerCase()) > -1
    //     )
    //   )
    //   .filter((row) =>
    //     columns.some(
    //       (column) =>
    //         row[columns[1]].toLowerCase().indexOf(query.col2.toLowerCase()) > -1
    //     )
    //   )
    //   .filter((row) =>
    //     columns.some(
    //       (column) =>
    //         row[columns[2]].toLowerCase().indexOf(query.col3.toLowerCase()) > -1
    //     )
    //   )
    //   .filter((row) =>
    //     columns.some(
    //       (column) =>
    //         row[columns[3]].toLowerCase().indexOf(query.col4.toLowerCase()) > -1
    //     )
    //   )
    //   .filter((row) =>
    //     columns.some(
    //       (column) =>
    //         row[columns[4]].toLowerCase().indexOf(query.col5.toLowerCase()) > -1
    //     )
    //   )
    //   .filter((row) =>
    //     columns.some(
    //       (column) =>
    //         row[columns[5]].toLowerCase().indexOf(query.col6.toLowerCase()) > -1
    //     )
    //   )
  }
  //const currentRows = filtering(rows).slice(indexOfFirstRows, indexOfLastRows)

  const Filters = () => {
    if (Object.values(query).some(val=> val !== ''))
      return () => filtering(rows).slice(indexOfFirstRows, indexOfLastRows)
    else return () => filtering(currentRows)
  }

  const dataFilter = Filters()

  const handleInputChange = (e) => {
    const { name, value } = e.target
    if (dataFilter().length <= 10) {
      setCurrentPage(1)
      setminPageNumberLimit(0)
      setmaxPageNumberLimit(5)
    }
    setQuery({ ...query, [name]: value })
  }

  const dataList = () => (filtering(rows).length > 0 ? filtering(rows) : rows)

  // for (let i = 1; i <= Math.ceil(dataList().length / rowsPerPage); i++) {
  //   pageNumbers.push(i)
  // }

  // const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div>
      <div className="relative m-4 overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full border text-left text-sm text-gray-500">
          <thead className="text-md bg-gray-200 text-gray-700">
            <tr>
              {columns.map((column, index) => (
                <th key={column} className="py-3 px-6">
                  <div className="mb-2">
                    <input
                      className="w-full border border-gray-400 p-2 text-gray-800 outline-none placeholder:text-gray-800"
                      type="text"
                      name={`col${index + 1}`}
                      value={query[`col${index + 1}`]}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex cursor-pointer items-center gap-2">
                    {column}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataFilter().length > 0 ? (
              dataFilter().map((row, index) => (
                <tr key={index} className="border-b bg-white hover:bg-gray-50 ">
                  {columns.map((column) => (
                    <td key={column} className="py-2 px-4">
                      {row[column]}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td>There is no data to show</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <Pagination
        data={dataFilter()}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        rowsPerPage={rowsPerPage}
        dataList={dataList()}
        pageNumberLimit={pageNumberLimit}
        maxPageNumberLimit={maxPageNumberLimit}
        setmaxPageNumberLimit={setmaxPageNumberLimit}
        minPageNumberLimit={minPageNumberLimit}
        setminPageNumberLimit={setminPageNumberLimit}
      />
      {/* {dataFilter().length > 0 && (
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
export default Table
