import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk";
import appReducer from "../reducers/AppReducer";

const rootReducer = combineReducers({
    appReducer  
})

export default createStore(rootReducer,applyMiddleware(thunk));