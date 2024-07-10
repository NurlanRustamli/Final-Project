import { combineReducers, createStore } from "redux";
import { cartListReducer } from "../reducers/cartlist.reducer";

const reducers = combineReducers({
    cartList:cartListReducer,
    // favList:fav
})
export const globalState = createStore(reducers)