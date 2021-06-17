import authenticationReducer, {setIsLoading, setMessage, setUser} from "./authenticationReducer";

const initialState = {
    user: {
        id: "",
        name: ""
    },
    isAuthentication: true,
    message: "",
    isLoading: false,
}
it(`isLoading should be true`,()=>{
    const action = setIsLoading(true)
    const newState = authenticationReducer(initialState, action)
    expect(newState.isLoading).toBe(true)
})
it(`user name should be taras`, ()=> {
    const action = setUser({id: "12345", name: "taras"})
    const newState = authenticationReducer(initialState, action)
    expect(newState.user.name).toBe("taras")
})
it(`user id should be 12345`, ()=> {
    const action = setUser({id: "12345", name: "taras"})
    const newState = authenticationReducer(initialState, action)
    expect(newState.user.id).toBe("12345")
})
it(`message should be некорректное имя пользователя`, ()=> {
    const action = setMessage("некорректное имя пользователя")
    const newState = authenticationReducer(initialState, action)
    expect(newState.message).toBe("некорректное имя пользователя")
})