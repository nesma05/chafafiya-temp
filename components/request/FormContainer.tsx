import axios from 'axios'
import { requestState } from '../../context/formContext'
import PageTitle from '../Layout/PageTitle'

function FormContainer({ title, children }: any) {
  const {
    chosenState: { chosenOrgs },
  } = requestState()

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const myFormData = new FormData(e.target)
    myFormData.append('chosenOrgs', JSON.stringify(chosenOrgs))

    const formDataObj = Object.fromEntries(myFormData.entries())

    const requestedInfo = myFormData.getAll('requestedInfo')
    Object.assign(formDataObj, { requestedInfo })
    console.log({ formDataObj })

    axios
      .post('http://localhost:5000/create-pdf', formDataObj)
      .then((res) => console.log(res))
  }

  return (
    <div className="font-arabic">
      <PageTitle>{title}</PageTitle>
      <div className="mt-20 py-10 px-28">
        <form onSubmit={handleSubmit}>{children}</form>
      </div>
    </div>
  )
}

export default FormContainer
