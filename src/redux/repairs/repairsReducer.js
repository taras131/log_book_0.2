import {APIRepair} from "../../api/api";
import {setMessageInfo} from "../messageinfo/MessageInfoReducer";
import {setPreloader} from "../preloader/preloaderReducer";

const ADD_REPAIR_RECORD = 'ADD_REPAIR_RECORD'
const SET_REPAIRS = 'SET_REPAIRS'
const initialState = {
    repairsList: []
}
const repairsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_REPAIR_RECORD:
            return {...state, repairsList: [...state.repairsList, action.payload]}
        case SET_REPAIRS:
            return {...state, repairsList: action.payload}
        default:
            return state
    }
}
const setRepairs = (payload) => {
    return ({type: SET_REPAIRS, payload})
}
export const addNewRepairRecord = (newRecord) => async (dispatch) => {
    dispatch(setPreloader(true))
    let response = await APIRepair.addRepair(newRecord)
    if (response === "New date created successfully") {
        dispatch(getRepairRecord(newRecord.data.userId))
        dispatch(setMessageInfo("Новая запись успешно добавлена"))
    } else {
        dispatch(setMessageInfo("Не удалось добавить новую запись, попробуйте позже", "negative"))
    }
    dispatch(setPreloader(false))
}
export const getRepairRecord = (userId) => async (dispatch) => {
    dispatch(setPreloader(true))
    let response = await APIRepair.getRepairs(userId)
    if (response.length > 0) {
        dispatch(setRepairs(response))
    }
    dispatch(setPreloader(false))
}
export const updateRepairRecord = (newRecord) => async (dispatch) => {
    dispatch(setPreloader(true))
    let response = await APIRepair.updateRepair(newRecord)
    if (response === "repair record update successfully") {
        dispatch(getRepairRecord(newRecord.userId))
        dispatch(setMessageInfo("Запись успешно обновлена"))
    } else {
        dispatch(setMessageInfo("Не удалось обновить запись, попробуйте позже", "negative"))
    }
    dispatch(setPreloader(false))
}
export const deleteRepairRecord = (id, userId) => async (dispatch) => {
    dispatch(setPreloader(true))
    let response = await APIRepair.deleteRepair(id)
    if (response === "delete record successfully") {
        dispatch(getRepairRecord(userId))
        dispatch(setMessageInfo("Запись успешно удалена"))
    } else {
        dispatch(setMessageInfo("Не удалось удалить запись, попробуйте позже", "negative"))
    }
    dispatch(setPreloader(false))
}

export default repairsReducer