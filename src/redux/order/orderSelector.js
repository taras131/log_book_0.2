export const getInputList = (state) => {
    if(state.orderInfo){
        return [...state.orderInfo.inputList]
    } else {
        return ""
    }

}