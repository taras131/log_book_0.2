import style from "../../../pages/carPage/car.module.css";
import {useEffect, useState} from "react";
import {getCurrentDate} from "../../../common/getCurrentDate";
import {useDispatch} from "react-redux";
import {addNewRepairRecord} from "../../../redux/repairs/repairsReducer";
import upIcon from "../../../icons/up-arrow.png"
import downIcon from "../../../icons/down-arrow.png"
import {setMessageInfo} from "../../../redux/messageinfo/MessageInfoReducer";
import {ItemTitle} from "../car_common/ItemTitle";

export const AddRepairRecord = (props) => {
    const dispatch = useDispatch()
    const [edit, setEdit] = useState(false)
    const [data, setData] = useState({
        userId: props.userId,
        carId: props.carId,
        odometer: ``,
        date: ``,
        reasonsRepairs: '',
        usedParts: '',
        accomplishedWork: '',
        result: ''
    })
    useEffect(() => {
        setData({...data, date: getCurrentDate()})
    }, [props.id])
    const onDataChange = (event) => {
        setData({...data, [event.target.name]: event.target.value})
    }
    const onAddClick = () => {
        if (data.odometer && data.date && data.result && data.accomplishedWork && data.reasonsRepairs) {
            setData({
                userId: props.userId,
                carId: props.carId,
                odometer: ``,
                date: ``,
                reasonsRepairs: '',
                usedParts: '',
                accomplishedWork: '',
                result: ''
            })
            setEdit(!edit)
            dispatch(addNewRepairRecord({data}))
        } else {
            dispatch(setMessageInfo("Введены неполные данные", "negative"))
        }
    }
    const onEditClick = () => {
        setEdit(!edit)
    }
    return (
        <div className={style.car_add_new_record}>
            <ItemTitle brand={props.brand} num={props.num}/>
            <div className={style.new_record_header}>
                <h4>Добавление нового ремонта:</h4>
                <div className={style.car_icon_wrapper}>
                    {edit
                        ? <img onClick={onEditClick} src={upIcon} alt="save"/>
                        : <img onClick={onEditClick} src={downIcon} alt="back"/>}
                </div>
            </div>
            <div className={!edit ? style.car_add_hidden : style.add_form}>
                <div className={style.date_odometer_wrapper}>
                    <input style={{width: 70, marginTop: 0}} value={data.date} placeholder="Дата" name="date"
                           onChange={onDataChange}/>
                    <input style={{width: 130, marginTop: 0, marginLeft: 45}} value={data.odometer} placeholder="Пробег"
                           name="odometer" onChange={onDataChange} type="number"/>
                </div>
                <textarea value={data.reasonsRepairs} onChange={onDataChange}
                          placeholder="Причины ремонта:" rows="5" name="reasonsRepairs"/>
                <textarea value={data.usedParts} onChange={onDataChange}
                          placeholder="Использованные запчасти:" rows="5" name="usedParts"/>
                <textarea value={data.accomplishedWork} onChange={onDataChange}
                          placeholder="Проведённые работы:" rows="5" name="accomplishedWork"/>
                <textarea value={data.result} onChange={onDataChange}
                          placeholder="Результаты:" rows="5" name="result"/>
                <button onClick={onAddClick}>Добавить запись</button>
            </div>
        </div>
    )
}