import style from "./navigation.module.css";
import {NavLink} from "react-router-dom";
import classNames from "classnames";
import {useLocation} from "react-router";
import {useSelector} from "react-redux";
import {getCars} from "../../../redux/cars/carsSelector";
import {ButtonItem} from "./ButtonItem";

export const NavigationButtons = (props) => {
    const path = useLocation().pathname.split("/").pop()
    const carsList = useSelector(state => getCars(state))
    const buttonsList = carsList.map(item => <ButtonItem key={item.id} {...item} />)
    return(
        <div className={style.navigation_buttons}>
            {props.isAuthentication &&
            <div className={style.buttons_wrapper }>
                <NavLink to="/" className={classNames(style.button_item,{
                    [style.active]: path === ""
                })}>
                    Сводка
                </NavLink>
                {buttonsList}
                <NavLink to="/add_new_car" className={classNames(style.button_item,{
                    [style.active]: path === "add_new_car"
                })}>
                    Добавить
                </NavLink>
            </div>
            }
        </div>
    )
}