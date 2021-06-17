const SET_ANSWER = "SET_ANSWER"
const RESET_ANSWER = "RESET_ANSWER"
const initialState = {
    isShow: false,
    message: "",
    func: ""
}
const answerWindowReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ANSWER:
            return {...state, isShow: true, message: action.message, func: action.func}
        case RESET_ANSWER:
            return {...state, isShow: false, message: '', func: ''}
        default:
            return state
    }
}
export const setAnswer = (message, func) => ({type: SET_ANSWER, message, func})
export const resetAnswer = () => ({type: RESET_ANSWER})

export default answerWindowReducer