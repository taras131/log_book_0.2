export const getEmailList = (state) =>{
    return [...state.settingInfo.emailList]
}
export const getSettingIsShow = (state) => {
    return state.settingInfo.isShow
}