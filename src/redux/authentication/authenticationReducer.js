import {setMessageInfo} from "../messageinfo/MessageInfoReducer";
import {APIAuthentication} from "../../api/userApi";

const SET_IS_LOADING = "SET_IS_LOADING"
const SET_MESSAGE = "SET_MESSAGE"
const SET_USER = "SET_USER"
const LOG_OUT = "LOG_OUT"
const initialState = {
    user: {
        id: "",
        name: ""
    },
    isAuthentication: false,
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
            return {...state, user: action.payload, isAuthentication: true}
        case LOG_OUT:
            localStorage.removeItem("token")
            return {...state, user: {}, isAuthentication: false}
        default:
            return state
    }
}
export const setIsLoading = (payload) => ({type: SET_IS_LOADING, payload})
export const setUser = (payload) => ({type: SET_USER, payload})
export const setMessage = (payload) => ({type: SET_MESSAGE, payload})
export const logOut = () => ({type: LOG_OUT})
export const registrationNewUser = (login, password) => async (dispatch) => {
    dispatch(setIsLoading(true))
    try {
        dispatch(setMessage(""))
        let response = await APIAuthentication.registration(login, password)
        if (response) {
            dispatch(setMessageInfo("Вы успешно зарегистрированы"))
        } else {
            dispatch(setMessageInfo("Пользователь с таким именем уже существует", "negative"))
        }
    } catch (e) {
        console.log(e)
    }

    dispatch(setIsLoading(false))
}
export const login = (login, password) => async (dispatch) => {
    dispatch(setIsLoading(true))
    dispatch(setMessage(""))
    let response = await APIAuthentication.login(login, password)
    console.log(response)
    dispatch(setUser({id: response.user.id, name: response.user.email}))
    localStorage.setItem("token", response.token)
    dispatch(setIsLoading(false))
}


export default authenticationReducer