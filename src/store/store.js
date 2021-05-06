import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import carsReducer from "./carsReducer";

const reducersList = combineReducers({
carsInfo: carsReducer
})

let store = createStore(reducersList, applyMiddleware(thunk))

export default store