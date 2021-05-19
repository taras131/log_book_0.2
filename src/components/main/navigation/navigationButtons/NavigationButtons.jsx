import style from "./navigationButtons.module.css"
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {getCars} from "../../../../redux/cars/carsSelector";
import {ButtonItem} from "./buttonItem/ButtonItem";
import classNames from "classnames";
import {useLocation} from "react-router";

export const NavigationButtons = () => {
    const path = useLocation().pathname.split("/").pop()
    const carsList = useSelector(state => getCars(state))
    const buttonsList = carsList.map(item => <ButtonItem key={item.id} {...item} />)
    return (
        <div>
            <NavLink to="/" style={{textDecoration: 'none'}}>
                <div className={classNames(style.button_item,{
                    [style.active]: path === ""
                })}>Сводка</div>
            </NavLink>
            {buttonsList}
            <NavLink to="/add_new_car" style={{textDecoration: 'none'}}>
                <div className={classNames(style.button_item,{
                    [style.active]: path === "add_new_car"
                })}>Добавить</div>
            </NavLink>
        </div>
    )
}