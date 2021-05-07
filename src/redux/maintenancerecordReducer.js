const ADD_RECORD = "ADD_RECORD"
const initialState = {
    maintenanceList: [
        {carId: "1", number: 0, date: "11/04/2020", odometer: 115300, list: "махнули масло"},
        {carId: "1", number: 1, date: "13/02/2021", odometer: 130300, list: "махнули масло и ещё что то "},
        {carId: "2", number: 0, date: "11/04/2015", odometer: 5300, list: "махнули масло"},
        {carId: "2", number: 1, date: "13/02/2021", odometer: 13000, list: "махнули масло и ещё что то "},
    ]
}
const maintenancerecordReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_RECORD:
            return {...state, maintenanceList: [...state.maintenanceList, action.list]}
        default:
            return state
    }

}
export const addMaintenanceRecord = (list) => {
    console.log(list)
    return {type: ADD_RECORD, list}
}

export default maintenancerecordReducer