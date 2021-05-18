import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import carsReducer from "./cars/carsReducer";
import authenticationReducer from "./authentication/authenticationReducer";
import technicalMaintenanceReducer from "./technicalmaintenancerecords/technicalMaintenanceReducer";

const reducersList = combineReducers({
    carsInfo: carsReducer,
    maintenanceInfo: technicalMaintenanceReducer,
    authInfo: authenticationReducer
})

let store = createStore(reducersList, applyMiddleware(thunk))

export default store