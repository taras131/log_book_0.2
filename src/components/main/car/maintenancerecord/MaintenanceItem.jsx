import style from "../car.Module.css"
import saveIcon from "../../../../icons/save.png";
import deleteIcon from "../../../../icons/delete.png";
import backIcon from "../../../../icons/back.png";
import editIcon from "../../../../icons/edit.png";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {setAnswer} from "../../../../redux/answerwindow/answerWindowReducer";
import {
    deleteMaintenanceRecord,
    updateMaintenanceRecord
} from "../../../../redux/technicalmaintenancerecords/technicalMaintenanceReducer";

export const MaintenanceItem = (props) => {
    const dispatch = useDispatch()
    const [edit, setEdit] = useState(false)
    const [data, setData] = useState({
        date: '',
        odometer: '',
        text: '',
    })
    useEffect(() => {
        setEdit(false)
        setData({
            date: props.datecommission,
            odometer: props.odometer,
            text: props.text,
        })
    }, [props.carId])
    const onDataChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }
    const onEditClick = () => {
        setEdit(!edit)
    }
    const onDeleteRecordClick = () => {
        const delRecord = deleteMaintenanceRecord(props.id, props.userId)
        dispatch(setAnswer("удалить запись", delRecord))
    }
    const onSaveClick = () => {
        const upRecord = updateMaintenanceRecord({
            id: props.id,
            carId: props.carId,
            datecommission: data.date,
            odometer: data.odometer,
            text: data.text,
            userId: props.userId,
        })
        dispatch(setAnswer("сохранить изменения", upRecord))
        setEdit(false)
    }
    return (
        <div className={style.car_item_wrapper}>
            {props.title && <h5>{props.title}</h5>}
            <div className={style.car_item_subheader}>
                {!props.title &&
                <div className={style.car_icon_wrapper}>
                    {edit
                        ? <img onClick={onSaveClick} src={saveIcon} alt="save"/>
                        : <img onClick={onDeleteRecordClick} src={deleteIcon} alt="back"/>}
                </div>}
                {edit
                    ? <div className={style.subheader_input_wrapper}>
                        <input className={style.subheader_input_date} value={data.date} placeholder="Дата" name="date"
                               onChange={onDataChange}/>
                        <input className={style.subheader_input_odometer} value={data.odometer} placeholder="Пробег"
                               name="odometer" onChange={onDataChange}/>
                    </div>
                    : <div className={style.date_odometer_wrapper}>
                        <div>Дата: {props.datecommission}</div>
                        <div className={style.date_odometer}>Пробег: {props.odometer}</div>
                    </div>}
                {!props.title &&
                <div className={style.car_icon_wrapper}>
                    {edit
                        ? <img onClick={onEditClick} src={backIcon} alt="edit"/>
                        : <img onClick={onEditClick} src={editIcon} alt="back"/>}
                </div>}
            </div>
            <div className={style.hr}></div>
            <div className={style.car_item_info}>
                <div className={style.subtitle}>Проведённые работы:</div>
                <div className={style.car_item_data}>
                    {edit &&
                    <textarea value={data.text} type="text" name="text"
                              onChange={onDataChange}/>}
                    {props.text && !edit && props.text}
                    {!props.text && !edit && "данные не были внесены"}
                </div>
            </div>
        </div>
    )
}