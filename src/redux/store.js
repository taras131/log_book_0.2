import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import carsReducer from "./cars/carsReducer";
import authenticationReducer from "./authentication/authenticationReducer";
import technicalMaintenanceReducer from "./technicalmaintenancerecords/technicalMaintenanceReducer";
import InsuranceReducer from "./Insurance/InsuranceReducer";
import repairsReducer from "./repairs/repairsReducer";
import answerWindowReducer from "./answerwindow/answerWindowReducer";

const reducersList = combineReducers({
    carsInfo: carsReducer,
    maintenanceInfo: technicalMaintenanceReducer,
    authInfo: authenticationReducer,
    insuranceInfo: InsuranceReducer,
    repairsInfo: repairsReducer,
    answerInfo: answerWindowReducer,
})

let store = createStore(reducersList, applyMiddleware(thunk))

export default store