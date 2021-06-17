import InsuranceReducer, {addInsurance, setInsurance} from "./insuranceReducer";

const initialState = {
    insuranceList: []
}
it(`first insurance record date should be 20.06.2020`, ()=> {
    const insuranceList = [
        {date: "20.06.2020", carId: "12345", userId: "54321userId"},
        {date: "23.09.2020", carId: "67890", userId: "54321userId"}
    ]
    const action = setInsurance(insuranceList)
    const newState =  InsuranceReducer(initialState,action)
    expect(newState.insuranceList[0].date).toBe("20.06.2020")
})
it(`carId added insurance record should be 67890`,()=>{
    const insuranceRecord = {date: "23.09.2020", carId: "67890", userId: "54321userId"}
    const action = addInsurance(insuranceRecord)
    const newState =  InsuranceReducer(initialState,action)
    expect(newState.insuranceList[0].carId).toBe("67890")
})