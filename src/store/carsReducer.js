const ADD_CAR = "ADD_CAR",
    DELETE_CAR = "DELETE_CAR"
const initialState = {
    carsList: [
        {id: 1, brand: "Газ", model: "330202", yearManufacture: 2012},
        {id: 2, brand: "Тойота", model: "Camry", yearManufacture: 2006},
        {id: 3, brand: "Фольцваген", model: "Caravelle", yearManufacture: 2018}
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
export const addCar = (car) => {
    return {type: ADD_CAR, car}
}
export const deleteCar = (id) => {
    return {type: DELETE_CAR, id}
}
export default carsReducer