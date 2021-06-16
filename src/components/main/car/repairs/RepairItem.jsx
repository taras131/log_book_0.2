import style from "../car.Module.css";
import editIcon from "../../../../icons/edit.png"
import backIcon from "../../../../icons/back.png"
import saveIcon from "../../../../icons/save.png"
import deleteIcon from "../../../../icons/delete.png"
import {useEffect, useState} from "react";
import {deleteRepairRecord, updateRepairRecord} from "../../../../redux/repairs/repairsReducer";
import {setAnswer} from "../../../../redux/answerwindow/answerWindowReducer";
import {useDispatch} from "react-redux";
import {CarItemSubheader} from "../car_common/CarItemSubheader";

export const RepairItem = (props) => {
    const dispatch = useDispatch()
    const [edit, setEdit] = useState(false)
    const [data, setData] = useState({
        date: '',
        odometer: '',
        reasonsRepair: '',
        usedParts: '',
        accomplishedWork: '',
        result: ''
    })
    useEffect(() => {
        setEdit(false)
        setData({
            date: props.date,
            odometer: props.odometer,
            reasonsRepair: props.reasonsRepair,
            usedParts: props.usedParts,
            accomplishedWork: props.accomplishedWork,
            result: props.result
        })
    }, [props.carId])
    const onDataChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }
    const onEditClick = () => {
        setEdit(!edit)
    }
    const onDeleteRecordClick = () => {
        const delRecord = deleteRepairRecord(props.id, props.userId)
        dispatch(setAnswer("удалить запись", delRecord))
    }
    const onSaveClick = () => {
        const upRepair = updateRepairRecord({
            userId: props.userId,
            carId: props.carId,
            id: props.id,
            date: data.date,
            odometer: data.odometer,
            reasonsRepair: data.reasonsRepair,
            usedParts: data.usedParts,
            accomplishedWork: data.accomplishedWork,
            result: data.result
        })
        dispatch(setAnswer("сохранить изменения", upRepair))
        setEdit(false)
    }
    return (
        <div className={style.car_item_wrapper}>
            <CarItemSubheader  title = {props.title} onSaveClick = {onSaveClick} onDeleteRecordClick ={onDeleteRecordClick}
                               data = {data} onDataChange = {onDataChange} edit = {edit} onEditClick={onEditClick} />
            <div className={style.hr}></div>
            <div className={style.car_item_info}>
                <div className={style.subtitle}>Причина ремонта:</div>
                <div className={style.car_item_data}>
                    {edit &&
                    <textarea value={data.reasonsRepair} type="text" name="reasonsRepair" onChange={onDataChange}/>}
                    {props.reasonsRepair && !edit && props.reasonsRepair}
                    {!props.reasonsRepair && !edit && "данные не были внесены"}
                </div>
            </div>
            <div className={style.car_item_info}>
                <div className={style.subtitle}>Использованные запчасти:</div>
                <div className={style.car_item_data}>
                    {edit &&
                    <textarea value={data.usedParts} type="text" name="usedParts" onChange={onDataChange}/>}
                    {props.usedParts && !edit && props.usedParts}
                    {!props.usedParts && !edit && "данные не были внесены"}
                </div>
            </div>
            <div className={style.car_item_info}>
                <div className={style.subtitle}>Проведённые работы:</div>
                <div className={style.car_item_data}>
                    {edit &&
                    <textarea value={data.accomplishedWork} type="text" name="accomplishedWork"
                              onChange={onDataChange}/>}
                    {props.accomplishedWork && !edit && props.accomplishedWork}
                    {!props.accomplishedWork && !edit && "данные не были внесены"}
                </div>
            </div>
            <div className={style.car_item_info}>
                <div className={style.subtitle}>Результат:</div>
                <div className={style.car_item_data}>
                    {edit &&
                    <textarea value={data.result} type="text" name="result" onChange={onDataChange}/>}
                    {props.result && !edit && props.result}
                    {!props.result && !edit && "данные не были внесены"}
                </div>
            </div>
        </div>
    )
}