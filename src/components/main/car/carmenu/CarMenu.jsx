import style from "./car_menu.module.css"
import {NavLink} from "react-router-dom";
import classNames from 'classnames';
import {useLocation} from "react-router";

export const CarMenu = (props) => {
    const path = `/car/${props.id}`
    const pathDescription = `/car/${props.id}`
    const pathType = useLocation().pathname.split("/")[2]
    return (
        <div className={style.car_menu_wrapper}>
            <div className={style.buttons_wrapper}>
                <NavLink to={pathDescription} className={classNames(style.car_menu_item, {
                    [style.active]: pathType === props.id
                })}>
                    Описание
                </NavLink>
                <NavLink to={props.pathMaintenanceRecord} className={classNames(style.car_menu_item, {
                    [style.active]: pathType === props.pathMaintenanceRecord.split("/")[2]
                })}>
                    Записи ТО
                </NavLink>
                <NavLink to={props.pathRepairs} className={classNames(style.car_menu_item, {
                    [style.active]: pathType === props.pathRepairs.split("/")[2]
                })}>
                    Ремонты
                </NavLink>
                <NavLink to={props.pathInsurance} className={classNames(style.car_menu_item, {
                    [style.active]: pathType === props.pathInsurance.split("/")[2]
                })}>
                    Страховка
                </NavLink>
                <NavLink to={props.pathTechnicalInspection} className={classNames(style.car_menu_item, {
                    [style.active]: pathType === props.pathTechnicalInspection.split("/")[2]
                })}>
                    Техосмотр
                </NavLink>
                <NavLink to={props.pathOrder} className={classNames(style.car_menu_item, {
                    [style.active]: pathType === props.pathOrder.split("/")[2]
                })}>
                    Заявки
                </NavLink>
                <NavLink to={props.pathNotice} className={classNames(style.car_menu_item, {
                    [style.active]: pathType === props.pathNotice.split("/")[2]
                })}>
                    Заметки
                </NavLink>
            </div>
        </div>
    )
}