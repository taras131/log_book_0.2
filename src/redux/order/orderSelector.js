export const getInputList = (state) => {
    if(state.orderInfo){
        return [...state.orderInfo.inputList]
    } else {
        return ""
    }
}
export const getOrdersByCarId = (state, carId) =>{
    return [...state.orderInfo.orderList.filter(item => item.carId === carId).reverse()]
}
export const getAllOrders = (state) => {
    return [...state.orderInfo.orderList.reverse()]
}
export const getPartsOrders = (state) =>{
    return [...state.orderInfo.orderList.reverse().filter(item => item.carId.length > 9)]
}
export const getToolsOrders = (state) =>{
    return [...state.orderInfo.orderList.reverse().filter(item => item.carId === "tools")]
}
export const getMaterialsOrders = (state) =>{
    return [...state.orderInfo.orderList.reverse().filter(item => item.carId === "materials")]
}