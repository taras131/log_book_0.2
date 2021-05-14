import {APIAuthentication} from "../api/api";

const SET_AUTH = "SET_AUTH"
const SET_IS_LOADING = "SET_IS_LOADING"
const SET_MESSAGE = "SET_MESSAGE"
const initialState = {
    isAuthentication: true,
    message: "",
    isLoading: false,
}
const authenticationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH:
            return {...state, isAuthentication: action.payload}
        case SET_IS_LOADING:
            return {...state, isLoading: action.payload}
        case SET_MESSAGE:
            return {...state, message: action.text}
        default:
            return state
    }
}
export const setAuthentication = (payload) => {
    return ({type: SET_AUTH, payload})
}
export const setIsLoading = (payload) => {
    return {type: SET_IS_LOADING, payload}
}
export const setMessage = (text) => {
    return {type: SET_MESSAGE, text}
}
export const registrationNewUser = (login, password) => async (dispatch) => {
    dispatch(setIsLoading(true))
    dispatch(setMessage(""))
    let response = await APIAuthentication.registration(login, password)
    if(response.length === 12){
        dispatch(setMessage("Пользователь с таким именем уже существует"))
    }
    dispatch(setIsLoading(false))
}


export default authenticationReducer