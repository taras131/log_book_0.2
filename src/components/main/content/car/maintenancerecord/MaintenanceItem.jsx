import style from "./maintenanceitemwrapper.module.css"

export const MaintenanceItem = (props) => {

    console.log(props)
    return (
        <div className={style.maintenance_item_wrapper}>
            <div className={style.delete} type="button" onClick={()=> props.onDeleteClick(props.id)} > X </div>
            <span><div className={style.subtitle}>Пробег:</div>{props.odometer} </span>
            <span><div className={style.subtitle}>Дата:</div> {props.datecommission} </span>
            <span><div className={style.subtitle}>Проведённые работы:</div>{props.text}</span>
        </div>
    )
}