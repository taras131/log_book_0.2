import style from "./maintenanceitemwrapper.module.css"

export const MaintenanceItem = (props) => {
    console.log(props)
    return (
        <div className={style.maintenance_item_wrapper}>
            <span>Пробег: {props.odometer} </span>
            <span>Дата: {props.date} </span>
            <span>Проведённые работы: {props.list}</span>
        </div>
    )
}