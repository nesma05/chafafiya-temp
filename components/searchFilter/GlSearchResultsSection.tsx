import GlSearchResults from "./GlSearchResults"

const GlSearcHResultsSection =({toggleIndex,router,results}:any)=> {
  return (
    <div
          className={`my-8 mx-10 max-w-xl space-y-4 ${
            toggleIndex === 2 ? 'visible block' : 'invisible hidden'
          }`}
        >
          {router.query.term && <GlSearchResults results={results} />}
        </div>
  )
}

export default GlSearcHResultsSection