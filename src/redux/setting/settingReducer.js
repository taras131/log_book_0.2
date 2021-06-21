import {APISetting} from "../../api/api";
import {setPreloader} from "../preloader/preloaderReducer";
import {setMessageInfo} from "../messageinfo/MessageInfoReducer";

const SET_SETTING = "SET_SETTING"
const SET_IS_SHOW = "SET_IS_SHOW"
const initialState = {
    emailList: [],
    isShow: false
}
const settingReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SETTING:
            return {...state,emailList: action.payload}
        case SET_IS_SHOW:
            return {...state,isShow: action.payload}
        default:
            return state
    }
}
export const setSetting = (payload) =>({type: SET_SETTING, payload})
export const setIsSettingShow = (payload) => ({type: SET_IS_SHOW, payload})
export const getSetting =(userId) => async (dispatch) =>{
    dispatch(setPreloader(true))
    let result = await APISetting.getSetting(userId)
    if(result[0]){
        dispatch(setSetting([result[0].email_1, result[0].email_2, result[0].email_3]))
    } else {
        dispatch(setMessageInfo("Не удалось загрузить настройки, попробуйте позже", "negative"))
    }
    dispatch(setPreloader(false))
}
export const updateSetting = (emailList) => async (dispatch) => {
    dispatch(setPreloader(true))
    let result = await APISetting.updateSetting(emailList)
    if(result === "update settings successfully"){
        console.log(emailList.email_1)
        dispatch(setSetting([emailList.email_1, emailList.email_2, emailList.email_3]))
        dispatch(setMessageInfo("Данные успешно обновлены"))
    } else {
        dispatch(setMessageInfo("Не удалось обновить данные, попробуйте позже", "negative"))
    }
    dispatch(setPreloader(false))
}
export default settingReducer