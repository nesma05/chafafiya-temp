import Image from 'next/image'

const ConverHistory = ({ requestFollow, user }: any) => {
  const historyStyle = (owner: any, user: any) => {
    if (
      (owner === 'me' && user === 'citizen') ||
      (owner !== 'me' && user === 'responsable')
    )
      return 'rounded-r-lg rounded-bl-lg bg-gray-200'
    if (
      (owner === 'me' && user === 'responsable') ||
      (owner !== 'me' && user === 'citizen')
    )
      return 'rounded-l-lg rounded-br-lg bg-secondary/20'
  }

  return (
    <div className="flex w-full text-sm flex-grow flex-col overflow-hidden rounded-lg">
      <div
        className={`flex ${
          user === 'citizen' ? 'h-auto px-20' : 'h-[calc(100vh-417px)] px-10'
        } flex-grow flex-col overflow-auto`}
      >
        <div
          className={`${
            user === 'citizen' ? 'm-end max-w-lg' : 'm-start max-w-sm'
          } mb-6 flex w-full  gap-2`}
        >
          <div>
            <div
              className={`rounded-l-lg rounded-br-lg p-3 ${
                user === 'citizen'
                  ? 'bg-secondary/20 p-3'
                  : 'bg-gray-200'
              } `}
            >
              <p >{requestFollow.contenu_demande}</p>
            </div>
            <span className="text-xs leading-none text-gray-500">
              {requestFollow.date_demande}
            </span>
          </div>
        </div>
        {requestFollow.historique.map((hist: any, index: any) => (
          <div
            key={index}
            className={`${
              (hist.owner === 'me' && user === 'citizen') ||
              (hist.owner !== 'me' && user !== 'citizen')
                ? 'm-start'
                : 'm-end'
            } mt-2 mb-6 flex max-w-lg gap-2`}
          >
            <div>
              <div
                className={`${historyStyle(
                  hist.owner,
                  user
                )} max-w-lg p-3`}
              >
                <p className="font-medium"> {hist.title} </p>
                <p>{hist.detail}</p>
                {hist.annexes?.map((anex: any,index:any) => (
                  <p key={index}>{anex.titre}</p>
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
