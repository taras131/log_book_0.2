import {APIOrder} from "../../api/api";

const ADD_ORDER = "ADD_ORDER"
const ON_PART_LIST_CHANGE = "ON_PART_LIST_CHANGE"
const CHANGE_PART_NAME = "CHANGE_PART_NAME"
const initialState = {
    userId: "",
    carId: "",
    partList: [
        {
            itemNumber: "1",
            partName: "",
            catalogNumber: "",
            partCount: "1"
        }
    ],
}
const orderReducer = (state = initialState, action) => {
    let isFindItem
    switch (action.type) {
        case CHANGE_PART_NAME:
            isFindItem = state.partList.find(item => item.itemNumber === action.itemNumber);
            if (isFindItem) {
                return state
                //  return {...state,partList: [...state.partList, state.partList[action.itemNumber].partName: action.value]}
            } else {
                return {
                    ...state,
                    partList: [...state.partList, {
                        itemNumber: action.itemNumber,
                        partName: action.partName,
                        catalogNumber: "",
                        partCount: "1"
                    }]
                }
            }
        case ADD_ORDER:
            return {...state}
        case ON_PART_LIST_CHANGE:
            isFindItem = state.partList.find(item => item.itemNumber === action.itemNumber);
            if (isFindItem) {
                return state
            } else {
                return {
                    ...state,
                    partList: [...state.partList, {itemNumber: action.itemNumber, [action.name]: action.value}]
                }
            }
        default:
            return state
    }
}
export const changePartName = (itemNumber, value) => {
    return {type: CHANGE_PART_NAME, itemNumber, value}
}
export const onPartListChange = (itemNumber, name, value) => {
    return {type: ON_PART_LIST_CHANGE, itemNumber, name, value}
}
export const addOrder = (userId, carId) => async (dispatch) => {
    const result = await APIOrder.addOrder(userId, carId)
    console.log(result)
}
export default orderReducer