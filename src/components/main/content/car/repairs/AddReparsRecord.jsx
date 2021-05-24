import style from "../car.module.css";
import {useEffect, useState} from "react";
import {getCurrentDate} from "../../../../../common/getCurrentDate";
import {useDispatch} from "react-redux";
import {addNewRepairRecord} from "../../../../../redux/repairs/repairsReducer";

export const AddRepairRecord = (props) => {
    const dispatch = useDispatch()
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
    useEffect(()=>{
        setData({...data, date: getCurrentDate()})
    },[props.id])
    const onDataChange = (event) => {
        setData({...data, [event.target.name]: event.target.value})
    }
    const onAddClick = () => {
        dispatch(addNewRepairRecord({data}))
    }
    return(
        <div className={style.car_add_newrecord}>
            <h3>Добавление нового ремонта:</h3>
            <input type="number" value={data.odometer} onChange={onDataChange}
                   placeholder="Показания спидометра:" name="odometer"/>
            <input type="text" value={data.date} onChange={onDataChange}
                   placeholder="Дата проведения работ:" name="date"/>
            <textarea value={data.reasonsRepairs} onChange={onDataChange}
                      placeholder="Причины ремонта:" rows="5" name="reasonsRepairs"/>
            <textarea value={data.usedParts} onChange={onDataChange}
                      placeholder="Использованные запчасти:" rows="5" name="usedParts"/>
            <textarea value={data.accomplishedWork} onChange={onDataChange}
                      placeholder="Проведённые работы:" rows="5" name="accomplishedWork"/>
            <textarea value={data.result} onChange={onDataChange}
                      placeholder="Результаты:" rows="5" name="result"/>
            <span className={style.errormessage}>{}</span>
            <button onClick={onAddClick} >Добавить запись</button>
        </div>
    )
}