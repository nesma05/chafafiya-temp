import axios from 'axios'
import { useEffect, useState } from 'react'

const DomainsDetails = () => {
  const [selectedDomain, setSelectedDomain] = useState('')
  const [domains, setDomains] = useState([])
  const [SubDomains, setSubDomains] = useState([])

  const getDomains = async () => {
    const response = await axios(`https://chafafiya-api-json-server.herokuapp.com/domains`
    )
    setDomains(response?.data)
  }

  const getSubDomains = async (selected:any) => {
    const response = await axios(`https://chafafiya-api-json-server.herokuapp.com/subDomains?domain=${selected}`
    )
    setSubDomains(response?.data)
  }

  useEffect(()=>{
    getDomains()
  },[])

  useEffect(()=>{
    getSubDomains(selectedDomain)
  },[selectedDomain])

  return (
    <div className='basis-2/3'>
      <select
        name="domain"
        className="mt-2 rounded-md border border-gray-300 bg-white py-2 px-3 text-gray-600 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500"
        onChange={(e:any)=> setSelectedDomain(e.target.value)}
      >
        <option> -- إختر المجال -- </option>
        {domains?.map((dom: any, index: any) => (
          <option key={index} value={dom.id}>
            {dom.title}
          </option>
        ))}
      </select>
      <select
        name="subDomain"
        className="mt-2 sm:mx-2 rounded-md border border-gray-300 bg-white py-2 px-3 text-gray-600 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500"
      >
        <option> -- إختر المجال الفرعي -- </option>
        {SubDomains?.map((dom: any, index: any) => (
          <option key={index} value={dom.id}>
            {dom.title}
          </option>
        ))}
      </select>
    </div>
  )
}

export default DomainsDetails
