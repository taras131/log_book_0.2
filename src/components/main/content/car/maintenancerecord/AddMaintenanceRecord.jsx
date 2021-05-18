import style from "./maintenanceitemwrapper.module.css"
import {useState} from "react";
import {useDispatch} from "react-redux";
import {addMaintenanceRecord} from "../../../../../redux/technicalmaintenancerecords/technicalMaintenanceReducer";

export const AddMaintenanceRecord = (props) => {
    const SetDate = () => {
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        if (month < 10) month = "0" + month;
        if (day < 10) day = "0" + day;
        return day + "." + month + "." + year;
    }
    const dispatch = useDispatch()
    const [odometer, setOdometer] = useState("")
    const [date, setDate] = useState(SetDate())
    const [text, setText] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const onOdometerChange = (event) => {
        setOdometer(event.target.value)
    }
    const onChangeDate = (event) => {
        setDate(event.target.value)
    }
    const onListChange = (event) => {
        setText(event.target.value)
    }
    const formValidation = () => {
        if (!odometer || !date || !text) {
            return false
        } else {
            return true
        }
    }
    const onAddClick = () => {
        setErrorMessage("")
        if (formValidation()) {
            dispatch(addMaintenanceRecord({
                id: "" + new Date().valueOf(),
                carId: props.id,
                date: date,
                odometer: odometer,
                text: text
            }))
            setOdometer("")
            setDate("")
            setText("")
        } else {
            setErrorMessage("Неккоректные данные")
        }
    }
    return (
        <div className={style.maintenance_addnewrecord}>
            <h3>Добавление новой записи</h3>
            <input type="number" value={odometer} onChange={onOdometerChange}
                   placeholder="Показания спидометра"/>
            <input type="text" value={date} onChange={onChangeDate}
                   placeholder="Дата проведения работ"/>
            <textarea value={text} onChange={onListChange}
                      placeholder="Проведённые работы" rows="5"/>
            <span className={style.errormessage}>{errorMessage}</span>
            <button onClick={onAddClick}>Добавить запись</button>
        </div>
    )
}