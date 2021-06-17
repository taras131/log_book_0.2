import carsReducer, {addCar, deleteCar, setCars, updateCar} from "./carsReducer";

const initialState = {
    carsList: [],
}
const filledInitialState = {
    carsList: [{
        userId: "userId", id: "12345", brand: "audi", model: "A3", yearManufacture: 2009, num: "Х434ФХ199",
        vin: "IIIHGYTFDDGDFGD765", category: 0
    },],
    isLoading: false
}
it(`second car brand should be toyota`, () => {
    const carList = [
        {
            userId: "userId", id: "12345", brand: "audi", model: "A3", yearManufacture: 2009, num: "Х434ФХ199",
            vin: "IIIHGYTFDDGDFGD765", category: 0
        },
        {
            userId: "userId", id: "54321", brand: "toyota", model: "camry", yearManufacture: 2010, num: "A455ФХ199",
            vin: "FDDGDFGD765TDTHDR", category: 0
        }
    ]
    const action = setCars(carList)
    const newState = carsReducer(initialState, action)
    expect(newState.carsList[1].brand).toBe("toyota")
})
it(`model added car should be A3`, () => {
    const car = {
        userId: "userId", id: "12345", brand: "audi", model: "A3", yearManufacture: 2009, num: "Х434ФХ199",
        vin: "IIIHGYTFDDGDFGD765", category: 0
    }
    const action = addCar(car)
    const newState = carsReducer(initialState, action)
    expect(newState.carsList[0].model).toBe("A3")
})
it(`car should be delete`, () => {
    const action = deleteCar("12345")
    const newState = carsReducer(filledInitialState, action)
    expect(newState.carsList.length).toBe(0)
})
it('new yearManufacture should be 2020', () => {
    const car = {
        userId: "userId", id: "12345", brand: "audi", model: "A3", yearManufacture: 2020, num: "Х434ФХ199",
        vin: "IIIHGYTFDDGDFGD765", category: 0
    }
    const action = updateCar(car)
    const newState = carsReducer(filledInitialState, action)
    expect(newState.carsList[0].yearManufacture).toBe(2020)
})