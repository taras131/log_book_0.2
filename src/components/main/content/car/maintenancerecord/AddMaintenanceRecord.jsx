import style from "./maintenanceitemwrapper.module.css"
import {useState} from "react";
import {useDispatch} from "react-redux";
import {addMaintenanceRecord} from "../../../../../redux/maintenancerecordReducer";

export const AddMaintenanceRecord = (props) => {
    const dispatch = useDispatch()
    const [odometer, setOdometer] = useState("")
    const [date, setDate] = useState("")
    const [list, setList] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const onOdometerChange = (event) => {
        setOdometer(event.target.value)
    }
    const onChangeDate = (event) => {
        setDate(event.target.value)
    }
    const onListChange = (event) => {
        setList(event.target.value)
    }
    const onAddClick = () => {
        dispatch(addMaintenanceRecord({
            carId: props.id,
            date: date,
            odometer: odometer,
            text: list
        }))
        setOdometer("")
        setDate("")
        setList("")

    }
    return (
        <div className={style.maintenance_item_wrapper}>
            <h2>Добавление новой записи</h2>
            <input type="text" value={odometer} onChange={onOdometerChange}
                   placeholder="Показания спидометра"/>
            <input type="text" value={date} onChange={onChangeDate}
                   placeholder="Дата проведения работ"/>
            <input type="text" value={list} onChange={onListChange}
                   placeholder="Проведённые работы"/>
            <span className={style.errormessage}>{errorMessage}</span>
            <button onClick={onAddClick}>Добавить запись</button>
        </div>
    )
}