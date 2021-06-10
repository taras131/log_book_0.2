import style from "../car.Module.css"
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addMaintenanceRecord} from "../../../../redux/technicalmaintenancerecords/technicalMaintenanceReducer";
import {getCurrentDate} from "../../../../common/getCurrentDate";
import upIcon from "../../../../icons/up-arrow.png";
import downIcon from "../../../../icons/down-arrow.png";

export const AddMaintenanceRecord = (props) => {
    const dispatch = useDispatch()
    const [errorMessage, setErrorMessage] = useState("")
    const [edit, setEdit] = useState(false)
    const [data, setData] = useState({
        userId: props.userId,
        carId: props.carId,
        odometer: ``,
        date: getCurrentDate(),
        text: ''
    })
    const onDataChange = (event) => {
        setErrorMessage("")
        setData({...data, [event.target.name]: event.target.value})
    }
    const formValidation = () => {
        if (!data.odometer || !data.date || !data.text) {
            return false
        } else {
            return true
        }
    }
    const onAddClick = () => {
        setErrorMessage("")
        if (formValidation()) {
            console.log(props.userId)
            dispatch(addMaintenanceRecord({
                id: "" + new Date().valueOf(),
                carId: props.carId,
                datecommission: data.date,
                odometer: data.odometer,
                text: data.text,
                userId: props.userId
            }))
            setData({
                odometer: ``,
                date: ``,
                text: ''
            })
            setEdit(!edit)
        } else {
            setErrorMessage("Неккоректные данные")
        }
    }
    const onEditClick = () => {
        setEdit(!edit)
    }
    return (
        <div className={style.car_add_new_record}>
            <div className={style.car_item_subheader}>
                <h3>Добавление новой записи:</h3>
                <div className={style.car_icon_wrapper}>
                    {edit
                        ? <img onClick={onEditClick} src={upIcon} alt="save"/>
                        : <img onClick={onEditClick} src={downIcon} alt="back"/>}
                </div>
            </div>
            <div className={!edit ? style.car_add_hidden : style.add_form}>
                <div className={style.date_odometer_wrapper}>
                    <input style={{width: 70, marginTop: 0}} value={data.date} placeholder="Дата" name="date"
                           onChange={onDataChange} />
                    <input style={{width: 170, marginTop: 0}} value={data.odometer} placeholder="Пробег"
                           name="odometer" onChange={onDataChange} type="number"/>
                </div>
                <textarea value={data.text} onChange={onDataChange} name="text"
                          placeholder="Проведённые работы" rows="5"/>
                <div className={style.errormessage}>{errorMessage}</div>
                <button onClick={onAddClick}>Добавить запись</button>
            </div>
        </div>
    )
}