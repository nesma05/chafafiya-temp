import axios from 'axios'
import { requestState } from '../../context/formContext'
import PageTitle from '../Layout/PageTitle'
import { saveAs } from 'file-saver'
import { useState } from 'react'

function FormContainer({ title, children }: any) {
  const [showButton, setShowButton] = useState(false)
  const [showSpinner, setShowSpinner] = useState(false)
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

    // axios
    //   .post('http://localhost:5000/create-pdf', formDataObj)
    //   .then(() =>
    //     axios.get('http://localhost:5000/fetch-pdf', { responseType: 'blob' })
    //   )
    //   .then((res)=> {
    //     const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

    //     saveAs(pdfBlob, 'request.pdf');
    //   })
    setShowSpinner(true)

    axios
      .post('https://node-server-production.up.railway.app/create-pdf', {
        msg: 'works',
      })
      .then((res) => {
        console.log('dataBack', res.data)
        if (!res.data) {
          console.log('not yet')
        } else {
          console.log('ready')
          setTimeout(() => {
            setShowSpinner(false)
            setShowButton(true)
          }, 2000)
        }
      })
  }

  const handleClick = () => {
    axios
      .get('https://node-server-production.up.railway.app/fetch-pdf', {
        responseType: 'blob',
      })
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' })

        saveAs(pdfBlob, 'request.pdf')
        setShowButton(false)
      })
  }

  return (
    <div className="font-arabic">
      <PageTitle>{title}</PageTitle>
      <div className="mt-20 py-10 px-28">
        <form onSubmit={handleSubmit}>{children}</form>
        {showButton && (
          <button
            className="mt-4 rounded bg-main py-1 px-2 text-white"
            onClick={handleClick}
          >
            تحميل
          </button>
        )}
        {showSpinner && (
          <div className="h-10 w-10">
            <img src="/img/loading.gif" alt="" />
          </div>
        )}
      </div>
    </div>
  )
}

export default FormContainer
