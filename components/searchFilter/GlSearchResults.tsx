import Pagination from "./GlPagination"

const GlSearchResults = ({ results }: any) => {
  return (
    <div>
      <p>
        Envirent {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime} seconds)
      </p>
      {results.items?.map((result: any) => (
        <div key={result.link}>
          <div className="group mt-4">
            <a
              href={result.link}
              target="_blank"
              className="text-xl text-blue-800"
            >
              <h2 className="text-xl text-blue-800 group-hover:underline">
                {result.title}
              </h2>
            </a>
            <a
              href={result.link}
              target="_blank"
              className="truncate text-sm text-green-600"
            >
              {result.formattedUrl}
            </a>
            <p>{result.snippet}</p>
          </div>
        </div>
      ))}
      <Pagination />
    </div>
  )
}

export default GlSearchResults
