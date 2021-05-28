import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import carsReducer from "./cars/carsReducer";
import authenticationReducer from "./authentication/authenticationReducer";
import technicalMaintenanceReducer from "./technicalmaintenancerecords/technicalMaintenanceReducer";
import InsuranceReducer from "./insurance/insuranceReducer";
import repairsReducer from "./repairs/repairsReducer";
import answerWindowReducer from "./answerwindow/answerWindowReducer";
import noticeReducer from "./notice/noticeReducer";
import technicalInspectionReducer from "./technicalinspection/technicalInspectionReducer";
import MessageInfoReducer from "./messageinfo/MessageInfoReducer";

const reducersList = combineReducers({
    carsInfo: carsReducer,
    maintenanceInfo: technicalMaintenanceReducer,
    authInfo: authenticationReducer,
    insuranceInfo: InsuranceReducer,
    repairsInfo: repairsReducer,
    answerInfo: answerWindowReducer,
    noticeInfo: noticeReducer,
    technicalInspectionInfo: technicalInspectionReducer,
    messageInfo:MessageInfoReducer,
})

let store = createStore(reducersList, applyMiddleware(thunk))

export default store