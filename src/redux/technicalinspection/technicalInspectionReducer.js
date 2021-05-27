import {APITechnicalInspection} from "../../api/api";

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
const setInspection = (payload) => {
    return {type: SET_INSPECTION, payload}
}
const addInspection = (newRecord) => {
    return {type: ADD_INSPECTION, newRecord}
}
export const getTechnicalInspection = (userId) => async (dispatch) => {
    const result = await APITechnicalInspection.getInspection(userId)
    if (result.length > 0) {
        dispatch(setInspection(result))
    }
}
export const addTechnicalInspection = (dateIsValid, carId, userId) => async (dispatch) => {
    const result = await APITechnicalInspection.addInspection(dateIsValid, carId, userId)
    if (result === "New date created successfully") {
        const newRecord = {
            carId: carId,
            dateIsValid: dateIsValid,
            userId: userId
        }
        dispatch(addInspection(newRecord))
    }
}
export default technicalInspectionReducer