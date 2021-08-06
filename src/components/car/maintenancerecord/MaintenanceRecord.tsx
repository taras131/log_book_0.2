import {MaintenanceItem} from "./MaintenanceItem";
import style from "../cardescription/CarDescription.module.css"
import plus from "../../../icons/plus.png";
import React, {FC, useState} from "react";
import AddMaintenanceRecord from "../../modals/AddMaintenanceRecord";
import {CarType, MaintenanceRecordType} from "../../../types/types";

interface MaintenanceRecordProps  {
    maintenanceList: Array<MaintenanceRecordType>,
    car: CarType
}

export const MaintenanceRecord: FC<MaintenanceRecordProps> = ({maintenanceList,car}) => {
    const [isShowModal, setIsShowModal] = useState(false)
    const maintenanceItem = maintenanceList.map(item => <MaintenanceItem key={item.id} maintenanceRecord = {item} car = {car}/>)
    return (<>
        <div className={style.car__description__wrapper}>
            <div className={style.car__description__header}>
                <div className={style.img__container}>

                </div>
                <h3>{car.brand+" "+car.model+" "+ car.num}</h3>
                <div className={style.img__container}>
                    <img onClick={()=> setIsShowModal(true)} src={plus} alt="plus"/>
                </div>
            </div>
            {maintenanceItem}

        </div>
            <AddMaintenanceRecord isShowModal = {isShowModal} setIsShowModal = {setIsShowModal} car = {car}/>
        </>
    )
}