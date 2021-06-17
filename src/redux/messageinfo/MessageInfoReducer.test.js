import MessageInfoReducer, {resetMessageInfo, setMessageInfo} from "./MessageInfoReducer";

const initialState = {
    message: "",
    isShow: false,
    sort: ""
}
const filledInitialState = {
    message: "success",
    isShow: true,
    sort: "positive"
}
it(`isShow should be true`, () => {
    const action = setMessageInfo("success")
    const newState = MessageInfoReducer(initialState, action)
    expect(newState.isShow).toBe(true)
})
it(`message should be success`, () => {
    const action = setMessageInfo("success")
    const newState = MessageInfoReducer(initialState, action)
    expect(newState.message).toBe("success")
})
it(`message sort should be positive`, () => {
    const action = setMessageInfo("success")
    const newState = MessageInfoReducer(initialState, action)
    expect(newState.sort).toBe("positive")
})
it(`message sort should be positive`, () => {
    const action = setMessageInfo("success", "negative")
    const newState = MessageInfoReducer(initialState, action)
    expect(newState.sort).toBe("negative")
})
it(`isShow should be false`, () => {
    const action = resetMessageInfo()
    const newState = MessageInfoReducer(filledInitialState, action)
    expect(newState.isShow).toBe(false)
})