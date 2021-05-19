import style from "../car.module.css";

export const CarDescription = (props) => {
    return (
        <div className={style.car_description_wrapper}>
            <div className={style.maintenance_item_wrapper}>
                <h3>Общее свединия:</h3>
                <span className={style.car_info_item}>
                    <div className={style.subtitle}>Марка:</div>
                    {props.brand}
                </span>
                <span className={style.car_info_item}>
                    <div className={style.subtitle}>Модель:</div>
                    {props.model}
                </span>
                <span className={style.car_info_item}>
                    <div className={style.subtitle}>Номер:</div>
                    {props.num}
                </span>
                <span className={style.car_info_item}>
                    <div className={style.subtitle}>Год выпуска:</div>
                    {props.yearManufacture}
                </span>
            </div>
            <div className={style.maintenance_item_wrapper}>
                <h3>Последнее ТО:</h3>
                {props.lastRecording
                    ? <>
                    <span className={style.car_info_item}>
                    <div className={style.subtitle}>Дата:</div>
                        {props.lastRecording.datecommission}
                </span>
                        <span className={style.car_info_item}>
                    <div className={style.subtitle}>Пробег:</div>
                            {props.lastRecording.odometer}
                </span>
                    </>
                    :<span className={style.car_info_item}>
                        ТО не проводилось
                    </span>}

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