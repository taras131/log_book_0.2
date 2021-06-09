export const getRepairsByCarId = (state,carId) =>{
    return [...state.repairsInfo.repairsList.filter(item => item.carId === carId).reverse()]
}
export const getLastRepairsByCarId = (state,carId) =>{
    return {...state.repairsInfo.repairsList.filter(item => item.carId === carId).pop()}
}