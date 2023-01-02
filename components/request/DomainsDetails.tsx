import axios from 'axios'
import { useEffect, useState } from 'react'
import { requestState } from '../../context/formContext'

const DomainsDetails = () => {
  const [selectedDomain, setSelectedDomain] = useState('')
  const [domains, setDomains] = useState<any>([])
  const [SubDomains, setSubDomains] = useState([])
 

  const {
    chosenState: { chosenOrgs },
  } = requestState()
  
  const getDomains = async (instId: any) => {
    const response = await axios(
      `https://chafafiya-app-json-server-production.up.railway.app/domains?institution=${instId}`
    )
    setDomains([...domains, ...response?.data])
  }

  const getSubDomains = async (selected: any) => {
    const response = await axios(
      `https://chafafiya-app-json-server-production.up.railway.app/subDomains?domain=${selected}`
    )
    setSubDomains(response?.data)

  }

  useEffect(() => {
    if (chosenOrgs.length > 0) {
      chosenOrgs.forEach((org: any) => {
        getDomains(org.id)
      })
    }
  }, [chosenOrgs])

  useEffect(() => {
    getSubDomains(selectedDomain)
  }, [selectedDomain])

  return (
    <div className="basis-2/3">
      <select
        name="domain"
        className="mt-2 rounded-md border border-gray-300 bg-white py-2 px-3 text-gray-600 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500"
        onChange={(e: any) => setSelectedDomain(e.target.value)}
      >
        <option> -- إختر المجال -- </option>
        {domains
          ?.filter((dm: any) =>
            chosenOrgs.some((chOrg: any) => chOrg.id === dm.institution)
          ).filter((val:any, index:any, arr:any) =>
          index === arr.findIndex((v:any) => (
            v.title === val.title
          ))
        )
          .map((dom: any, index: any) => (
            <option key={index} value={dom.id}>
              {dom.title}
            </option>
          ))}
      </select>
      <select
        name="subDomain"
        className="mt-2 rounded-md border border-gray-300 bg-white py-2 px-3 text-gray-600 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:mx-2"
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
