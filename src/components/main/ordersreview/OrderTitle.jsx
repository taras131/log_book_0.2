import style from "../car/car.module.css";

export const OrderTitle = ({brand, num}) => {
    return (
        <>
            <div className={style.car_description_section}>
                {brand === "part" &&
                <>
                    <div className={style.car_description_item}>
                        <div className={style.subtitle}>Запчасти</div>
                    </div>
                </>
                }
                {brand === "tool" &&
                <>
                    <div className={style.car_description_item}>
                        <div className={style.subtitle}>Инструмент</div>
                    </div>
                </>
                }
                {brand === "material" &&
                <>
                    <div className={style.car_description_item}>
                        <div className={style.subtitle}>Расходники</div>
                    </div>
                </>
                }
                {brand !== "material" && brand !== "tool" && brand !== "part" &&
                <>
                    <div className={style.car_description_item}>
                        <div className={style.subtitle}>Марка:</div>
                        <div className={style.car_item_data}>
                            {brand}
                        </div>
                    </div>
                    <div className={style.car_description_item}>
                        <div className={style.subtitle}>Номер:</div>
                        <div className={style.car_item_data}>
                            {num}
                        </div>
                    </div>
                </>
                }
            </div>

        </>
    )
}