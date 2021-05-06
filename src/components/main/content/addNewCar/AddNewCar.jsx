import style from "./addNewCar.module.css"
import {useState} from "react";
import {useDispatch} from "react-redux";
import {addCar} from "../../../../store/carsReducer";

export const AddNewCar = () => {
    let [brandNewCar, setBrandNewCar] = useState("")
    let [modelNewCar, setModelNewCar] = useState("")
    let [yearNewCar, setYearNewCar] = useState("")
    let [errorMessage, setErrorMessage] = useState("")
    const onBrandChange = (e) => {
        setBrandNewCar(e.target.value)
    }
    const onModelChange = (e) => {
        setModelNewCar(e.target.value)
    }
    const onYearChange = (e) => {
        setYearNewCar(e.target.value)
    }
    const dispatch = useDispatch()
    const onAddClick = () => {
        if (validationForm()) {
            dispatch(addCar({
                id: 4, brand: brandNewCar,
                model: modelNewCar, yearManufacture: yearNewCar
            }))
            setBrandNewCar("")
            setModelNewCar("")
        }
    }
    const validationForm = () => {
        setErrorMessage("")
        if (brandNewCar.length < 2 || modelNewCar.length < 2 || yearNewCar < 4) {
            setErrorMessage("Все поля должны быть корректно заполнены")
            return false
        } else {
            return true
        }
    }
    return (
        <div className={style.addNewCar_wrapper}>
            <h2>Добавление нового автомобиля</h2>
            <input type="text" value={brandNewCar} onChange={onBrandChange}
                   placeholder="Марка"/>
            <input type="text" value={modelNewCar} onChange={onModelChange}
                   placeholder="Модель"/>
            <input type="text" value={yearNewCar} onChange={onYearChange}
                   placeholder="Год выпуска"/>
            <span className={style.errormessage}>{errorMessage}</span>
            <button onClick={onAddClick}>Добавить</button>
        </div>
    )
}