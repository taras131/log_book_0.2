import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import carsReducer from "./carsReducer";
import maintenancerecordReducer from "./maintenancerecordReducer";
import authenticationReducer from "./authenticationReducer";

const reducersList = combineReducers({
    carsInfo: carsReducer,
    maintenanceInfo: maintenancerecordReducer,
    authInfo: authenticationReducer
})

let store = createStore(reducersList, applyMiddleware(thunk))

export default store