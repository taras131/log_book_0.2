import {ApiNotice} from "../../api/api";
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
    let response = await ApiNotice.getNotice(userId)
    if(response){
        dispatch(setNoticeRecords(response))
    }
}
export const addNewNoticeRecord = (newRecord) => async (dispatch) =>{
    let response = await ApiNotice.addNotice(newRecord)
    if(response === "New notice record created successfully"){
        dispatch(getNoticeRecords(newRecord.userId))
    }
}
export const deleteNoticeRecord = (id, userId) => async (dispatch) => {
    let response = await ApiNotice.deleteNotice(id)
    if(response === "delete record successfully"){
        dispatch(deleteRecord(id))
    }
}
export const updateNoticeRecord = (newRecord) => async (dispatch) =>{
    let response = await ApiNotice.updateNotice(newRecord)
    if(response === "update notice record successfully"){
        dispatch(getNoticeRecords(newRecord.userId))
    }
}
export default noticeReducer