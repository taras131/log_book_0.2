import style from "./MaintenanceRecord.module.css"
import {useDispatch} from "react-redux";
import React, {FC, useState} from "react";
import {setAnswer} from "../../../redux/answerwindow/answerWindowReducer";
import {deleteMaintenanceRecord} from "../../../redux/technicalmaintenancerecords/technicalMaintenanceReducer";
import editIcon from "../../../icons/edit.png";
import deleteIcon from "../../../icons/close.png";
import AddMaintenanceRecord from "../../modals/AddMaintenanceRecord";
import {CarType, MaintenanceRecordType} from "../../../types/types";

interface MaintenanceItemProps{
    maintenanceRecord: MaintenanceRecordType,
    car: CarType
}

export const MaintenanceItem: FC<MaintenanceItemProps> = ({maintenanceRecord, car}) => {
    const dispatch = useDispatch()
    const [isShowModal, setIsShowModal] = useState(false)
    const onDeleteRecordClick = () => {
        const delRecord = deleteMaintenanceRecord(maintenanceRecord.id, car.userId)
        dispatch(setAnswer("удалить запись", delRecord))
    }
    return (
        <div className={style.maintenance_item_wrapper}>
            <div className={style.delete_icon_container}>
                <img className={style.delete_icon} onClick={onDeleteRecordClick} src={deleteIcon} alt="delete"/>
            </div>
            <div className={style.maintenance_item_content}>
                <div className={style.item__content__wrapper}>
                    <div className={style.maintenance_item_subtitle}>
                        <div>{maintenanceRecord.datecommission}</div>
                        <div className={style.maintenance_item_odometer}>{maintenanceRecord.odometer}</div>
                    </div>
                    <div className={style.item__content__text}>{maintenanceRecord.text}</div>
                </div>
            </div>
            <div className={style.edit__icon__container}>
                <img className={style.edit__icon} onClick={() => setIsShowModal(true)} src={editIcon} alt="edit"/>
            </div>
            <AddMaintenanceRecord isShowModal={isShowModal} car={car} setIsShowModal={setIsShowModal}
                                  maintenanceRecord={maintenanceRecord}/>
        </div>
    )
}