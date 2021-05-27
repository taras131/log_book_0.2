export const getInspectionDateValidById = (state, carId) => {
    if(state.insuranceInfo.insuranceList.length>0){
        const inspection = state.technicalInspectionInfo.technicalInspectionList.filter(item => item.carId === carId)[0]
        if(inspection){
            return inspection.dateIsValid
        } else{
            return "нет данных"
        }
    } else {
        return "нет данных"
    }
}