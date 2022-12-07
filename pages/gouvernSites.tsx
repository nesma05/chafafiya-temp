import { NextPage } from 'next'
import PageTitle from '../components/Layout/PageTitle'
const GouvernmentSites: NextPage = () => {
 return (
    <>
        <PageTitle>بعض المواقع الحكومية التي تتوفر على المعلومات</PageTitle>
        <div className="relative my-28 w-[70%] mx-auto overflow-x-auto">
              <table className="w-full text-right text-sm text-gray-500">
                <thead className=" bg-gray-100 uppercase">
                  <tr>
                    <th scope="col" className="py-3 px-6">
                      الموقع الإلكتروني
                    </th>
                    <th scope="col" className="py-3 px-6">
                      الوصف
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b bg-white ">
                    <td
                      scope="row"
                      className="whitespace-nowrap py-4 px-6 font-medium text-gray-900"
                    >
                      <a href="https://www.habous.gov.ma" target={'_blank'} className="underline text-main">https://www.habous.gov.ma</a> 
                    </td>
                    <td className="py-4 px-6">
                      العمل على تشجيع وقف اfموال على جهات البر وتوسيع نطاق
                      اfوقاف الخيرية. إقامة اCساجد والترخيص بها حسب احتياجات
                      اCناطق اCختلفة، والعمل على صيانتها وتأثيثها، واCحافظة
                      عليها،
                    </td>
                  </tr>
                  <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                    <td
                      scope="row"
                      className="whitespace-nowrap py-4 px-6 font-medium text-gray-900 dark:text-white"
                    >
                      <a href="https://www.habous.gov.ma" target={'_blank'} className="underline text-main">https://www.habous.gov.ma</a> 
                    </td>
                    <td className="py-4 px-6">
                      العمل على تشجيع وقف اfموال على جهات البر وتوسيع نطاق
                      اfوقاف الخيرية. إقامة اCساجد والترخيص بها حسب احتياجات
                      اCناطق اCختلفة، والعمل على صيانتها وتأثيثها، واCحافظة
                      عليها،
                    </td>
                  </tr>
                  <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                    <td
                      scope="row"
                      className="whitespace-nowrap py-4 px-6 font-medium text-gray-900 dark:text-white"
                    >
                      <a href="https://www.habous.gov.ma" target={'_blank'} className="underline text-main">https://www.habous.gov.ma</a> 
                    </td>
                    <td className="py-4 px-6">
                      العمل على تشجيع وقف اfموال على جهات البر وتوسيع نطاق
                      اfوقاف الخيرية. إقامة اCساجد والترخيص بها حسب احتياجات
                      اCناطق اCختلفة، والعمل على صيانتها وتأثيثها، واCحافظة
                      عليها،
                    </td>
                  </tr>
                  <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                    <td
                      scope="row"
                      className="whitespace-nowrap py-4 px-6 font-medium text-gray-900 dark:text-white"
                    >
                      <a href="https://www.habous.gov.ma" target={'_blank'} className="underline text-main">https://www.habous.gov.ma</a> 
                    </td>
                    <td className="py-4 px-6">
                      العمل على تشجيع وقف اfموال على جهات البر وتوسيع نطاق
                      اfوقاف الخيرية. إقامة اCساجد والترخيص بها حسب احتياجات
                      اCناطق اCختلفة، والعمل على صيانتها وتأثيثها، واCحافظة
                      عليها،
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
    </>
  )
}

export default GouvernmentSites