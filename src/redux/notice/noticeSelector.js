export const getNoticeRecordByCarId = (state,carId) =>{
    return state.noticeInfo.noticeList.filter(item => carId === item.carId).reverse()
}
export const getLastNoticeRecord = (state,carId) =>{
    return state.noticeInfo.noticeList.filter(item => carId === item.carId).pop()
}
export const getCountNoticeByCarId = (state,carId) => {
    if(state.noticeInfo.noticeList.filter(item => carId === item.carId).length>0){
        return state.noticeInfo.noticeList.filter(item => carId === item.carId).length
    } else {
        return "нет"
    }
}