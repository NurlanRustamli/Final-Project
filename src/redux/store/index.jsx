import { combineReducers, createStore } from "redux";
import { cartListReducer } from "../reducers/cartlist.reducer";
import { favListReducer } from "../reducers/favlist.reducer";
import loginReducer from "../reducers/login.reducer";
import userDataReducer from "../reducers/userdata.reducer";

const reducers = combineReducers({
    cartList:cartListReducer,
    favList:favListReducer,
    isLogin:loginReducer,
    userData:userDataReducer
})
export const globalState = createStore(reducers)