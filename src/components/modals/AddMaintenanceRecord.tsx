import React, {FC, useEffect, useState} from 'react';
import classNames from "classnames";
import style from './Modal.module.css'
import backIcon from "../../icons/back.png"
import saveIcon from "../../icons/save.png"
import {useDispatch} from "react-redux";
import {CarType} from "../../types/types";
import {getCurrentDate} from "../../common/getCurrentDate";
import {
    addMaintenanceRecord,
    updateMaintenanceRecord
} from "../../redux/technicalmaintenancerecords/technicalMaintenanceReducer";

interface AddMaintenanceRecordProps {
    isShowModal: boolean,
    car: CarType,
    setIsShowModal: (isShowModal: boolean) => void
    maintenanceRecord?: any
}

const AddMaintenanceRecord: FC<AddMaintenanceRecordProps> = ({isShowModal, car, setIsShowModal, maintenanceRecord}) => {
    useEffect(() => {
        const body: any = document.querySelector('body');
        body.style.overflow = isShowModal ? 'hidden' : 'auto';
    }, [isShowModal])
    const dispatch = useDispatch()
    const [data, setData] = useState({
        userId: car.userId,
        carId: car.id,
        odometer: ``,
        date: getCurrentDate(),
        text: ''
    })
    useEffect(() => {
        if (maintenanceRecord) {
            setData({
                userId: car.userId,
                carId: car.id,
                odometer: maintenanceRecord.odometer,
                date: maintenanceRecord.datecommission,
                text: maintenanceRecord.text
            })
        } else {
            setData({
                userId: car.userId,
                carId: car.id,
                odometer: ``,
                date: getCurrentDate(),
                text: ''
            })
        }
    }, [isShowModal])
    const onDataChange = (e: any) => {
        setData({...data, [e.target.name]: e.target.value})
    }
    const formValidation = () => {
        if (!data.odometer || !data.date || !data.text) {
            return false
        } else {
            return true
        }
    }
    const onAddClick = () => {
        if (formValidation()) {
            if (maintenanceRecord) {
                dispatch (updateMaintenanceRecord({
                    id: maintenanceRecord.id,
                    carId: car.id,
                    datecommission: data.date,
                    odometer: data.odometer,
                    text: data.text,
                    userId: car.userId,
                }))
                setIsShowModal(false)
            } else {
                dispatch(addMaintenanceRecord({
                    id: "" + new Date().valueOf(),
                    carId: car.id,
                    datecommission: data.date,
                    odometer: data.odometer,
                    text: data.text,
                    userId: car.userId
                }))
            }
            setIsShowModal(false)
        } else {

        }
    }
    return (
        <div className={classNames(style.modal__wrapper, {
            [style.modal__wrapper__active]: isShowModal
        })}>
            <div className={classNames(style.modal__dialog, {
                [style.modal__dialog__active]: isShowModal
            })}>
                <div className={style.modal__dialog__header}>
                    <div className={style.img__container}>
                        <img src={backIcon} onClick={() => setIsShowModal(false)} alt="back"/>
                    </div>
                    {maintenanceRecord ? "Изменение записи ТО" : "Добавление записи ТО"}
                    <div className={style.img__container}>
                        <img src={saveIcon} onClick={onAddClick} alt=""/>
                    </div>
                </div>
                <div className={style.modal__dialog__content}>
                    <div className={style.modal__dialog__content__item}>
                        <span className={style.content__item__subtitle}>Дата</span>
                        <input className={style.dialog__input} type="text" onChange={onDataChange} name="date"
                               value={data.date}/>
                    </div>
                    <div className={style.modal__dialog__content__item}>
                        <span className={style.content__item__subtitle}>Пробег</span>
                        <input className={style.dialog__input} type="text" onChange={onDataChange} name="odometer"
                               value={data.odometer}/>
                    </div>
                    <div className={style.modal__dialog__content__item}>
                        <span className={style.content__item__subtitle}>Проведённые работы</span>
                        <textarea className={style.dialog__textarea} onChange={onDataChange}
                                  name="text" value={data.text} rows={7}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddMaintenanceRecord;