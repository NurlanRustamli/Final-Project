

export function favListReducer(state = JSON.parse(localStorage.getItem("fav")) || [],action) {
    switch (action.type) {
        case "ADD_TO_FAV":
            
            return [...state,action.payload]
    case "REMOVE_FROM_FAV":
        state=state.filter(item => item.id !== action.payload.id)
        
        return state
  
        default:
            return state;
    }
  
}

