import { InfoState } from '../../context/filterContext'
const TabsTitles = ({ toggleIndex, handleTggle, results }: any) => {
  const {
    state: { infoLength },
  } = InfoState()
  return (
    <div className="mx-10 mt-6 flex">
      <p
        onClick={() => handleTggle(1, 'proactivPublish')}
        className={`p-2 ${
          toggleIndex === 1
            ? 'border-b-2 border-blue-500 bg-white'
            : 'rounded-t-xl bg-gray-200'
        }  cursor-pointer`}
      >
        المعلومات المنشورة استباقيا{' '}
        <span className="font-medium">{infoLength}</span>
      </p>
      <p
        onClick={() => handleTggle(2, 'institWebsites')}
        className={`p-2 ${
          toggleIndex === 2
            ? 'border-b-2 border-blue-500 bg-white'
            : 'rounded-t-xl bg-gray-200'
        }  cursor-pointer`}
      >
        المعلومات بمواقع المؤسسات والهيئات{' '}
        <span className="font-medium">
          {results?.searchInformation?.formattedTotalResults}
        </span>
      </p>
      <p
        onClick={() => handleTggle(3, 'mostFaReq')}
        className={`p-2 ${
          toggleIndex === 3
            ? 'border-b-2 border-blue-500 bg-white'
            : 'rounded-t-xl bg-gray-200'
        }  cursor-pointer`}
      >
        الطلبات المعالجة <span className="font-medium">12</span>
      </p>
    </div>
  )
}

export default TabsTitles
