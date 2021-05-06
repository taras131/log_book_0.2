export const getCars = (state) => {
    return state.carsInfo.carsList
}
export const getCarById = (state, id) => {
    return (state.carsInfo.carsList.filter(item => item.id === id))[0]
}