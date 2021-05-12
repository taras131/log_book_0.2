import {APICars} from "../api/api";

const ADD_CAR = "ADD_CAR",
    DELETE_CAR = "DELETE_CAR",
    SET_CARS = "SET_CARS"
const initialState = {
    carsList: [
       // {id: `1`, brand: "Газ", model: "330202", yearManufacture: 2012},
      // {id: `2`, brand: "Тойота", model: "Camry", yearManufacture: 2006},
       // {id: `3`, brand: "Фольцваген", model: "Caravelle", yearManufacture: 2018}
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
    console.log(newCar)
    let response = await APICars.addCar(newCar);
    console.log(response)
    dispatch(addCar(newCar));

}
export default carsReducer