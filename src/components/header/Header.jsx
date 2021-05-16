import style from "./header.module.css"
import {useDispatch} from "react-redux";
import {setAuthentication} from "../../redux/authenticationReducer";
import {NavLink} from "react-router-dom";
import {useLocation} from "react-router";

export const Header = (props) => {
    const path = useLocation().pathname.split("/").pop()
    let isRegistration = false
    let isLogin = false
    if (path === "registration" && !props.isAuthentication){ isLogin = true}
    if (path === "login" && !props.isAuthentication){ isRegistration = true}
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
            {props.isAuthentication &&
            <div className={style.header_button} onClick={onExitClick}>
                    выйти
                </div>}


            {isLogin &&
             <NavLink to = "/login" className={style.header_button} onClick={onEntranceClick}>
                        Ввход
                    </NavLink>}
            {isRegistration &&
            <NavLink to = "/registration" className={style.header_button} onClick={onEntranceClick}>
                Регистрация
            </NavLink>
            }
        </header>
    )
}