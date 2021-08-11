export const getMessage = (state) => {
    return state.authInfo.message
}
export const authMe =(state) => {
    return state.authInfo.isAuthentication

}
export const getMyId = (state) => {
    return state.authInfo.user.id
}
export const getMyName = (state) => {
    return state.authInfo.user.name
}