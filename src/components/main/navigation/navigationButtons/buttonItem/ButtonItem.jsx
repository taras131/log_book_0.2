import style from "../navigationButtons.module.css";
import {NavLink} from "react-router-dom";

export const ButtonItem = (props) => {
    const path = `/car/${props.id}`
    return(
        <NavLink to= {path} style={{ textDecoration: 'none' }}>
            <div className={style.button_item}>{props.brand}</div>
        </NavLink>
    )
}