import { createContext, useContext, useReducer } from 'react'
import { requestReducer } from './reducers'

type InitialStateType = {
  chosenOrgs: any[]
}
const initialState = {
  chosenOrgs: [],
}

const Context = createContext<{
  chosenState: InitialStateType
  chosenDispatch: React.Dispatch<any>
}>({
  chosenState: initialState,
  chosenDispatch: () => null,
})

const FormContext = ({ children }: any) => {
  const [chosenState, chosenDispatch] = useReducer(requestReducer, initialState)

  return (
    <Context.Provider value={{ chosenState, chosenDispatch }}>{children}</Context.Provider>
  )
}

export default FormContext

export const requestState = () => {
  return useContext(Context)
}
