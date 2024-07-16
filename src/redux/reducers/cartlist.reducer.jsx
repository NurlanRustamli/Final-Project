export const cartListReducer = (state = JSON.parse(localStorage.getItem("cart")) || [], action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            let foundProduct = state.find(item => item.id === action.payload.id)
            if (!foundProduct) {
                return [...state, { ...action.payload, count: 1 }]
            } else {
                foundProduct.count++;
                return [...state]
            }

        case "COUNT_DECREMENT":
            let updatedState = state.map(item => {
                if (item.id === action.payload.id) {
                    return { ...item, count: item.count > 1 ? item.count - 1 : 1 }
                }
                return item
            }).filter(item => item.count > 0)
            return updatedState

        case "REMOVE_FROM_CART":
            let newState = state.filter(item => item.id !== action.payload.id)
            return newState

        case "EMPTY_CART":
            return []

        default:
            return state;
    }
}