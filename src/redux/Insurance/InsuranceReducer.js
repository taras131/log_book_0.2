import {APIInsurance} from "../../api/api";

const SET_INSURANCE = "SET_INSURANCE"
const ADD_INSURANCE = "ADD_INSURANCE"
const initialState = {
    insuranceList : [

    ]
}
const InsuranceReducer = (state = initialState,action) =>{
    switch (action.type){
        case SET_INSURANCE:
            return {...state,insuranceList: action.payload }
        case ADD_INSURANCE:
            return {...state,insuranceList: [...state.insuranceList.filter(item => item.carId !== action.newRecord.carId),action.newRecord]}
        default:
            return state
    }
}
export const setInsurance = (payload) => {
    return {type: SET_INSURANCE, payload}
}
export const addInsurance = (newRecord) => {
    return {type: ADD_INSURANCE,newRecord }
}

export const getInsuranceDate = (userId) => async(dispatch) => {
    const result = await APIInsurance.getInsurance(userId)
    console.log(result)
    dispatch(setInsurance(result))
}
export const addNewInsurance = (dateIsValid, carId, userId) => async (dispatch) =>{
    const result = await APIInsurance.addInsurance(dateIsValid, carId, userId)
    if (result === "New date created successfully"){
        const newRecord = {
            carId: carId,
            dateIsValid:dateIsValid,
            userId:userId
        }
        dispatch(addInsurance(newRecord))
    }
    console.log(result)
}

export default InsuranceReducer