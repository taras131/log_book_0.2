export const getCars = (state, category) => {
    const allList = [...state.carsInfo.carsList]
    if(!category){
        return allList
    } else {
        return allList.filter(item => item.category === category)
    }
}
export const getCarById = (state, id) => {
    if(id === 'tool'){
        return {id: 'tool',model: 'tool', brand: 'tool', num: 'tool', yearManufacture: 'tool'}
    }
    if(id === 'material'){
        return {id: 'material',model: 'material', brand: 'material', num: 'material', yearManufacture: 'material'}
    }
    if(id === 'part'){
        return {id: 'part',model: 'part', brand: 'part', num: 'part', yearManufacture: 'part'}
    }
    return (state.carsInfo.carsList.filter(item => item.id === id))[0]
}