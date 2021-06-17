import noticeReducer, {deleteRecord, setNoticeRecords} from "./noticeReducer";

const initialState = {
    noticeList: [

    ]
}
const filledInitialState = {
    noticeList: [
        {id: "123456", userId: "8888", carId: "654321", date: "15.09.2020", odometer: "99999", text: "hello"},
    ]
}
it(`text first notice should be hello`,()=> {
    const noticeList = [
        {id: "123456", userId: "123456", carId: "654321", date: "15.09.2020", odometer: "99999", text: "hello"},
        {id: "123457", userId: "123456", carId: "987654", date: "09.02.2021", odometer: "00000", text: "text"}
    ]
    const action = setNoticeRecords(noticeList)
    const newState = noticeReducer(initialState, action)
    expect(newState.noticeList[0].text).toBe("hello")
})
it(`notice list should be empty`,()=> {
    const action = deleteRecord("123456")
    const newState = noticeReducer(filledInitialState, action)
    expect(newState.noticeList.length).toBe(0)
})