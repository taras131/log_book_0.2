import orderReducer, {
    inputBlockChange,
    resetInputList,
    setInputList,
    setNewInputBlock,
    setOrders
} from "./orderReducer";

const initialState = {
    inputList: [
        {
            partName: "",
            catalogNumber: "",
            partCount: "1"
        }
    ],
    orderList: []
}
const filledInitialState = {
    inputList: [
        {
            partName: "клапан",
            catalogNumber: "456456-56456",
            partCount: "8"
        }
    ],
    orderList: []
}
it(`part partName should be клапан`, () => {
    const orderList = [
        {
            carId: "1622646665848", date: "10.06.2021", id: "or_60c06e3d24ef59.26762835", statusOrder: "не отправлено",
            typeOrder: "Плановый ремонт", userId: "tp_60b79ebbcc5ff1.08229460",
            arr_data: [
                {partName: "test", catalogNumber: "fgd", partCount: "1"},
                {partName: "cvcbn", catalogNumber: "vcbn", partCount: "1"},
                {partName: "cvbn", catalogNumber: "vcbn", partCount: "1"},
                {partName: "апрпоп", catalogNumber: "паропаро", partCount: "1"},]
        },
        {
            carId: "1622646665848", date: "10.06.2021", id: "or_60c06e3d24ef59.2676452", statusOrder: "отправлено",
            typeOrder: "Плановый ремонт", userId: "tp_60b79ebbcc5ff1.08229460",
            arr_data: [
                {partName: "клапан", catalogNumber: "fgd", partCount: "10"},
                {partName: "cvcbn", catalogNumber: "vcbn", partCount: "100"},
                {partName: "cvbn", catalogNumber: "vcbn", partCount: "500"},
                {partName: "апрпоп", catalogNumber: "паропаро", partCount: "1"},]
        },
    ]
    const action = setOrders(orderList)
    const newState = orderReducer(initialState, action)
    expect(newState.orderList[1].arr_data[0].partName).toBe("клапан")
})
it(`partCount should be 1`,()=> {
    const action = resetInputList()
    const newState = orderReducer(filledInitialState , action)
    expect(newState.inputList[0].partName).toBe("")
})
it(`inputList length should be 2`,()=> {
    const action = setNewInputBlock()
    const newState = orderReducer(filledInitialState , action)
    expect(newState.inputList.length).toBe(2)
})
it(`catalogNumber should be 1111-2222`, ()=> {
    const action = inputBlockChange("catalogNumber", '1111-2222', 0)
    const newState = orderReducer(filledInitialState , action)
    expect(newState.inputList[0].catalogNumber).toBe('1111-2222')
})
it(`partName should be болт`, () => {
    const action = setInputList([{partName: "болт", catalogNumber: "456456-56456", partCount: "8"}])
    const newState = orderReducer(initialState, action)
    expect(newState.inputList[0].partName).toBe("болт")
})