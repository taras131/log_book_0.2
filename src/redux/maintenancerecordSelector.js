

export const getMaintenanceRecordListById = (state,id) => {
    return state.maintenanceInfo.maintenanceList.filter(item => item.carId === id)
}