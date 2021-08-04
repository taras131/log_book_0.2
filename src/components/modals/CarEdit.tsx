import React, {FC, useState} from 'react';
import classNames from "classnames";
import style from './Modal.module.css'
import backIcon from "../../icons/back.png"
import saveIcon from "../../icons/save.png"
import {updateCarThunk} from "../../redux/cars/carsReducer";
import {setAnswer} from "../../redux/answerwindow/answerWindowReducer";
import {useDispatch} from "react-redux";
import {CarType} from "../../types/types";

interface CarEditProps {
    isShowModal: boolean,
    car: CarType,
    setIsShowModal: (isShowModal: boolean) => void
}

const CarEdit: FC<CarEditProps> = ({
                                       isShowModal,car , setIsShowModal
                                   }) => {
    const dispatch = useDispatch()
    const [data, setData] = useState({
        brand: car.brand,
        model: car.model,
        num: car.num,
        yearManufacture: car.yearManufacture,
        vin: car.vin
    })
    const onDataChange = (e:any) => {
        setData({...data, [e.target.name]: e.target.value})
    }
    const onSaveClick = () => {
        const upCar = (updateCarThunk({
            userId: car.userId,
            id: car.id,
            brand: data.brand,
            model: data.model,
            yearManufacture: data.yearManufacture,
            num: data.num,
            vin: data.vin
        }))
        dispatch(setAnswer("сохранить изменения", upCar))
        setIsShowModal(false)
    }
    return (
        <div className={classNames(style.modal__wrapper, {
            [style.modal__wrapper__active]: isShowModal
        })}>
            <div className={classNames(style.modal__dialog, {
                [style.modal__dialog__active]: isShowModal
            })}>
                <div className={style.modal__dialog__header}>
                    <img src={backIcon} onClick={() => setIsShowModal(false)} alt="back"/>
                    Внесение правок
                    <img src={saveIcon} onClick={onSaveClick} alt=""/>
                </div>
                <div className={style.modal__dialog__content}>
                    <div className={style.modal__dialog__content__item}>
                        <span className={style.content__item__subtitle}>Марка</span>
                        <input className={style.dialog__input} type="text" onChange={onDataChange} name="brand"
                        value = {data.brand}/>
                    </div>
                    <div className={style.modal__dialog__content__item}>
                        <span className={style.content__item__subtitle}>Модель</span>
                        <input className={style.dialog__input} type="text" onChange={onDataChange} name="model"
                        value = {data.model}/>
                    </div>
                    <div className={style.modal__dialog__content__item}>
                        <span className={style.content__item__subtitle}>Год выпуска</span>
                        <input className={style.dialog__input} type="text" onChange={onDataChange}
                               name="yearManufacture" value={data.yearManufacture}/>
                    </div>
                    <div className={style.modal__dialog__content__item}>
                        <span className={style.content__item__subtitle}>Номер</span>
                        <input className={style.dialog__input} type="text" onChange={onDataChange} name="num"
                        value = {data.num}/>
                    </div>
                    <div className={style.modal__dialog__content__item}>
                        <span className={style.content__item__subtitle}>VIN</span>
                        <input className={style.dialog__input} type="text" onChange={onDataChange} name="vin"
                        value = {data.vin}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarEdit;