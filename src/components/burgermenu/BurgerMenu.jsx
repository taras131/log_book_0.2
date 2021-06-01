import style from "./burgermenu.module.css"
import classNames from "classnames";
import {NavigationButtons} from "../main/navigation/NavigationButtons";

export const BurgerMenu = (props) => {
    return (
        <div onClick={props.onBurgerClick} className={classNames(style.burger_menu_wrapper, {
            [style.burger_menu_hidden]: !props.isShowBurgerMenu
        })}>
            <NavigationButtons isAuthentication={props.isAuthentication}/>
        </div>
    )
}