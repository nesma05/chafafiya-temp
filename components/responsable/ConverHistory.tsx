import Image from 'next/image'

const ConverHistory = ({ requestFollow, user }: any) => {
  const historyStyle = (owner: any, user: any) => {
    if (
      (owner === 'me' && user === 'citizen') ||
      (owner !== 'me' && user === 'responsable')
    )
      return 'rounded-r-lg rounded-bl-lg bg-gray-300'
    if (
      (owner === 'me' && user === 'responsable') ||
      (owner !== 'me' && user === 'citizen')
    )
      return 'rounded-l-lg rounded-br-lg bg-blue-600 text-white'
  }

  return (
    <div className="flex w-full max-w-2xl flex-grow flex-col overflow-hidden rounded-lg bg-white shadow-xl">
      <div className={`flex ${user === 'citizen' ? 'h-auto':'h-[500px]'} flex-grow flex-col overflow-auto px-4`}>
        <div className={`${user === 'citizen' ? 'm-end':'m-start'} mb-6 flex w-full max-w-xs gap-2`}>
          <div>
            <div className={`rounded-l-lg rounded-br-lg p-3 ${user === 'citizen'? 'bg-blue-600 p-3 text-white': 'bg-gray-300'} `}>
              <p className="text-sm">{requestFollow.contenu_demande}</p>
            </div>
            <span className="text-xs leading-none text-gray-500">
              {requestFollow.date_demande}
            </span>
          </div>
        </div>
        {requestFollow.historique.map((hist: any) => (
          <div
            className={`${
              (hist.owner === 'me' && user === 'citizen') ||
              (hist.owner !== 'me' && user !== 'citizen')
                ? 'm-start'
                : 'm-end'
            } mt-2 mb-6 flex w-fit  gap-2`}
          >
            <div>
              <div
                className={`${historyStyle(
                  hist.owner,
                  user
                )} w-[350px] p-3 text-sm `}
              >
                <p className="font-medium"> {hist.title} </p>
                <p>{hist.detail}</p>
                {hist.annexes?.map((anex: any) => (
                  <p>{anex.titre}</p>
                ))}
              </div>
              <span className="text-xs leading-none text-gray-500">
                {hist.date}
              </span>
            </div>
            {hist.owner === 'me' && user === 'citizen' && (
              <div className="flex w-[100px] flex-col items-center gap-1">
                <div className="relative h-16 w-16 rounded-full ">
                  <Image
                    src={hist.logo_entite}
                    layout="fill"
                    objectFit="cover"
                    alt="chafafiya image"
                  />
                </div>
                <span className="text-center text-xs font-medium">
                  {hist.acteur}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ConverHistory
