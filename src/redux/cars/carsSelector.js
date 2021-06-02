export const getCars = (state, category = "all") => {
    const allList = [...state.carsInfo.carsList]
    if(category === "all"){
        return allList
    } else {
        return allList.filter(item => item.category === category)
    }
}
export const getCarById = (state, id) => {
    return (state.carsInfo.carsList.filter(item => item.id === id))[0]
}