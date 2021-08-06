import {CarType, RepairRecordType} from "../../types/types";
import React, {FC, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {getCurrentDate} from "../../common/getCurrentDate";
import classNames from "classnames";
import style from "./Modal.module.css";
import backIcon from "../../icons/back.png";
import saveIcon from "../../icons/save.png";
import {setMessageInfo} from "../../redux/messageinfo/MessageInfoReducer";
import {addNewRepairRecord, updateRepairRecord} from "../../redux/repairs/repairsReducer";

interface AddRepairRecordProps {
    isShowModal: boolean,
    car: CarType,
    setIsShowModal: (isShowModal: boolean) => void
    repairRecord?: RepairRecordType
}

const AddRepairRecord: FC<AddRepairRecordProps> = ({
                                                       isShowModal, car,
                                                       setIsShowModal, repairRecord
                                                   }) => {
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
        reasonsRepair: '',
        usedParts: '',
        accomplishedWork: '',
        result: ''
    })
    useEffect(() => {
        if (repairRecord) {
            setData({
                userId: car.userId,
                carId: car.id,
                accomplishedWork: repairRecord.accomplishedWork,
                date: repairRecord.date,
                odometer: repairRecord.odometer,
                reasonsRepair: repairRecord.reasonsRepair,
                result: repairRecord.result,
                usedParts: repairRecord.usedParts,
            })
        }
    }, [isShowModal])
    const onDataChange = (e: any) => {
        setData({...data, [e.target.name]: e.target.value})
    }
    const formValidation = () => {
        if (!data.odometer || !data.date || !data.accomplishedWork || !data.reasonsRepair || !data.result || !data.usedParts) {
            return false
        } else {
            return true
        }
    }
    const onAddClick = () => {
        if (formValidation()) {
            if (repairRecord) {
                dispatch(updateRepairRecord({
                    userId: car.userId,
                    carId: car.id,
                    id: repairRecord.id,
                    date: data.date,
                    odometer: data.odometer,
                    reasonsRepair: data.reasonsRepair,
                    usedParts: data.usedParts,
                    accomplishedWork: data.accomplishedWork,
                    result: data.result
                }))
                setIsShowModal(false)
            } else {
                console.log(data)
               dispatch(addNewRepairRecord({
                   userId: car.userId,
                   carId: car.id,
                   date: data.date,
                   odometer: data.odometer,
                   reasonsRepair: data.reasonsRepair,
                   usedParts: data.usedParts,
                   accomplishedWork: data.accomplishedWork,
                   result: data.result
               }))
            }
            setIsShowModal(false)
        } else {
            dispatch(setMessageInfo("Введены неполные данные", "negative"))
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
                    {repairRecord ? "Изменение записи Ремонта" : "Добавление записи Ремонта"}
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
                        <span className={style.content__item__subtitle}>Причины ремонта</span>
                        <textarea className={style.dialog__textarea} onChange={onDataChange}
                                  name="reasonsRepair" value={data.reasonsRepair} rows={7}/>
                    </div>
                    <div className={style.modal__dialog__content__item}>
                        <span className={style.content__item__subtitle}>Использованные запчасти</span>
                        <textarea className={style.dialog__textarea} onChange={onDataChange}
                                  name="usedParts" value={data.usedParts} rows={7}/>
                    </div>
                    <div className={style.modal__dialog__content__item}>
                        <span className={style.content__item__subtitle}>Проведённые работы</span>
                        <textarea className={style.dialog__textarea} onChange={onDataChange}
                                  name="accomplishedWork" value={data.accomplishedWork} rows={7}/>
                    </div>
                    <div className={style.modal__dialog__content__item}>
                        <span className={style.content__item__subtitle}>Результаты</span>
                        <textarea className={style.dialog__textarea} onChange={onDataChange}
                                  name="result" value={data.result} rows={7}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddRepairRecord;