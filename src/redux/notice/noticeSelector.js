export const getNoticeRecordByCarId = (state,carId) =>{
    return state.noticeInfo.noticeList.filter(item => carId === item.carId)
}
export const getLastNoticeRecord = (state,carId) =>{
    return state.noticeInfo.noticeList.filter(item => carId === item.carId).pop()
}