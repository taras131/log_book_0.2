import style from "../navigationButtons.module.css";
import {NavLink} from "react-router-dom";
import {useLocation} from "react-router";
import classNames from "classnames";

export const ButtonItem = (props) => {
    const id = useLocation().pathname.split("/").pop()
    const path = `/car/${props.id}`
    if (!props.id){
        return (
            <div></div>
        )
    }
    return(
        <NavLink to= {path} style={{ textDecoration: 'none' }}>
            <div className={classNames(style.button_item,{
                [style.active]: id === props.id
            })}>
                {props.brand} {props.num}</div>
        </NavLink>
    )
}