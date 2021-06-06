export const getPartListItemByItemNumber = (state, itemNumber) => {
    const item = state.orderInfo.partList.find(item => item.itemNumber === itemNumber);
    if(item){
        return {itemNumber: item.itemNumber ? itemNumber : "",
            partName: item.partName ? item.partName : "",
            catalogNumber: item.catalogNumber ? item.catalogNumber : "",
            partCount: item.partCount ? item.partCount : ""
        }
    } else {
        return {itemNumber: "",
            partName: "",
            catalogNumber: "",
            partCount: ""
        }
    }

}
export const getNameByItemNumber = (state, itemNumber) => {
    return {...state.orderInfo.partList.filter(item => item.itemNumber === itemNumber)}
}