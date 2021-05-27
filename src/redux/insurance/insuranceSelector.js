export const getInsuranceDateValidById = (state, carId) => {
    if(state.insuranceInfo.insuranceList.length>0){
        const insuranceRecord = state.insuranceInfo.insuranceList.filter(item => item.carId === carId)[0]
        if(insuranceRecord){
            return insuranceRecord.dateIsValid
        } else{
            return "нет данных"
        }
    } else {
        return "нет данных"
    }
}
