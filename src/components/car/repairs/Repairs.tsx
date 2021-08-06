import style from "../cardescription/CarDescription.module.css";
import {RepairItem} from "./RepairItem";
import React, {FC, useState} from "react";
import AddRepairRecord from "../../modals/AddRepairRecord";
import plus from "../../../icons/plus.png";
import {CarType, RepairRecordType} from "../../../types/types";

interface RepairsProps {
    car: CarType,
    repairsList: Array<RepairRecordType>
}

export const Repairs: FC< RepairsProps> = ({car, repairsList}) => {
    const [isShowModal, setIsShowModal] = useState(false)
    const repairs = repairsList.map(item => <RepairItem key={item.id} repairRecord = {item} car ={car}/>)
    return (<>
            <div className={style.car__description__wrapper}>
                <div className={style.car__description__header}>
                    <div className={style.img__container}>

                    </div>
                    <h3>{car.brand + " " + car.model + " " + car.num}</h3>
                    <div className={style.img__container}>
                        <img onClick={() => setIsShowModal(true)} src={plus} alt="plus"/>
                    </div>
                </div>
                {repairs}
                <AddRepairRecord isShowModal={isShowModal} setIsShowModal={setIsShowModal} car={car}/>
            </div>
        </>
    )
}