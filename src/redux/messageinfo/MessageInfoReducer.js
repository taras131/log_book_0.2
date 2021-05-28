const SET_MESSAGE = "SET_MESSAGE"
const RESET_MESSAGE = "RESET_MESSAGE"
const initialState = {
    message: ""
}
const MessageInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MESSAGE:
            return {...state, message: action.message}
        case RESET_MESSAGE:
            return {...state, message: ""}
        default:
            return state
    }
}
export const setMessageInfo = (message) => {
    return {type: SET_MESSAGE, message}
}
export const resetMessageInfo = () =>{
    return {type: RESET_MESSAGE}
}
export default MessageInfoReducer;