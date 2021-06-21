import technicalInspectionReducer, {addInspection, setInspection} from "./technicalInspectionReducer";

const initialState = {
    technicalInspectionList: [],
}
it(`dateIsValid first record should be 19.07.2021`, ()=> {
    const technicalInspectionList = [
        {id: "1", dateIsValid: "19.07.2021", carId: "12345", userId: "9999"},
        {id: "2", dateIsValid: "25.07.2021", carId: "12345", userId: "98765"}
    ]
    const action = setInspection(technicalInspectionList)
    const newState = technicalInspectionReducer(initialState,action)
    expect(newState.technicalInspectionList[0].dateIsValid).toBe("19.07.2021")
})
it(`userId should be 98765`,()=> {
    const action = addInspection({id: "2", dateIsValid: "25.07.2021", carId: "12345", userId: "98765"})
    const newState = technicalInspectionReducer(initialState,action)
    expect(newState.technicalInspectionList[0].userId).toBe("98765")
})