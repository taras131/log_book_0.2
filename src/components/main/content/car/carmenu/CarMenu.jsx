import style from "./car_menu.module.css"
import {NavLink} from "react-router-dom";
import classNames from 'classnames';

export const CarMenu = (props) => {
    const path = `/car/${props.id}`
    const pathDescription = `/car/${props.id}`
    return(
        <div className={style.car_menu_wrapper}>
            <NavLink to= {pathDescription} style={{ textDecoration: 'none' }}>
                <div className={style.car_menu_item}>Описание</div>
            </NavLink>
            <NavLink to= {props.pathMaintenanceRecord} style={{ textDecoration: 'none' }}>
                <div className={style.car_menu_item}>Записи ТО</div>
            </NavLink>
            <NavLink to= {props.pathInsurance} style={{ textDecoration: 'none' }}>
                <div className={style.car_menu_item}>Страховка</div>
            </NavLink>
            <NavLink to= {props.pathTechnicalInspection} style={{ textDecoration: 'none' }}>
                <div className={style.car_menu_item}>Техосмотр</div>
            </NavLink>
            <NavLink to= {props.pathNotice} style={{ textDecoration: 'none' }}>
                <div className={style.car_menu_item}>Заметки</div>
            </NavLink>
            <NavLink to= {path} style={{ textDecoration: 'none' }}>
                <div className = {classNames(style.car_menu_item, style.car_delete)}
                onClick={props.onDeleteCarClick}>Удалить</div>
            </NavLink>
        </div>
    )
}