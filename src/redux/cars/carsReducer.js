import {APICars} from "../../api/api";
import {setMessageInfo} from "../messageinfo/MessageInfoReducer";

const ADD_CAR = "ADD_CAR",
    DELETE_CAR = "DELETE_CAR",
    SET_CARS = "SET_CARS",
    UPDATE_CAR = "UPDATE_CAR"
const initialState = {
    carsList: [
    ],
    isLoading: false
}
const carsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CAR:
            return {...state, carsList: [...state.carsList, action.car]}
        case DELETE_CAR:
            return {...state, carsList: [...state.carsList.filter(item => item.id !== action.id)]}
        case SET_CARS:
            return {...state, carsList: action.carsList}
        case UPDATE_CAR:
            return {...state, carsList: [...state.carsList.filter(item=> item.id !== action.upCar.id),action.upCar]}
        default:
            return state
    }
}
export const setCars = (carsList) => {
    return {type: SET_CARS, carsList}
}
export const addCar = (car) => {
    return {type: ADD_CAR, car}
}
export const deleteCar = (id) => {
    return {type: DELETE_CAR, id}
}
const updateCar = (upCar) =>{
    return({type: UPDATE_CAR, upCar})
}
export const getCars = (userId) => async (dispatch) => {
    let response = await APICars.getCars(userId);
    if(response.length>0){
        dispatch(setCars(response));
    }
}
export const addNewCar = (newCar) => async (dispatch) => {
    let response = await APICars.addCar(newCar);
    if (response === "New car created successfully") {
        dispatch(addCar(newCar));
        dispatch(setMessageInfo("Автомобиль успешно добавлен"))
    } else {
        dispatch(setMessageInfo("Не удалось добавить автомобиль, попробуйте позже", "negative"))

    }
}
export const deleteCarThunk = (id) => async (dispatch) => {
    let response = await APICars.deleteCar(id);
    if (response) {
        dispatch(deleteCar(id));
        dispatch(setMessageInfo("Автомобиль успешно удалён"))
    } else {
        dispatch(setMessageInfo("Не удалось удалить автомобиль, попробуйте позже", "negative"))
    }
}
export const updateCarThunk = (upCar) => async (dispatch) => {
    let response = await APICars.updateCar(upCar);
    if(response === "car update successfully"){
        dispatch(updateCar(upCar))
        dispatch(setMessageInfo("Данные успешно обновлены"))
    } else {
        dispatch(setMessageInfo("Не удалось обновить данные, попробуйте позже", "negative"))
    }
}
export default carsReducer