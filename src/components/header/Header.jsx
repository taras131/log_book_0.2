import style from "./header.module.css"
import {useDispatch, useSelector} from "react-redux";
import { setUser} from "../../redux/authenticationReducer";
import {NavLink} from "react-router-dom";
import {useLocation} from "react-router";
import {getMyName} from "../../redux/authenticationSelector";

export const Header = (props) => {
    const path = useLocation().pathname.split("/").pop()
    const name = useSelector(state => getMyName(state))
    let isRegistration = false
    let isLogin = false
    if (path === "registration" && !props.isAuthentication){ isLogin = true}
    if (path === "login" && !props.isAuthentication){ isRegistration = true}
    const dispatch = useDispatch()
    const onExitClick = () => {
        sessionStorage.setItem("userId", '')
        sessionStorage.setItem("userName", '')
        dispatch(setUser({id:"", name:""}))
    }

    return (
        <header className={style.header_wrapper}>
            <div className={style.header_logo}>

            </div>
            <div className={style.header_title}>
                <h1>Бортовой журнал</h1>
            </div>
            {props.isAuthentication &&
                <>
                    <div className={style.header_name}>
                        {name}
                    </div>
                    <div className={style.header_button} onClick={onExitClick}>
                        выйти
                    </div>
                </>
           }
            {isLogin &&
             <NavLink to = "/login" className={style.header_button} >
                        Ввход
                    </NavLink>}
            {isRegistration &&
            <NavLink to = "/registration" className={style.header_button}>
                Регистрация
            </NavLink>
            }
        </header>
    )
}