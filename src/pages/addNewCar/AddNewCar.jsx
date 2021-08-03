import style from "./addNewCar.Module.css"
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addNewCar} from "../../redux/cars/carsReducer";
import {getMyId} from "../../redux/authentication/authenticationSelector";

export const AddNewCar = () => {
    console.log("AddNewCar")
    let [errorMessage, setErrorMessage] = useState("")
    const [data, setData] = useState({
        brandNewCar: '',
        modelNewCar: '',
        num: '',
        yearNewCar: '',
        vin: ''
    })
    const [category, setCategory] = useState("1")
    const onInputChange = (e) =>{
            setData({...data,[e.target.name]: e.target.value})
    }
    const onSelectCategory = (e) => {
        setCategory(e.target.value)
    }
    const dispatch = useDispatch()
    const userId = useSelector(state => getMyId(state))
    const onAddClick = () => {
        if (validationForm()) {
            dispatch(addNewCar({ userId: userId,
                id: "" + new Date().valueOf(), brand: data.brandNewCar,
                model: data.modelNewCar, yearManufacture: ""+data.yearNewCar, num: data.num,
                vin: data.vin, category: category,
            }))
            setData({
                brandNewCar: '',
                modelNewCar: '',
                num: '',
                yearNewCar: '',
                vin: '',
            })
        }
    }
    const validationForm = () => {
        setErrorMessage("")
        if (data.brandNewCar.length < 2 || data.modelNewCar.length < 2 || data.yearNewCar < 1900 || data.yearNewCar > 2021) {
            setErrorMessage("Все поля должны быть корректно заполнены")
            return false
        } else {
            return true
        }
    }
    return (
        <div className={style.addNewCar_wrapper}>
            <h3>Добавление нового автомобиля:</h3>
            <input type="text" value={data.brandNewCar} onChange={onInputChange}
                   placeholder="Марка" name="brandNewCar"/>
            <input type="text" value={data.modelNewCar} onChange={onInputChange}
                   placeholder="Модель" name="modelNewCar"/>
            <input type="text" value={data.num} onChange={onInputChange}
                   placeholder="Номер" name="num"/>
            <input type="number" value={data.yearNewCar} onChange={onInputChange}
                   placeholder="Год выпуска" name="yearNewCar"/>
            <input type="text" value={data.vin} onChange={onInputChange}
                   placeholder="Вин номер" name="vin"/>
            <select style={{height: 40, padding: 5, marginTop:15}} onChange={onSelectCategory} id="period" name="period" value={category}>
                <option style={{height: 40}} value="0">Легковой автомобиль</option>
                <option style={{height: 40}} value="1">Грузовой автомобиль</option>
                <option style={{height: 40}} value="2">Спецтехника</option>
            </select>
            <span className={style.errormessage}>{errorMessage}</span>
            <button onClick={onAddClick}>Добавить</button>
        </div>
    )
}