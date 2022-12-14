import Image from 'next/image'

const ConverHistory = ({ history, user }: any) => {

  return (
    <div className="flex w-full text-sm flex-grow flex-col overflow-hidden rounded-lg">
      <div
        className={`flex ${
          user === 'CITIZEN' ? 'h-auto px-20' : 'h-[calc(100vh-417px)] px-10'
        } flex-grow flex-col overflow-auto`}
      >
        <div
          className={`${
            user === 'CITIZEN' ? 'm-end max-w-lg' : 'm-start max-w-sm'
          } mb-6 flex w-full gap-2`}
        >
          <div>
            <div
              className={`rounded-l-lg rounded-br-lg p-3 ${
                user === 'CITIZEN'
                  ? 'bg-secondary/20 p-3'
                  : 'bg-gray-200'
              } `}
            >
              <p >{history.contenu_demande}</p>
            </div>
            <span className="text-xs leading-none text-gray-500">
              {history.date_demande}
            </span>
          </div>
        </div>
        {history?.map((hist: any) => (
          <div
            key={hist.id}
            className={`${
              hist.owner == user
           
                ? 'm-end'
                : 'm-start'
            } mt-2 mb-6 flex max-w-lg gap-2`}
          >
            <div>
              <div
                className={`${hist.owner == user? 'rounded-l-lg rounded-br-lg bg-secondary/20' : 'rounded-r-lg rounded-bl-lg bg-gray-200'
                } max-w-lg p-3`}
              >
                <p className="font-medium"> {hist.title} </p>
                <p>{hist.detail}</p>
                {hist.annexes?.map((anex: any,index:any) => (
                  <p key={index}>{anex.titre}</p>
                ))}
              </div>
              <span className="text-xs leading-none text-gray-500">
              {new Date(hist.date).toLocaleDateString('fr')}  {new Date(hist.date).toLocaleTimeString('fr')}
              </span>
            </div>
            {(hist.owner != "CITIZEN" && hist.owner != user  ) && (
              <div className="flex w-[100px] flex-col items-center gap-1">
                <div className="relative h-16 w-16 rounded-full ">
                  <Image
                    src={`/img/${hist.logo_entite}`}
                    layout="fill"
                    objectFit="cover"
                    alt="chafafiya image"
                  />
                </div>
                <span className="text-center text-xs font-medium">
                  {hist.answeredBy}
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
