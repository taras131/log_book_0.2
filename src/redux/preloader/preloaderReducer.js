
const SET_PRELOADER = "SET_PRELOADER"
const initialState = {
    isLoading: false
}
const preloaderReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_PRELOADER:
            return {...state,isLoading: action.payload}
        default:
            return state
    }
}
export const setPreloader = (payload) => {
    return {type: SET_PRELOADER, payload}
}

export default  preloaderReducer