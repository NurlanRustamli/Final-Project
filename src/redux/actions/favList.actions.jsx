export function addToFavAction(param){
    return{
        type:"ADD_TO_FAV",
        payload:param
    }
}
export function removeFromFavAction(param){
    return{
        type:"REMOVE_FROM_FAV",
        payload:param
    }
}