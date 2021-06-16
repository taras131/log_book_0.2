import {ApiNotice} from "../../api/api";
import {setMessageInfo} from "../messageinfo/MessageInfoReducer";
import {setPreloader} from "../preloader/preloaderReducer";
const SET_NOTICE = "SET_NOTICE"
const  DELETE_RECORD =  "DELETE_RECORD"
const initialState = {
    noticeList: [

    ]
}
const noticeReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_NOTICE:
            return {...state, noticeList: action.noticeList}
        case DELETE_RECORD:
            return {...state, noticeList: [...state.noticeList.filter(item => item.id !== action.id)]}
        default:
            return state
    }
}
const setNoticeRecords = (noticeList) =>{
    return {type: SET_NOTICE,noticeList }
}
const deleteRecord = (id) => {
    return {type: DELETE_RECORD, id}
}
export const getNoticeRecords = (userId) => async (dispatch) =>{
    dispatch(setPreloader(true))
    let response = await ApiNotice.getNotice(userId)
    if(response){
        dispatch(setNoticeRecords(response))
    }
    dispatch(setPreloader(false))
}
export const addNewNoticeRecord = (newRecord) => async (dispatch) =>{
    dispatch(setPreloader(true))
    let response = await ApiNotice.addNotice(newRecord)
    if(response === "New notice record created successfully"){
        dispatch(getNoticeRecords(newRecord.userId))
        dispatch(setMessageInfo("Напоминание успешно создано"))
    } else {
        dispatch(setMessageInfo("Не удалось добавить напоминание попробуйте позднее ", "negative"))
    }
    dispatch(setPreloader(false))
}
export const deleteNoticeRecord = (id, userId) => async (dispatch) => {
    dispatch(setPreloader(true))
    let response = await ApiNotice.deleteNotice(id)
    if(response === "delete record successfully"){
        dispatch(deleteRecord(id))
        dispatch(setMessageInfo("Напоминание успешно удалено"))
    } else {
        dispatch(setMessageInfo("Не удалось удалить напоминание попробуйте позднее", "negative"))
    }
    dispatch(setPreloader(false))
}
export const updateNoticeRecord = (newRecord) => async (dispatch) =>{
    dispatch(setPreloader(true))
    let response = await ApiNotice.updateNotice(newRecord)
    console.log(response)
    if(response === "update notice record successfully"){
        dispatch(getNoticeRecords(newRecord.userId))
        dispatch(setMessageInfo("Напоминание успешно обновлено"))
    } else {
        dispatch(setMessageInfo("Не удалось отредактировать напоминание попробуйте позднее", "negative"))
    }
    dispatch(setPreloader(false))
}
export default noticeReducer