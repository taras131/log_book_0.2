import style from "../car.module.css";
import {MaintenanceItem} from "../maintenancerecord/MaintenanceItem";

export const CarDescription = (props) => {
    return (
        <div className={style.car_description_wrapper}>
            <div className={style.maintenance_item_wrapper}>
                <h3>Общее свединия:</h3>
                <span><div className={style.subtitle}>Марка:</div>
                    {props.brand} </span>
                <span><div className={style.subtitle}>Модель:</div>
                    {props.model} </span>
                <span><div className={style.subtitle}>Год выпуска:</div>
                    {props.yearManufacture}</span>
            </div>
            <div className={style.maintenance_item_wrapper}>
                <h3>Последнее ТО:</h3>
                <MaintenanceItem {...props.lastRecording}/>
            </div>
            <div className={style.maintenance_item_wrapper}>
                <h3>Последняя заметка:</h3>
            </div>
            <div className={style.maintenance_item_wrapper}>
                <h3>Страховка:</h3>
            </div>
            <div className={style.maintenance_item_wrapper}>
                <h3>Техосмотр:</h3>
            </div>
        </div>
    )
}