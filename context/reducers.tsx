const infoReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'ADD_FILTER_BY_MINITRIES':
      return {
        ...state,
        ministries: [...state.ministries, action.payload],
      }
    case 'REMOVE_FILTER_BY_MINITRIES':
      return {
        ...state,
        ministries: state.ministries.filter(
          (ministry: any) => ministry != action.payload
        ),
      }
    case 'ADD_FILTER_BY_ANEXES':
      return {
        ...state,
        anexes: [...state.anexes, action.payload],
      }
    case 'REMOVE_FILTER_BY_ANEXES':
      return {
        ...state,
        anexes: state.anexes.filter(
          (ministry: any) => ministry != action.payload
        ),
      }
    case 'INFORMATION_LENGTH':
      return {
        ...state,
        infoLength: action.payload
      }    
    default:
      return state
  }
}

export default infoReducer

export const requestReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'ADD_CHOSEN_ORGS':
      return {
        chosenOrgs: [...state.chosenOrgs, action.payload],
      }

    case 'REMOVE_CHOSEN_ORGS':
      return {
        chosenOrgs: state.chosenOrgs.filter(
          (chOrg: any) => chOrg.id != action.payload
        ),
      }

    default:
      return state
  }
}
