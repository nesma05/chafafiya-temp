import Filters from "./Filters"
import FiltersResults from "./FiltersResults"

const FiltersSearchResults=({toggleIndex}:any)=> {
    return (
        <div
        className={`mx-10 my-4 flex h-auto flex-col gap-8 border-2 bg-white py-4 px-6 sm:flex-row ${
          toggleIndex === 1 ? 'visible block' : 'invisible hidden'
        }`}
      >
        <Filters />
        <FiltersResults />
      </div>
    )
  }
  
  export default FiltersSearchResults