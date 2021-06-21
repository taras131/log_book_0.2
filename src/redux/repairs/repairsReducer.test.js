import repairsReducer, {setRepairs} from "./repairsReducer";

const initialState = {
    repairsList: []
}
it(`result should be fail`,()=>{
    const repairsList = [
        {id: "1",carId: "11111", userId: "22222", odometer: "35000", date: "19.06.2021", reasonsRepairs: "Важные причины",
            usedParts: "parts", accomplishedWork: "works", result: "success"},
        {id: "2",carId: "11111", userId: "22222", odometer: "36000", date: "19.06.2021", reasonsRepairs: "Важные причины",
            usedParts: "parts", accomplishedWork: "works", result: "fail"}
    ]
    const action = setRepairs(repairsList)
    const newState = repairsReducer(initialState, action)
    expect(newState.repairsList[1].result).toBe("fail")
})