import { createContext, useContext, useState } from 'react'

const Context = createContext<{
    term: string | null
    setTerm: React.Dispatch<any>
  }>({
    term: null,
    setTerm: () => null,
  })


 

const SearchContext = ({ children }: any) => {
  const [term, setTerm] = useState(null)

  return (
    <Context.Provider value={{ term, setTerm }}>{children}</Context.Provider>
  )
}

export default SearchContext

export const searchState = () => {
  return useContext(Context)
}
