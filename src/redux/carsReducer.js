import {APICars} from "../api/api";

const ADD_CAR = "ADD_CAR",
    DELETE_CAR = "DELETE_CAR",
    SET_CARS = "SET_CARS"
const initialState = {
    carsList: [
    ]
}
const carsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CAR:
            return {...state, carsList: [...state.carsList, action.car]}
        case DELETE_CAR:
            return {...state, carsList: [...state.carsList.filter(item => item.id !== action.id)]}
        case SET_CARS:
            return {...state, carsList: action.carsList}
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
export const getCars = () => async (dispatch) => {
    let response = await APICars.getCars();
    dispatch(setCars(response));
}
export const addNewCar = (newCar) => async (dispatch) => {
    let response = await APICars.addCar(newCar);
    if (response) {
        dispatch(addCar(newCar));
    } else {
        console.log("Не удалось добавить автомобиль")
    }
}
export const deleteCarThunk = (id) => async (dispatch) => {
    let response = await APICars.deleteCar(id);
    if (response) {
        dispatch(deleteCar(id));
    } else {
        console.log("Не удалось удалить автомобиль")
    }
}
export default carsReducer