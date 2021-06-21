import settingReducer, {setIsSettingShow, setSetting} from "./settingReducer";

const initialState = {
    emailList: [],
    isShow: false
}
it(`second email should be tarassz@mail.ru`, ()=> {
    const emailList = ["mossnabitkana@gmail.com", "tarassz@mail.ru"]
    const action = setSetting(emailList)
    const newState = settingReducer(initialState, action)
    expect(newState.emailList[1]).toBe("tarassz@mail.ru")
})
it(`isShow should be true`,()=>{
    const action = setIsSettingShow(true)
    const newState = settingReducer(initialState, action)
    expect(newState.isShow).toBe(true)
})
