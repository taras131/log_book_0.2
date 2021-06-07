import {APIOrder} from "../../api/api";

const SET_NEW_INPUT_BLOCK = "SET_NEW_INPUT_BLOCK"
const CHANGE_NAME = "CHANGE_NAME"
const initialState = {
    userId: "",
    carId: "",
    inputList: [
        {
            partName: "",
            catalogNumber: "",
            partCount: "1"
        }
    ],
}
const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEW_INPUT_BLOCK:
            return {
                ...state, inputList: [...state.inputList, {
                    partName: "",
                    catalogNumber: "",
                    partCount: "1"
                }]
            }
        case CHANGE_NAME:
            return {...state,inputList: [...state.inputList].map((item,index)=> {
                if(index === action.index){
                    return {...item,[action.name]: action.value}
                } else {
                    return item
                }
                })}
        default:
            return state
    }
}
export const setNewInputBlock = () => {
    return {type: SET_NEW_INPUT_BLOCK}
}
export const inputBlockChangeName = (name, value, index) => {
    return {type: CHANGE_NAME, name, value, index}
}
export const addOrder = (userId, carId, inputList) => async (dispatch) => {
    const inputs = inputList.map(item=>JSON.stringify(item))
    const inputsString = JSON.stringify(inputs)
    const result = await APIOrder.addOrder(userId, carId, inputsString)
    console.log(result)
}
export const getOrders = (userId) => async(dispatch) => {
    const result = await APIOrder.getOrders(userId)
//    const inputs = JSON.parse(result[0].arr_data)
    console.log(result[0].arr_data)
   // const result1 = JSON.parse(result[0].arr_data)
  //  console.log(JSON.parse(result1))
}
export default orderReducer