import style from "./navigation.module.css";
import {NavLink} from "react-router-dom";
import {useLocation} from "react-router";
import classNames from "classnames";

export const ButtonItem = (props) => {
    const id = useLocation().pathname.split("/").pop()
    const path = `/car/${props.id}`
    if (!props.id) {
        return (
            <div></div>
        )
    }
    return (
        <NavLink to={path} className={classNames(style.button_item, {
            [style.active]: id === props.id
        })}>
            <div className={style.title_wrapper}>
                <div>
                    {props.brand}
                </div>
                <div>
                    {props.num}
                </div>
            </div>

        </NavLink>
    )
}