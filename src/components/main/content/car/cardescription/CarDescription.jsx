import style from "../car.module.css";

export const CarDescription = (props) => {
    return(
        <div>
            <div className={style.car_info_item}>
                Марка: {props.brand}
            </div>
            <div className={style.car_info_item}>
                Модель: {props.model}
            </div>
            <div className={style.car_info_item}>
                Год выпуска: {props.yearManufacture}
            </div>
        </div>
    )
}