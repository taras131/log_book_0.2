import style from "./car_menu.Module.css"
import {NavLink} from "react-router-dom";
import classNames from 'classnames';
import {useLocation} from "react-router";

export const CarMenu = (props) => {

    return (
        <div className={style.car_menu_wrapper}>
            <div className={style.buttons_wrapper}>
                <div onClick={() => props.setActiveCategory("description")} className={classNames(style.car_menu_item, {
                    [style.active]: props.activeCategory === "description"
                })}>
                    Описание
                </div>
                <div onClick={() => props.setActiveCategory("maintenanceRecord")} className={classNames(style.car_menu_item, {
                    [style.active]: props.activeCategory === "maintenanceRecord"
                })}>
                    Записи ТО
                </div>
                <div onClick={() => props.setActiveCategory("repairs")} className={classNames(style.car_menu_item, {
                    [style.active]: props.activeCategory === "repairs"
                })}>
                    Ремонты
                </div>
                <div onClick={() => props.setActiveCategory("insurance")} className={classNames(style.car_menu_item, {
                    [style.active]: props.activeCategory === "insurance"
                })}>
                    Страховка
                </div>
                <div onClick={() => props.setActiveCategory("technicalInspection")} className={classNames(style.car_menu_item, {
                    [style.active]: props.activeCategory === "technicalInspection"
                })}>
                    Техосмотр
                </div>
                <div onClick={() => props.setActiveCategory("order")} className={classNames(style.car_menu_item, {
                    [style.active]: props.activeCategory === "order"
                })}>
                    Заявки
                </div>
                <div onClick={() => props.setActiveCategory("notice")} className={classNames(style.car_menu_item, {
                    [style.active]: props.activeCategory === "notice"
                })}>
                    Заметки
                </div>
            </div>
        </div>
    )
}