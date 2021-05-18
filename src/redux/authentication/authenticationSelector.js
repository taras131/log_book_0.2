export const getMessage = (state) => {
    return state.authInfo.message
}
export const authMe =(state) => {
    if(state.authInfo.user.id){
        return true
    } else {
        return false
    }
}
export const getMyId = (state) => {
    return state.authInfo.user.id
}
export const getMyName = (state) => {
    return state.authInfo.user.name
}