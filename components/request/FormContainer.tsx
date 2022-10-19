import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { requestState } from '../../context/formContext'

function FormContainer({ dir, title, children }: any) {
  const { locale, locales, asPath } = useRouter()

  const {
    chosenState: { chosenOrgs },
  } = requestState()

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const myFormData = new FormData(e.target)
    myFormData.append('chosenOrgs', JSON.stringify(chosenOrgs))
    
    const formDataObj = Object.fromEntries(myFormData.entries()) 

    const requestedInfo = myFormData.getAll('requestedInfo')
    Object.assign(formDataObj, {requestedInfo})
    console.log({ formDataObj })
    
    axios
      .post('http://localhost:5000/create-pdf', formDataObj)
      .then((res) => console.log(res))
  }

  return (
    <div>
      <div className="bg-cyan-600 px-14 py-4 text-3xl text-white">
        <h1>{title}</h1>
      </div>
      <div className="p-10">
        <form onSubmit={handleSubmit}>{children}</form>
      </div>
    </div>
  )
}

export default FormContainer
