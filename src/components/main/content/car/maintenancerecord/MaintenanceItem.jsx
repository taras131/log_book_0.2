import style from "../car.module.css"

export const MaintenanceItem = (props) => {
    return (
        <div className={style.car_item_wrapper}>
            <div className={style.delete}  onClick={()=> props.onDeleteClick(props.id)} > X </div>
            <div className={style.car_item_subheader}>
                <div><div className={style.subtitle}>Пробег:</div>{props.odometer} </div>
                <div><div className={style.subtitle}>Дата:</div> {props.datecommission} </div>
            </div>
            <div className={style.hr}></div>
            <span><div className={style.subtitle}>Проведённые работы:</div>{props.text}</span>
        </div>
    )
}