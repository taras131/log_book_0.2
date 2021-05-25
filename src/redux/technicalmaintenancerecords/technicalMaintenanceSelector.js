export const getMaintenanceRecordList = (state, id) => {
    return state.maintenanceInfo.maintenanceList.filter(item => item.carId === id)
}
export const getLastMaintenanceRecording = (state, id) =>{
    if(state.maintenanceInfo.maintenanceList){
        return [...state.maintenanceInfo.maintenanceList.filter(item => item.carId === id)].pop()
    } else {
        return null
    }


}
