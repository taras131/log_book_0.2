import style from "../car.module.css";

export const RepairItem = (props) => {
    return (
        <div className={style.car_item_wrapper}>
            <div className={style.car_item_subheader}>
                <div>Дата: {props.date}</div>
                <div>Пробег: {props.odometer}</div>
            </div>
            <div className={style.hr}></div>
            <div className={style.car_item_info}>
                <div className={style.subtitle}>Причина ремонта:</div>
                {props.reasonsRepair}
            </div>
            <div className={style.car_item_info}>
                <div className={style.subtitle}>Использованные запчасти:</div>
                {props.usedParts}
            </div>
            <div className={style.car_item_info}>
                <div className={style.subtitle}>Проведённые работы:</div>
                {props.accomplishedWork}
            </div>
            <div className={style.car_item_info}>
                <div className={style.subtitle}>Результат:</div>
                {props.result}
            </div>
        </div>
    )
}