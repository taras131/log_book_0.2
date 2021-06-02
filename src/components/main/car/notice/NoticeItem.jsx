import style from "../car.module.css";
import saveIcon from "../../../../icons/save.png";
import deleteIcon from "../../../../icons/delete.png";
import backIcon from "../../../../icons/back.png";
import editIcon from "../../../../icons/edit.png";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {
    deleteMaintenanceRecord,
    updateMaintenanceRecord
} from "../../../../redux/technicalmaintenancerecords/technicalMaintenanceReducer";
import {setAnswer} from "../../../../redux/answerwindow/answerWindowReducer";
import {deleteNoticeRecord, updateNoticeRecord} from "../../../../redux/notice/noticeReducer";

export const NoticeItem = (props) => {
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
            date: props.date,
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
        const delRecord = deleteNoticeRecord(props.id, props.userId)
        dispatch(setAnswer("удалить запись", delRecord))
    }
    const onSaveClick = () => {
        const upRecord = updateNoticeRecord({
            id: props.id,
            carId: props.carId,
            date: data.date,
            odometer: data.odometer,
            text: data.text,
            userId: props.userId,
        })
        dispatch(setAnswer("сохранить изменения", upRecord))
        setEdit(false)
    }
    return(
        <div className={style.car_item_wrapper}>
            {props.title
                ?<h3>{props.title}</h3>
                : <div className={style.car_item_subheader}>
                    <div className={style.car_icon_wrapper}>
                        {edit
                            ? <img onClick={onSaveClick} src={saveIcon} alt="save"/>
                            : <img onClick={onDeleteRecordClick} src={deleteIcon} alt="back"/>}
                    </div>
                    {edit
                        ? <>
                            <input style={{width: 70, marginTop: 0}} value={data.date} placeholder="Дата" name="date"
                                   onChange={onDataChange}/>
                            <input value={data.odometer} placeholder="Пробег"
                                   name="odometer" onChange={onDataChange}/>
                        </>
                        : <div className={style.date_odometer_wrapper}>
                            <div>Дата: {props.date}</div>
                            <div>Пробег: {props.odometer}</div>
                        </div>}
                    <div className={style.car_icon_wrapper}>
                        {edit
                            ? <img onClick={onEditClick} src={backIcon} alt="edit"/>
                            : <img onClick={onEditClick} src={editIcon} alt="back"/>}
                    </div>
                </div>}
            <div className={style.hr}></div>
            <div className={style.car_item_info}>
                <div className={style.subtitle}>Напоминание:</div>
                <div className={style.car_item_data}>
                    {edit &&
                    <textarea value={data.text} name="text"
                              onChange={onDataChange}/>}
                    {props.text && !edit && props.text}
                    {!props.text && !edit && "данные не были внесены"}
                </div>
            </div>
        </div>
    )
}