import style from "./navigationButtons.module.css"
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {getCars} from "../../../../redux/cars/carsSelector";
import {ButtonItem} from "./buttonItem/ButtonItem";

export const NavigationButtons = () => {
    const carsList = useSelector(state => getCars(state))
    const buttonsList = carsList.map(item => <ButtonItem key={item.id} {...item} />)
    return (
        <div>
        {buttonsList}
            <NavLink to="/add_new_car" style={{ textDecoration: 'none' }}>
                <div className={style.button_item}>Добавить</div>
            </NavLink>
        </div>
    )
}