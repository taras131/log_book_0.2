import style from "./car_menu.module.css"
import {NavLink} from "react-router-dom";
import classNames from 'classnames';
import {useLocation} from "react-router";

export const CarMenu = (props) => {
    const path = `/car/${props.id}`
    const pathDescription = `/car/${props.id}`
    const pathType = useLocation().pathname.split("/")[2]
    return(
        <div className={style.car_menu_wrapper}>
            <NavLink to= {pathDescription} style={{ textDecoration: 'none' }}>
                <div className={classNames(style.car_menu_item, {
                    [style.active]: pathType === props.id
                })}>Описание</div>
            </NavLink>
            <NavLink to= {props.pathMaintenanceRecord} style={{ textDecoration: 'none' }}>
                <div className={classNames(style.car_menu_item, {
                    [style.active]: pathType === props.pathMaintenanceRecord.split("/")[2]
                })}>Записи ТО</div>
            </NavLink>
            <NavLink to= {props.pathInsurance} style={{ textDecoration: 'none' }}>
                <div className={classNames(style.car_menu_item, {
                    [style.active]: pathType === props.pathInsurance.split("/")[2]
                })}>Страховка</div>
            </NavLink>
            <NavLink to= {props.pathTechnicalInspection} style={{ textDecoration: 'none' }}>
                <div className={classNames(style.car_menu_item, {
                    [style.active]: pathType === props.pathTechnicalInspection.split("/")[2]
                })}>Техосмотр</div>
            </NavLink>
            <NavLink to= {props.pathNotice} style={{ textDecoration: 'none' }}>
                <div className={classNames(style.car_menu_item, {
                    [style.active]: pathType === props.pathNotice.split("/")[2]
                })}>Заметки</div>
            </NavLink>
            <NavLink to= {path} style={{ textDecoration: 'none' }}>
                <div className = {classNames(style.car_menu_item, style.car_delete)}
                onClick={props.onDeleteCarClick}>Удалить</div>
            </NavLink>
        </div>
    )
}