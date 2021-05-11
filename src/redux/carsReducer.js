import {APICars} from "../api/api";

const ADD_CAR = "ADD_CAR",
    DELETE_CAR = "DELETE_CAR",
    SET_CARS = "SET_CARS"
const initialState = {
    carsList: [
        {id: `1`, brand: "Газ", model: "330202", yearManufacture: 2012},
        {id: `2`, brand: "Тойота", model: "Camry", yearManufacture: 2006},
        {id: `3`, brand: "Фольцваген", model: "Caravelle", yearManufacture: 2018}
    ]
}
const carsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CAR:
            return {...state, carsList: [...state.carsList, action.car]}
        case DELETE_CAR:
            return {...state, carsList: [...state.carsList.filter(item => item.id !== action.id)]}
        default:
            return state
    }
}
export const setCars = (carsList) => {
    return {type: SET_CARS}
}
export const addCar = (car) => {
    return {type: ADD_CAR, car}
}
export const deleteCar = (id) => {
    return {type: DELETE_CAR, id}
}
export const getCars = () => async (dispatch) => {
    console.log("thunk create ")
    let response = await APICars.getCars();
    dispatch(setCars(response));
    console.log(response)

}
export default carsReducer