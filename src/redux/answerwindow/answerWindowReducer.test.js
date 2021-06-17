import answerWindowReducer, {setAnswer} from "./answerWindowReducer";

const initialState = {
    isShow: false,
    message: "",
    func: ""
}
it(`isShow should be true`, () => {
    const action = setAnswer("alert");
    const newState = answerWindowReducer(initialState, action)
    expect(newState.isShow).toBe(true);
});
it(`message should be alert`, () => {
    const action = setAnswer("alert");
    const newState = answerWindowReducer(initialState, action)
    expect(newState.message).toBe("alert");
});
it(`function should be return hello`,() => {
    const func = () => {
        return "hello"}
    const action = setAnswer("alert", func );
    const newState = answerWindowReducer(initialState, action)
    expect(newState.func()).toBe("hello");
})