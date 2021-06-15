import {OrderItem} from "../../car/order/OrderItem";
import style from "../../car/carmenu/car_menu.Module.css";
import {NavLink} from "react-router-dom";
import classNames from "classnames";
import {useLocation} from "react-router";

export const OrderNavigation = (props) => {
    const pathType = useLocation().pathname.split("/")[2]
    return(
        <div className={style.car_menu_wrapper}>
            <div className={style.buttons_wrapper}>
                <NavLink to={props.patchAll} className={classNames(style.car_menu_item, {
                    [style.active]: pathType === props.id
                })}>
                    Все
                </NavLink>
                <NavLink to={props.patchParts} className={classNames(style.car_menu_item, {
                    [style.active]: pathType === props.patchParts.split("/")[2]
                })}>
                    Запчасти
                </NavLink>
                <NavLink to={props.patchTools} className={classNames(style.car_menu_item, {
                    [style.active]: pathType === props.patchTools.split("/")[2]
                })}>
                    Инструмент
                </NavLink>
                <NavLink to={props.patchExpendableMaterial} className={classNames(style.car_menu_item, {
                    [style.active]: pathType === props.patchExpendableMaterial.split("/")[2]
                })}>
                    Расходники
                </NavLink>
            </div>
        </div>
    )
}