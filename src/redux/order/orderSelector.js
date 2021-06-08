export const getInputList = (state) => {
    if(state.orderInfo){
        return [...state.orderInfo.inputList]
    } else {
        return ""
    }
}
export const getOrdersByCarId = (state, carId) =>{
    return [...state.orderInfo.orderList.filter(item => item.carId === carId)]
}