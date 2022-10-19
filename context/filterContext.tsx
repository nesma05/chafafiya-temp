import { createContext, useContext, useReducer } from 'react'
import { informations } from '../utils/constants'

import infoReducer from './reducers'

type InitialStateType = {
  informations: {
    id: string
    title: string
    institut: string
    anexes: string[]
    files: string[]
  }[]
  ministries: string[]
  anexes: string[]
  infoLength:number
}

const initialState = {
  informations,
  ministries: [],
  anexes: [],
  infoLength: informations.length
}

const InfoContext = createContext<{
  state: InitialStateType
  dispatch: React.Dispatch<any>
}>({
  state: initialState,
  dispatch: () => null,
})

const FilterContext = ({ children }: any) => {
  const [state, dispatch] = useReducer(infoReducer, initialState)

  return (
    <InfoContext.Provider value={{ state, dispatch }}>
      {children}
    </InfoContext.Provider>
  )
}

export default FilterContext

export const InfoState = () => {
  return useContext(InfoContext)
}
