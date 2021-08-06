import style from "../../../pages/carPage/car.module.css";
import editIcon from "../../../icons/edit.png"
import deleteIcon from "../../../icons/close.png";
import React, {FC, useState} from "react";
import {deleteRepairRecord} from "../../../redux/repairs/repairsReducer";
import {setAnswer} from "../../../redux/answerwindow/answerWindowReducer";
import {useDispatch} from "react-redux";
import {CarType, RepairRecordType} from "../../../types/types";
import AddRepairRecord from "../../modals/AddRepairRecord";

interface RepairItemProps {
    repairRecord:RepairRecordType,
    car: CarType
}

export const RepairItem: FC<RepairItemProps> = ({repairRecord,car }) =>{
const [isShowModal, setIsShowModal] = useState(false)
    const dispatch = useDispatch()
    const onEditClick = () => {
        setIsShowModal(true)
    }
    const onDeleteRecordClick = () => {
        const delRecord = deleteRepairRecord(repairRecord.id, car.userId)
        dispatch(setAnswer("удалить запись", delRecord))
    }
    return (

        <div>
            <div className={style.repair__record__header}>
                <div className={style.delete_icon_container}>
                    <img className={style.delete_icon} onClick={onDeleteRecordClick} src={deleteIcon} alt="delete"/>
                </div>
                <div className={style.date_odometer_wrapper}>
                    <div>{repairRecord.date}</div>
                    <div>{repairRecord.odometer}</div>
                </div>
                <div className={style.edit__icon__container}>
                    <img className={style.edit__icon} onClick={() => setIsShowModal(true)} src={editIcon} alt="edit"/>
                </div>
            </div>
            <div className={style.car_item_info}>
                <div className={style.subtitle}>Причина ремонта:</div>
                <div className={style.car_item_data}>
                    {repairRecord.reasonsRepair}
                </div>
            </div>
            <div className={style.car_item_info}>
                <div className={style.subtitle}>Использованные запчасти:</div>
                <div className={style.car_item_data}>
                    {repairRecord.usedParts}
                </div>
            </div>
            <div className={style.car_item_info}>
                <div className={style.subtitle}>Проведённые работы:</div>
                <div className={style.car_item_data}>
                    {repairRecord.accomplishedWork}
                </div>
            </div>
            <div className={style.car_item_info}>
                <div className={style.subtitle}>Результат:</div>
                <div className={style.car_item_data}>
                    {repairRecord.result}
                </div>
            </div>
            <AddRepairRecord isShowModal={isShowModal} setIsShowModal={setIsShowModal} car={car} repairRecord = {repairRecord}/>
        </div>
    )
}