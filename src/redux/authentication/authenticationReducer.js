import {APIAuthentication} from "../../api/api";

const SET_IS_LOADING = "SET_IS_LOADING"
const SET_MESSAGE = "SET_MESSAGE"
const SET_USER = "SET_USER"
const initialState = {
    user: {
        id: "",
        name: ""
    },
    isAuthentication: true,
    message: "",
    isLoading: false,
}
const authenticationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_LOADING:
            return {...state, isLoading: action.payload}
        case SET_MESSAGE:
            return {...state, message: action.payload}
        case SET_USER:
            return {...state, user: action.payload}
        default:
            return state
    }
}
export const setIsLoading = (payload) => {
    return {type: SET_IS_LOADING, payload}
}
export const setUser = (payload) => {
    return {type: SET_USER, payload}
}
export const setMessage = (payload) => {
    return {type: SET_MESSAGE, payload}
}
export const registrationNewUser = (login, password) => async (dispatch) => {
    dispatch(setIsLoading(true))
    dispatch(setMessage(""))
    let response = await APIAuthentication.registration(login, password)
    console.log(response)
    if (response) {
        dispatch(setMessage("Вы успешно зарегистрированы"))
    } else {
        dispatch(setMessage("Пользователь с таким именем уже существует"))
    }
    dispatch(setIsLoading(false))
}
export const authentication = (login, password) => async (dispatch) => {
    dispatch(setMessage(""))
    let response = await APIAuthentication.entrance(login, password)
    if (response === "Пользователя не существует") {
        dispatch(setMessage(response))
    } else {
        dispatch(setUser({id: response, name: login}))
    }
}

export default authenticationReducer