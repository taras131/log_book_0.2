import {APIOrder, APISendMail} from "../../api/api";
import {setMessageInfo} from "../messageinfo/MessageInfoReducer";
import {setPreloader} from "../preloader/preloaderReducer";
import {useSelector} from "react-redux";
import {getCurrentDate} from "../../common/getCurrentDate";

const SET_NEW_INPUT_BLOCK = "SET_NEW_INPUT_BLOCK"
const CHANGE_NAME = "CHANGE_NAME"
const SET_ORDERS = "SET_ORDERS"
const RESET_INPUT_LIST = "RESET_INPUT_LIST"
const SET_INPUT_LIST = "SET_INPUT_LIST"
const initialState = {
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
        case SET_INPUT_LIST:
            return {...state, inputList: action.payload}
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
export const setOrders = (payload) => ({type: SET_ORDERS, payload})
export const resetInputList = () => ({type: RESET_INPUT_LIST})
export const setNewInputBlock = () => ({type: SET_NEW_INPUT_BLOCK})
export const inputBlockChange = (name, value, index) => ({type: CHANGE_NAME, name, value, index})
export const setInputList = (payload) => ({type: SET_INPUT_LIST, payload})
export const addOrder = (userId, carId, inputList, typeOrder, statusOrder, date) => async (dispatch) => {
    dispatch(setPreloader(true))
    const order = JSON.stringify(inputList)
    const result = await APIOrder.addOrder(userId, carId, order, typeOrder, statusOrder, date)
    if (result === "Данные успешно добавлены") {
        dispatch(setMessageInfo("Данные успешно добавлены"))
        dispatch(resetInputList())
        dispatch(getOrders(userId))
    } else {
        dispatch(setMessageInfo("Неудалось добавить заявку", "negative"))
    }
    dispatch(setPreloader(false))
}
export const getOrders = (userId) => async (dispatch) => {
    dispatch(setPreloader(true))
    const result = await APIOrder.getOrders(userId)
    if (result.length > 0) {
        const deserializationResult = result.map(item => {
            return {...item, arr_data: JSON.parse(item.arr_data)}
        })
        dispatch(setOrders(deserializationResult))
    } else {
//        dispatch(setMessageInfo("Не удалось загрузить заявки ", "negative"))
    }
    dispatch(setPreloader(false))
}
export const deleteOrder = (id, userId) => async (dispatch) => {
    dispatch(setPreloader(true))
    let result = await APIOrder.deleteOrder(id, userId)
    if (result === "delete order successfully") {
        dispatch(getOrders(userId))
        dispatch(setMessageInfo("Заявка успешно удалена"))
    } else {
        dispatch(setMessageInfo("Не удалось удалить заявку ", "negative"))
    }
    dispatch(setPreloader(false))
}
export const sendOrder = (email_1, email_2, email_3, title, brand, model, yearManufacture,
                          num, vin, arr_data, order) => async (dispatch) => {
    dispatch(setPreloader(true))
    let result = await APISendMail(email_1, email_2, email_3, title, brand, model, yearManufacture,
        num, vin, arr_data)
    if (result) {
        dispatch(setMessageInfo("Заявка успешно отправлена"))
        dispatch(updateOrder(order.id, order.userId, order.carId, arr_data, order.typeOrder,
            "отправлено "+getCurrentDate(), order.date))
    } else {
        dispatch(setMessageInfo("Не удалось отправить заявку ", "negative"))
    }
    dispatch(setPreloader(false))
}
export const updateOrder = (id, userId, carId, inputList, typeOrder, statusOrder, date) => async (dispatch) => {
    dispatch(setPreloader(true))
    const order = JSON.stringify(inputList)
    let result = await APIOrder.updateOrder(id, userId, carId, order, typeOrder, statusOrder, date)
    if (result === "Данные успешно добавлены") {
        dispatch(resetInputList())
        dispatch(getOrders(userId))
        dispatch(setMessageInfo("Заявка успешно обновлена"))
    } else {
        dispatch(setMessageInfo("Не удалось обновить заявку ", "negative"))
    }
    dispatch(setPreloader(false))
}
export default orderReducer