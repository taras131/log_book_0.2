import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {getCurrentDate} from "../../../../common/getCurrentDate";
import style from "../car.module.css";
import upIcon from "../../../../icons/up-arrow.png";
import downIcon from "../../../../icons/down-arrow.png";
import {addNewNoticeRecord} from "../../../../redux/notice/noticeReducer";

export const AddNoticeRecord = (props) => {
    console.log(props)
        const dispatch = useDispatch()
        const [edit, setEdit] = useState(false)
        const [data, setData] = useState({
            userId: props.userId,
            carId: props.id,
            odometer: ``,
            date: ``,
            text: ''
        })
        useEffect(() => {
            setData({...data, date: getCurrentDate()})
        }, [props.id])
        const onDataChange = (event) => {
            setData({...data, [event.target.name]: event.target.value})
        }
        const onAddClick = () => {
            setData({
                userId: props.userId,
                carId: props.id,
                odometer: ``,
                date: ``,
                text: ''
            })
            setEdit(!edit)
            dispatch(addNewNoticeRecord(data))
        }
        const onEditClick = () => {
            setEdit(!edit)
        }
    return(
        <div className={style.car_add_newrecord}>
            <div className={style.car_item_subheader}>
                <h3>Добавление новой заметки:</h3>
                <div className={style.car_icon_wrapper}>
                    {edit
                        ? <img onClick={onEditClick} src={upIcon} alt="save"/>
                        : <img onClick={onEditClick} src={downIcon} alt="back"/>}
                </div>
            </div>
            <div className = {!edit ? style.car_add_hidden : style.add_form}>
                <div className={style.car_item_subheader}>
                    <input style={{width: 70, marginTop: 0}} value={data.date} placeholder="Дата" name="date"
                           onChange={onDataChange} />
                    <input style={{width: 170, marginTop: 0}} value={data.odometer} placeholder="Пробег"
                           name="odometer" onChange={onDataChange} type="number"/>
                </div>
                <textarea value={data.text} onChange={onDataChange}
                          placeholder="Не забыть:" rows="5" name="text"/>
                <span className={style.errormessage}>{}</span>
                <button onClick={onAddClick}>Добавить запись</button>
            </div>
        </div>
    )
}