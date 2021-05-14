import style from "./header.module.css"
import {useDispatch} from "react-redux";
import {setAuthentication} from "../../redux/authenticationReducer";
import {NavLink} from "react-router-dom";

export const Header = (props) => {
    const dispatch = useDispatch()
    const onExitClick = () => {
        dispatch(setAuthentication(false))
    }
    const onEntranceClick = () => {
       // props.history.push("/registration")
    }
    return (
        <header className={style.header_wrapper}>
            <div className={style.header_logo}>

            </div>
            <div className={style.header_title}>
                <h1>Бортовой журнал</h1>
            </div>
            {props.isAuthentication
            ?<div className={style.header_button} onClick={onExitClick}>
                    выйти
                </div>
            :<NavLink to = "/registration" className={style.header_button} onClick={onEntranceClick}>
                    Регистрация
                </NavLink>}
        </header>
    )
}