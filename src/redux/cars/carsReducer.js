import {APICars} from "../../api/api";
import {setMessageInfo} from "../messageinfo/MessageInfoReducer";
import {setPreloader} from "../preloader/preloaderReducer";

const ADD_CAR = "ADD_CAR",
    DELETE_CAR = "DELETE_CAR",
    SET_CARS = "SET_CARS",
    UPDATE_CAR = "UPDATE_CAR"
const initialState = {
    carsList: [],
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
            return {...state, carsList: [...state.carsList.filter(item => item.id !== action.upCar.id), action.upCar]}
        default:
            return state
    }
}
export const setCars = (carsList) => ({type: SET_CARS, carsList})
export const addCar = (car) => ({type: ADD_CAR, car})
export const deleteCar = (id) => ({type: DELETE_CAR, id})
export const updateCar = (upCar) => ({type: UPDATE_CAR, upCar})
export const getCars = (userId) => async (dispatch) => {
    let response = await APICars.getCars(userId);
    if (response.length > 0) {
        dispatch(setCars(response));
    }
}
export const addNewCar = (newCar) => async (dispatch) => {
    dispatch(setPreloader(true))
    let response = await APICars.addCar(newCar);
    if (response === "New car created successfully") {
        dispatch(addCar(newCar));
        dispatch(setMessageInfo("Автомобиль успешно добавлен"))
    } else {
        dispatch(setMessageInfo("Не удалось добавить автомобиль, попробуйте позже", "negative"))
    }
    dispatch(setPreloader(false))
}
export const deleteCarThunk = (id) => async (dispatch) => {
    dispatch(setPreloader(true))
    let response = await APICars.deleteCar(id);
    if (response) {
        dispatch(deleteCar(id));
        dispatch(setMessageInfo("Автомобиль успешно удалён"))
    } else {
        dispatch(setMessageInfo("Не удалось удалить автомобиль, попробуйте позже", "negative"))
    }
    dispatch(setPreloader(false))
}
export const updateCarThunk = (upCar) => async (dispatch) => {
    dispatch(setPreloader(true))
    let response = await APICars.updateCar(upCar);
    if (response === "car update successfully") {
        dispatch(updateCar(upCar))
        dispatch(setMessageInfo("Данные успешно обновлены"))
    } else {
        dispatch(setMessageInfo("Не удалось обновить данные, попробуйте позже", "negative"))
    }
    dispatch(setPreloader(false))
}
export default carsReducer