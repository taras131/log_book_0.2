export const getMaintenanceRecordList = (state, id) => {
    return state.maintenanceInfo.maintenanceList.filter(item => item.carId === id)
}
export const getLastRecording = (state) =>{
    return state.maintenanceInfo.maintenanceList[state.maintenanceInfo.maintenanceList.length-1]

}
