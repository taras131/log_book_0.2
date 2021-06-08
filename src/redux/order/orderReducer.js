import {APIOrder, APISendMail} from "../../api/api";
import {setMessageInfo} from "../messageinfo/MessageInfoReducer";

const SET_NEW_INPUT_BLOCK = "SET_NEW_INPUT_BLOCK"
const CHANGE_NAME = "CHANGE_NAME"
const SET_ORDERS = "SET_ORDERS"
const RESET_INPUT_LIST = "RESET_INPUT_LIST"
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
    orderList: []
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
            return {
                ...state, inputList: [...state.inputList].map((item, index) => {
                    if (index === action.index) {
                        return {...item, [action.name]: action.value}
                    } else {
                        return item
                    }
                })
            }
        case SET_ORDERS:
            return {...state, orderList: action.payload}
        case RESET_INPUT_LIST:
            return {...state, inputList: [{partName: "", catalogNumber: "", partCount: "1"},]}
        default:
            return state
    }
}
const setOrders = (payload) => {
    return {type: SET_ORDERS , payload}
}
const resetInputList = () => {
    return {type: RESET_INPUT_LIST}
}
export const setNewInputBlock = () => {
    return {type: SET_NEW_INPUT_BLOCK}
}
export const inputBlockChangeName = (name, value, index) => {
    return {type: CHANGE_NAME, name, value, index}
}
export const addOrder = (userId, carId, inputList, typeOrder, statusOrder, date) => async (dispatch) => {
    const order = JSON.stringify(inputList)
    const result = await APIOrder.addOrder(userId, carId, order, typeOrder, statusOrder, date)
    console.log(result)
    if(result === "Данные успешно добавлены"){
        dispatch(setMessageInfo("Данные успешно добавлены"))
        dispatch(resetInputList())
        dispatch(getOrders(userId))
    } else {
        dispatch(setMessageInfo("Неудалось добавить заявку", "negative"))
    }
}
export const getOrders = (userId) => async (dispatch) => {
    const result = await APIOrder.getOrders(userId)
    if(result.length > 0) {
        const deserializationResult = result.map(item => {
            return {...item, arr_data: JSON.parse(item.arr_data)}
        })
        dispatch(setOrders(deserializationResult))
    } else {
        dispatch(setMessageInfo("Не удалось загрузить заявки ", "negative"))
    }
}
export const deleteOrder = (id, userId) => async(dispatch) => {
    let result = await APIOrder.deleteOrder(id, userId)
    if(result === "delete order successfully"){
        dispatch(getOrders(userId))
        dispatch(setMessageInfo("Заявка успешно удалена"))
    } else {
        dispatch(setMessageInfo("Не удалось удалить заявку ", "negative"))
    }
}
export const sendOrder = (email_1,email_2,email_3, title, brand, model, yearManufacture,
    num, vin, arr_data) => async (dispatch) => {
    let result = await APISendMail(email_1,email_2,email_3, title, brand, model, yearManufacture,
        num, vin, arr_data)
    console.log(result)
}
export default orderReducer