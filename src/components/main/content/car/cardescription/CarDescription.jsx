import style from "../car.module.css";
import editIcon from "../../../../../icons/edit.png"
import backIcon from "../../../../../icons/back.png"
import saveIcon from "../../../../../icons/save.png"
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {updateCarThunk} from "../../../../../redux/cars/carsReducer";

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
        setEdit(false)
        dispatch(updateCarThunk({
            userId: props.userId,
            id: props.id,
            brand: data.brand,
            model: data.model,
            yearManufacture: data.yearManufacture,
            num: data.num
        }))
    }
    return (
        <div className={style.car_section_wrapper}>
            <div className={style.car_item_wrapper}>
                <div className={style.car_item_subheader}>
                    <div className={style.car_icon_wrapper}>
                        {edit && <img onClick={onSaveClick} src={saveIcon} alt="save"/>}
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
                        <input value={data.brand} type="text" name="brand" onChange={onDataChange}/>}
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
                        <input value={data.num} type="text" name="num" onChange={onDataChange}/>}
                        {props.num && !edit && props.num}
                        {!props.num && !edit && "данные не были внесены"}
                    </div>
                </div>
                <div className={style.car_item_info}>
                    <div className={style.subtitle}>Год выпуска:</div>
                    <div className={style.car_item_data}>
                        {edit &&
                        <input value={data.yearManufacture} type="text" name="yearManufacture"
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
            </div>
            <div className={style.car_item_wrapper}>
                <h3>Последнее ТО:</h3>
                {props.lastRecording
                    ? <>
                        <div className={style.car_item_info}>
                            <div className={style.subtitle}>Дата:</div>
                            <div className={style.car_item_data}>
                                {props.lastRecording.datecommission}
                            </div>
                        </div>
                        <div className={style.car_item_info}>
                            <div className={style.subtitle}>Пробег:</div>
                            <div className={style.car_item_data}>
                                {props.lastRecording.odometer}
                            </div>
                        </div>
                    </>
                    : <span className={style.car_item_info}>
                        ТО не проводилось
                    </span>}
            </div>
            <div className={style.car_item_wrapper}>
                <h3>Последняя заметка:</h3>
            </div>
            <div className={style.car_item_wrapper}>
                <h3>Техосмотр:</h3>
            </div>
        </div>
    )
}