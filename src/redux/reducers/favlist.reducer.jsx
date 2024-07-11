

export function favListReducer(state = [],action) {
    switch (action.type) {
        case "ADD_TO_FAV":
            
            return [...state,action.payload]
    case "REMOVE_FROM_FAV":
        return state.filter(item=>item.id!==action.payload)
  
        default:
            return state;
    }
  
}

