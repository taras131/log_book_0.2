import style from "../../../pages/carPage/car.module.css"
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {setAnswer} from "../../../redux/answerwindow/answerWindowReducer";
import {
    deleteMaintenanceRecord,
    updateMaintenanceRecord
} from "../../../redux/technicalmaintenancerecords/technicalMaintenanceReducer";
import {CarItemSubheader} from "../car_common/CarItemSubheader";

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
            <CarItemSubheader  title = {props.title} onSaveClick = {onSaveClick} onDeleteRecordClick ={onDeleteRecordClick}
                               data = {data} onDataChange = {onDataChange} edit = {edit} onEditClick={onEditClick} />
            <div className={style.hr}></div>
            <div className={style.car_item_info}>
                <div className={style.subtitle}>Проведённые работы:</div>
                <br/>
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