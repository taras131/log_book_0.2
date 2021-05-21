import style from "./maintenanceitemwrapper.module.css"
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addMaintenanceRecord} from "../../../../../redux/technicalmaintenancerecords/technicalMaintenanceReducer";
import {getMyId} from "../../../../../redux/authentication/authenticationSelector";
import {getCurrentDate} from "../../../../../common/getCurrentDate";

export const AddMaintenanceRecord = (props) => {
    const dispatch = useDispatch()
    const [odometer, setOdometer] = useState("")
    const [date, setDate] = useState(getCurrentDate())
    const [text, setText] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const userId = useSelector(state=>getMyId(state) )
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
                datecommission: date,
                odometer: odometer,
                text: text,
                userId: userId
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