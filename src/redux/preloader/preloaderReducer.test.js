import preloaderReducer, {setPreloader} from "./preloaderReducer";

const initialState = {
    isLoading: false
}
it(`isLoading should be true`,()=>{
    const action = setPreloader(true)
    const newState = preloaderReducer(initialState,action)
    expect(newState.isLoading).toBe(true)
})