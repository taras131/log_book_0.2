import {APIInsurance} from "../../api/api";
import {setMessageInfo} from "../messageinfo/MessageInfoReducer";
import {setPreloader} from "../preloader/preloaderReducer";

const SET_INSURANCE = "SET_INSURANCE"
const ADD_INSURANCE = "ADD_INSURANCE"
const initialState = {
    insuranceList: []
}
const InsuranceReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INSURANCE:
            return {...state, insuranceList: action.payload}
        case ADD_INSURANCE:
            return {
                ...state,
                insuranceList: [...state.insuranceList.filter(item => item.carId !== action.newRecord.carId), action.newRecord]
            }
        default:
            return state
    }
}
export const setInsurance = (payload) => ({type: SET_INSURANCE, payload})
export const addInsurance = (newRecord) => ({type: ADD_INSURANCE, newRecord})
export const getInsuranceDate = (userId) => async (dispatch) => {
    dispatch(setPreloader(true))
    const result = await APIInsurance.getInsurance(userId)
    if (result.length > 0) {
        dispatch(setInsurance(result))
    }
    dispatch(setPreloader(false))
}
export const addNewInsurance = (dateIsValid, carId, userId) => async (dispatch) => {
    dispatch(setPreloader(true))
    const result = await APIInsurance.addInsurance(dateIsValid, carId, userId)
    if (result === "New date created successfully") {
        const newRecord = {
            carId: carId,
            dateIsValid: dateIsValid,
            userId: userId
        }
        dispatch(addInsurance(newRecord))
        dispatch(setMessageInfo("Данные о сроке страхования успешно установлены"))
    } else {
        dispatch(setMessageInfo("Не удалось установить данные, попробуйте позже", "negative"))
    }
    dispatch(setPreloader(false))
}

export default InsuranceReducer