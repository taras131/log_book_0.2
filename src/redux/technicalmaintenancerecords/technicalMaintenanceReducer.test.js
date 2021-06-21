import technicalMaintenanceReducer, {
    addMaintenance,
    deleteMaintenance,
    setMaintenance
} from "./technicalMaintenanceReducer";

const initialState = {
    maintenanceList: [],
}
const filledInitialState = {
    maintenanceList: [{
        id: "1", carId: "12345", datecommission: "18.04.2020", odometer: "35000",
        text: "test", userId: "54321"
    },
        {
            id: "2", carId: "12345", datecommission: "04.08.2021", odometer: "55000",
            text: "test2", userId: "54321"
        }],
}
it(`datecommission second record should be 04.08.2021`, () => {
    const maintenanceList = [
        {
            id: "1", carId: "12345", datecommission: "18.04.2020", odometer: "35000",
            text: "test", userId: "54321"
        },
        {
            id: "2", carId: "12345", datecommission: "04.08.2021", odometer: "55000",
            text: "test2", userId: "54321"
        }
    ]
    const action = setMaintenance(maintenanceList)
    const newState = technicalMaintenanceReducer(initialState, action)
    expect(newState.maintenanceList[1].datecommission).toBe("04.08.2021")
})
it(`odometer first record should be 35000`, () => {
    const action = addMaintenance({
        id: "1", carId: "12345", datecommission: "18.04.2020", odometer: "35000",
        text: "test", userId: "54321"
    })
    const newState = technicalMaintenanceReducer(initialState, action)
    expect(newState.maintenanceList[0].odometer).toBe("35000")
})
it(` maintenanceList length should be 1`, ()  => {
    const action = deleteMaintenance("2")
    const newState = technicalMaintenanceReducer(filledInitialState, action)
    expect(newState.maintenanceList.length).toBe(1)
})