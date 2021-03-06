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
import preloaderReducer from "./preloader/preloaderReducer";
import settingReducer from "./setting/settingReducer";
import orderReducer from "./order/orderReducer";

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
    preloaderInfo: preloaderReducer,
    settingInfo: settingReducer,
    orderInfo: orderReducer,
})

let store = createStore(reducersList, applyMiddleware(thunk))

export default store