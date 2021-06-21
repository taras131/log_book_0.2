import {APIMaintenanceRecord} from "../../api/api";
import {setMessageInfo} from "../messageinfo/MessageInfoReducer";
import {setPreloader} from "../preloader/preloaderReducer";

const SET_MAINTENANCE = "SET_MAINTENANCE"
const ADD_RECORD = "ADD_RECORD"
const DELETE_RECORD = "DELETE_RECORD"
const initialState = {
    maintenanceList: []
}
const technicalMaintenanceReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MAINTENANCE:
            return {...state, maintenanceList: action.payload}
        case ADD_RECORD:
            return {...state, maintenanceList: [...state.maintenanceList, action.payload]}
        case DELETE_RECORD:
            return {...state, maintenanceList: [...state.maintenanceList].filter(item => item.id !== action.id)}
        default:
            return state
    }
}
export const setMaintenance = (payload) => ({type: SET_MAINTENANCE, payload})
export const addMaintenance = (payload) => ({type: ADD_RECORD, payload})
export const deleteMaintenance = (id) => ({type: DELETE_RECORD, id})
export const getMaintenanceRecord = (userId) => async (dispatch) => {
    dispatch(setPreloader(true))
    let response = await APIMaintenanceRecord.getMaintenance(userId)
    if (response) {
        dispatch(setMaintenance(response))
    }
    dispatch(setPreloader(false))
}
export const addMaintenanceRecord = (maintenanceRecord) => async (dispatch) => {
    dispatch(setPreloader(true))
    let response = await APIMaintenanceRecord.addMaintenance(maintenanceRecord)
    if (response === "New record created successfully") {
        dispatch(addMaintenance(maintenanceRecord))
        dispatch(setMessageInfo("Новая запись успешно добавлена"))
    } else {
        dispatch(setMessageInfo("Не удалось добавить новую запись, попробуйте позже"))
    }
    dispatch(setPreloader(false))
}
export const deleteMaintenanceRecord = (id, carId) => async (dispatch) => {
    dispatch(setPreloader(true))
    let response = await APIMaintenanceRecord.deleteMaintenance(id, carId)
    if (response === "delete record successfully") {
        dispatch(deleteMaintenance(id))
        dispatch(setMessageInfo("Запись успешно удалена"))
    } else {
        dispatch(setMessageInfo("Не удалось удалить запись, попробуйте позже"))
    }
    dispatch(setPreloader(false))
}
export const updateMaintenanceRecord = (maintenanceRecord) => async (dispatch) => {
    dispatch(setPreloader(true))
    let response = await APIMaintenanceRecord.updateMaintenance(maintenanceRecord)
    if (response === "maintenance record update successfully") {
        dispatch(getMaintenanceRecord(maintenanceRecord.userId))
        dispatch(setMessageInfo("Запись успешно обновлена"))
    } else {
        dispatch(setMessageInfo("Не удалось обновить запись, попробуйте позже"))
    }
    dispatch(setPreloader(false))
}

export default technicalMaintenanceReducer