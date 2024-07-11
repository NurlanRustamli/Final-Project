export const addToCartAction = (payload)=>{
    return {
        type:"ADD_TO_CART",
        payload: payload
      }
}
export const removeFromCart= (payload)=>{
  return {
    type:"REMOVE_FROM_CART",
    payload: payload
  }
}
export const countDecrement= (payload)=>{
  return {
    type:"COUNT_DECREMENT",
    payload: payload
  }
}