import { combineReducers, createStore } from "redux";
import { cartListReducer } from "../reducers/cartlist.reducer";
import { favListReducer } from "../reducers/favlist.reducer";

const reducers = combineReducers({
    cartList:cartListReducer,
    favList:favListReducer
})
export const globalState = createStore(reducers)