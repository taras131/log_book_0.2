import {APITechnicalInspection} from "../../api/api";
import {setMessageInfo} from "../messageinfo/MessageInfoReducer";
import {setPreloader} from "../preloader/preloaderReducer";

const SET_INSPECTION = "SET_INSPECTION"
const ADD_INSPECTION = " ADD_INSPECTION"
const initialState = {
    technicalInspectionList: [],
}
const technicalInspectionReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INSPECTION:
            return {...state, technicalInspectionList: action.payload}
        case ADD_INSPECTION:
            return {
                ...state,
                technicalInspectionList: [...state.technicalInspectionList.filter(item => item.carId !== action.newRecord.carId), action.newRecord]
            }
        default:
            return state
    }
}
export const setInspection = (payload) => ({type: SET_INSPECTION, payload})
export const addInspection = (newRecord) => ({type: ADD_INSPECTION, newRecord})
export const getTechnicalInspection = (userId) => async (dispatch) => {
    dispatch(setPreloader(true))
    const result = await APITechnicalInspection.getInspection(userId)
    if (result.length > 0) {
        dispatch(setInspection(result))
    }
    dispatch(setPreloader(false))
}
export const addTechnicalInspection = (dateIsValid, carId, userId) => async (dispatch) => {
    dispatch(setPreloader(true))
    const result = await APITechnicalInspection.addInspection(dateIsValid, carId, userId)
    if (result === "New date created successfully") {
        const newRecord = {
            carId: carId,
            dateIsValid: dateIsValid,
            userId: userId
        }
        dispatch(addInspection(newRecord))
        dispatch(setMessageInfo("Новые сроки техосмотра установлены"))
    } else {
        dispatch(setMessageInfo("Не удалось установить новые сроки техосмотра, попробуйте позже", "negative"))
    }
    dispatch(setPreloader(false))
}
export default technicalInspectionReducer