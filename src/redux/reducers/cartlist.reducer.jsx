export const cartListReducer=(state =[],action)=>{
switch (action.type) {
    case "ADD_TO_CART":
        let foundProduct=state.find(item=>item.id===action.payload.id)
if(!foundProduct){
    
    return [...state,{...action.payload,count:1}]
}else{
    foundProduct.count++;
    return [...state]
}

case "COUNT_DECREMENT":
if (action.payload.count>1) {
    action.payload.count--
}else{
   return state.filter(item => item.id !==action.payload.id)
}
    return [...state]
        
case "REMOVE_FROM_CART":
    return state.filter(item=>item.id!== action.payload.id)
    case "EMPTY_CART":
        return []
    default:
        return state;
}
}