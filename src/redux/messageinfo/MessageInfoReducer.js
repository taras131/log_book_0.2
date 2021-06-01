const SET_MESSAGE = "SET_MESSAGE"
const RESET_MESSAGE = "RESET_MESSAGE"
const initialState = {
    message: "",
    isShow: false,
    sort: ""
}
const MessageInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MESSAGE:
            return {...state, message: action.message , isShow: true, sort: action.sort}
        case RESET_MESSAGE:
            return {...state, isShow: false, sort: ""}
        default:
            return state
    }
}
export const setMessageInfo = (message, sort = "positive") => {
    return {type: SET_MESSAGE, message, sort}
}
export const resetMessageInfo = () =>{
    return {type: RESET_MESSAGE}
}
export default MessageInfoReducer;