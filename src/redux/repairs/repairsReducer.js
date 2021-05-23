import {APIRepair} from "../../api/api";

const ADD_REPAIR_RECORD = 'ADD_REPAIR_RECORD'
const initialState ={
    repairsList:[]
}

const repairsReducer = (state = initialState, action) =>{
    switch (action.type){
        case ADD_REPAIR_RECORD:
            return {...state,repairsList: [...state.repairsList,action.payload]}
        default:
            return state
    }
}

export const addNewRepairRecord = (newRecord) => async (dispatch) => {
let response = await APIRepair.addRepair(newRecord)
    console.log(response)
}

export default repairsReducer