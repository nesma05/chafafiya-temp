import { useState } from 'react'
import rows from '../../utils/people.json'
import Pagination from '../Pagination'
import PageTitle from '../Layout/PageTitle'

const Table = () => {
  const columns = Object.keys(rows[0])
  console.log('length', rows.length)
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

  const createFilters = () => {
    const queryKeys = Object.keys(query)
    const mapedFilters = queryKeys.map((key, i) => {
      return function (row) {
        return columns.some(
          (column) =>
            row[columns[i]].toLowerCase().indexOf(query[key].toLowerCase()) > -1
        )
      }
    })
    return mapedFilters
  }

  function filtering(rows) {
    return rows.filter((v) => createFilters().every((f) => f(v)))
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
    if (Object.values(query).some((val) => val !== ''))
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

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full border text-left text-sm text-gray-500">
          <thead className="text-md bg-gray-100 text-gray-700">
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
    </div>
  )
}
export default Table
