export const cartListReducer = (state = JSON.parse(localStorage.getItem("cart")) || [], action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            let foundProduct = state.find(item => item.id === action.payload.id)
            if (!foundProduct) {
                localStorage.setItem("cart", JSON.stringify([...state, { ...action.payload, count: 1 }]))
                return [...state, { ...action.payload, count: 1 }]
            } else {
                foundProduct.count++;
                localStorage.setItem("cart", JSON.stringify(state))
                return [...state]
            }

        case "COUNT_DECREMENT":
            if (action.payload.count > 1) {
                action.payload.count--
                localStorage.setItem("cart", JSON.stringify(state))

            } else {
                state = state.filter(item => item.id !== action.payload.id)
                localStorage.setItem("cart", JSON.stringify(state))

                return state
            }
            return [...state]

        case "REMOVE_FROM_CART":
            state=state.filter(item => item.id !== action.payload.id)
            
            return state
        case "EMPTY_CART":
            state = []
            localStorage.setItem("cart", JSON.stringify(state))

            return state
        default:
            return state;
    }
}