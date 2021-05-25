import {APIRepair} from "../../api/api";

const ADD_REPAIR_RECORD = 'ADD_REPAIR_RECORD'
const SET_REPAIRS = 'SET_REPAIRS'
const initialState ={
    repairsList:[]
}
const repairsReducer = (state = initialState, action) =>{
    switch (action.type){
        case ADD_REPAIR_RECORD:
            return {...state,repairsList: [...state.repairsList,action.payload]}
        case SET_REPAIRS:
            return {...state,repairsList: action.payload}
        default:
            return state
    }
}
const setRepairs = (payload) => {
    return ({type: SET_REPAIRS, payload})
}
export const addNewRepairRecord = (newRecord) => async (dispatch) => {
    let response = await APIRepair.addRepair(newRecord)
    if(response === "New date created successfully"){
        dispatch(getRepairRecord(newRecord.data.userId))
    }
}
export const getRepairRecord = (userId) => async (dispatch) => {
    let response = await APIRepair.getRepairs(userId)
    if(response.length>0){
        dispatch(setRepairs(response))
    }
}
export const updateRepairRecord = (newRecord) => async (dispatch) =>{
    let response = await APIRepair.updateRepair(newRecord)
    if(response === "repair record update successfully"){
        dispatch(getRepairRecord(newRecord.userId))
    }
}
export const deleteRepairRecord = (id, userId) => async (dispatch) =>{
    let response = await APIRepair.deleteRepair(id)
    if(response === "delete record successfully"){
        dispatch(getRepairRecord(userId))
    } else{
        console.log(response)
    }
}

export default repairsReducer