import style from "../car.module.css";
import editIcon from "../../../../../icons/edit.png"
import backIcon from "../../../../../icons/back.png"
import saveIcon from "../../../../../icons/save.png"
import deleteIcon from "../../../../../icons/delete.png"
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {deleteCarThunk, updateCarThunk} from "../../../../../redux/cars/carsReducer";
import {NavLink} from "react-router-dom";
import {setAnswer} from "../../../../../redux/answerwindow/answerWindowReducer";
import {MaintenanceItem} from "../maintenancerecord/MaintenanceItem";
import {NoticeItem} from "../notice/NoticeItem";

export const CarDescription = (props) => {
    const [edit, setEdit] = useState(false)
    const [data, setData] = useState({
        brand: '',
        model: '',
        num: '',
        yearManufacture: ''
    })
    const dispatch = useDispatch()
    useEffect(() => {
        setEdit(false)
        setData({
            brand: props.brand,
            model: props.model,
            num: props.num,
            yearManufacture: props.yearManufacture
        })
    }, [props.id])
    const onDataChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }
    const onEditClick = () => {
        setEdit(!edit)
    }
    const onSaveClick = () => {
        const upCar = (updateCarThunk({
            userId: props.userId,
            id: props.id,
            brand: data.brand,
            model: data.model,
            yearManufacture: data.yearManufacture,
            num: data.num
        }))
        dispatch(setAnswer("сохранить изменения", upCar))
        setEdit(false)
    }
    const onDeleteCarClick = () => {
        const delCar = (deleteCarThunk(props.id))
        dispatch(setAnswer("удалить автомобиль", delCar))
    }
    return (
        <div className={style.car_section_wrapper}>
            <div className={style.car_item_wrapper}>
                <div className={style.car_item_subheader}>
                    <div className={style.car_icon_wrapper}>
                        {edit
                            ? <img onClick={onSaveClick} src={saveIcon} alt="save"/>
                            : <NavLink to="/" style={{textDecoration: 'none'}}>
                                <img onClick={onDeleteCarClick} src={deleteIcon} alt="back"/>
                            </NavLink>}
                    </div>
                    <h3>Общие свединия:</h3>
                    <div className={style.car_icon_wrapper}>
                        {edit
                            ? <img onClick={onEditClick} src={backIcon} alt="edit"/>
                            : <img onClick={onEditClick} src={editIcon} alt="back"/>}
                    </div>
                </div>
                <div className={style.car_item_info}>
                    <div className={style.subtitle}>Марка:</div>
                    <div className={style.car_item_data}>
                        {edit &&
                        <input style={{marginTop: 0}} value={data.brand} type="text" name="brand"
                               onChange={onDataChange}/>}
                        {props.brand && !edit && props.brand}
                        {!props.brand && !edit && "данные не были внесены"}
                    </div>
                </div>
                <div className={style.car_item_info}>
                    <div className={style.subtitle}>Модель:</div>
                    <div className={style.car_item_data}>
                        {edit &&
                        <input value={data.model} type="text" name="model" onChange={onDataChange}/>}
                        {props.model && !edit && props.model}
                        {!props.model && !edit && "данные не были внесены"}
                    </div>
                </div>
                <div className={style.car_item_info}>
                    <div className={style.subtitle}>Номер:</div>
                    <div className={style.car_item_data}>
                        {edit &&
                        <input style={{marginTop: 0}} value={data.num} type="text" name="num" onChange={onDataChange}/>}
                        {props.num && !edit && props.num}
                        {!props.num && !edit && "данные не были внесены"}
                    </div>
                </div>
                <div className={style.car_item_info}>
                    <div className={style.subtitle}>Год выпуска:</div>
                    <div className={style.car_item_data}>
                        {edit &&
                        <input style={{marginTop: 0}} value={data.yearManufacture} type="text" name="yearManufacture"
                               onChange={onDataChange}/>}
                        {props.yearManufacture && !edit && props.yearManufacture}
                        {!props.yearManufacture && !edit && "данные не были внесены"}
                    </div>
                </div>
                <div className={style.car_item_info}>
                    <div className={style.subtitle}>
                        Застрахована до:
                    </div>
                    <div className={style.car_item_data}>
                        {props.dateInsuranceIsValid}
                    </div>
                </div>
                <div className={style.car_item_info}>
                    <div className={style.subtitle}>
                        Техосмотр до:
                    </div>
                    <div className={style.car_item_data}>
                        {props.dateTechnicalInspectionValid}
                    </div>
                </div>
            </div>
            {props.lastRecording
                ? <MaintenanceItem {...props.lastRecording} title="Последнее ТО:"/>
                : <div className={style.car_item_wrapper}>
                    <h3>Последнее ТО:</h3>
                    <div className={style.hr}></div>
                    <div className={style.car_item_info}>
                        <div className={style.car_item_subheader}>
                            <div>
                                <div className={style.subtitle}></div>
                                ТО не проводилось
                            </div>
                        </div>
                    </div>
                </div>}
            <NoticeItem{...props.lastNoticeRecord} title="Последняя заметка:"/>
        </div>
    )
}