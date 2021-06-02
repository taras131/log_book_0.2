import style from "./burgermenu.module.css"
import classNames from "classnames";
import {NavigationButtons} from "../main/navigation/NavigationButtons";
import {useEffect} from "react";

export const BurgerMenu = (props) => {
    useEffect(() => {
        const body = document.querySelector('body');
        body.style.overflow = props.isShowBurgerMenu ? 'hidden' : 'auto';
    }, [props.isShowBurgerMenu])
    return (
        <div onClick={props.onBurgerClick} className={classNames(style.burger_menu_wrapper, {
            [style.burger_menu_hidden]: !props.isShowBurgerMenu
        })}>
            <NavigationButtons isAuthentication={props.isAuthentication}/>
        </div>
    )
}