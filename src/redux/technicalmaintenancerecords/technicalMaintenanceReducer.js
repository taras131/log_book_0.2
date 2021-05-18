import {APIMaintenanceRecord} from "../../api/api";

const SET_MAINTENANCE = "SET_MAINTENANCE"
const ADD_RECORD = "ADD_RECORD"
const initialState = {
    maintenanceList: [
    ]
}
const technicalMaintenanceReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MAINTENANCE:
            return {...state, maintenanceList: action.payload}
        case ADD_RECORD:
            return {...state, maintenanceList: [...state.maintenanceList, action.payload]}
        default:
            return state
    }
}
export const setMaintenance = (payload) => {
    return {type: SET_MAINTENANCE, payload}
}
export const addMaintenance = (payload) => {
    console.log(payload)
    return {type: ADD_RECORD, payload}
}

export const getMaintenanceRecord = (carId) => async (dispatch) => {
    let response = await APIMaintenanceRecord.getMaintenance(carId)
    console.log(response)
    if(response){
        dispatch(setMaintenance(response))
    }
}
export const addMaintenanceRecord = (maintenanceRecord) => async (dispatch) => {
    let response = await APIMaintenanceRecord.addMaintenance(maintenanceRecord)
    console.log(response)
    if(response){
        dispatch(addMaintenance(maintenanceRecord))
    }
}
export const deleteMaintenanceRecord = (id, carId) => async (dispatch) =>{
    let response = await APIMaintenanceRecord.deleteMaintenance(id, carId)
    console.log(response)
}

export default technicalMaintenanceReducer