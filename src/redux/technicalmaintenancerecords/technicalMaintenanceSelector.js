export const getMaintenanceRecordList = (state) => {
    return state.maintenanceInfo.maintenanceList
}
export const getLastRecording = (state) =>{
    return state.maintenanceInfo.maintenanceList[state.maintenanceInfo.maintenanceList.length-1]

}
