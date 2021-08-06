import style from './CarDescription.module.css';
import editIcon from "../../../icons/edit.png"
import deleteIcon from "../../../icons/delete.png"
import React, {FC, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteCarThunk} from "../../../redux/cars/carsReducer";
import {setAnswer} from "../../../redux/answerwindow/answerWindowReducer";
import {getInsuranceDateValidById} from "../../../redux/insurance/insuranceSelector";
import {getInspectionDateValidById} from "../../../redux/technicalinspection/technicalInspectionSelector";
import CarEdit from "../../modals/CarEdit";
import {CarType, MaintenanceRecordType, NoticeRecordType, RepairRecordType} from "../../../types/types";

interface CarDescriptionProps{
    lastRecording: MaintenanceRecordType,
    lastNoticeRecord: NoticeRecordType,
    lastRepairRecord: RepairRecordType,
    car: CarType
}

export const CarDescription: FC<CarDescriptionProps> = ({lastRecording,
                                                            lastNoticeRecord,
                                                            lastRepairRecord,
                                                            car}) => {
    const dispatch = useDispatch()
    const [isShowModal, setIsShowModal] = useState(false)
    const dateInsuranceIsValid = useSelector(state => getInsuranceDateValidById(state, car.id))
    const dateTechnicalInspectionValid = useSelector(state => getInspectionDateValidById(state, car.id))
    const onEditClick = () => {
        setIsShowModal(!isShowModal)
    }
    const onDeleteCarClick = () => {
        const delCar = (deleteCarThunk(car.id))
        dispatch(setAnswer("удалить автомобиль", delCar))
    }
    return (
        <div className={style.car__description__wrapper}>
            <div className={style.car__description__header}>
                <div className={style.img__container}>
                    <img onClick={onDeleteCarClick} src={deleteIcon} alt="back"/>
                </div>
                <h3>Общие свединия:</h3>
                <div className={style.img__container}>
                    <img onClick={onEditClick} src={editIcon} alt="edit"/>
                </div>
            </div>
            <div className={style.car__content__wrapper}>
                <div className={style.car__description__item}>
                    <div className={style.item_title}>Марка:</div>
                    <div className={style.item_content}>
                        {car.brand}
                    </div>
                </div>
                <div className={style.car__description__item}>
                    <div className={style.item_title}>Модель:</div>
                    <div className={style.item_content}>
                        {car.model}
                    </div>
                </div>
                <div className={style.car__description__item}>
                    <div className={style.item_title}>Номер:</div>
                    <div className={style.item_content}>
                        {car.num}
                    </div>
                </div>
                <div className={style.car__description__item}>
                    <div className={style.item_title}>Год:</div>
                    <div className={style.item_content}>
                        {car.yearManufacture}
                    </div>
                </div>
                <div className={style.car__description__item}>
                    <div className={style.item_title}>Год:</div>
                    <div className={style.item_content}>
                        {car.yearManufacture}
                    </div>
                </div>
                <div className={style.car__description__item}>
                    <div className={style.item_title}>VIN:</div>
                    <div className={style.item_content}>
                        {car.vin}
                    </div>
                </div>
            </div>
            <div className={style.description__details}>
                <div className={style.car__details__item}>
                    <div className={style.item_title}>Страховка до:</div>
                    <div className={style.item_content}>
                        {dateInsuranceIsValid}
                    </div>
                </div>
                <div className={style.car__details__item}>
                    <div className={style.item_title}>Техосмотр до:</div>
                    <div className={style.item_content}>
                        {dateTechnicalInspectionValid}
                    </div>
                </div>
                <div className={style.car__details__item}>
                    <div className={style.item_title}>Последнее ТО:</div>
                    <div className={style.item_content}>
                        {lastRecording
                            ? lastRecording.datecommission + " " + lastRecording.odometer
                            +"   "+lastRecording.text
                            : "нет данных"}
                    </div>
                </div>
                <div className={style.car__details__item}>
                    <div className={style.item_title}>Последний ремонт:</div>
                    <div className={style.item_content}>
                        {lastRepairRecord
                            ? lastRepairRecord.date + " " + lastRepairRecord.odometer
                            + "   " +lastRepairRecord.accomplishedWork
                            : "нет данных"}
                    </div>
                </div>
                <div className={style.car__details__item}>
                    <div className={style.item_title}>Последняя заметка:</div>
                    <div className={style.item_content}>
                        {lastNoticeRecord
                            ? lastNoticeRecord.date + "    " + lastNoticeRecord.text
                            : "нет данных"}
                    </div>
                </div>
            </div>
            <CarEdit isShowModal={isShowModal} setIsShowModal={setIsShowModal} car={car}/>
        </div>
    )
}