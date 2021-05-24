export const getRepairsByCarId = (state,carId) =>{
    return [...state.repairsInfo.repairsList.filter(item => item.carId === carId)]
}
export const getLastRepairsByCarId = (state,carId) =>{
    return {...state.repairsInfo.repairsList.filter(item => item.carId === carId).pop()}
}