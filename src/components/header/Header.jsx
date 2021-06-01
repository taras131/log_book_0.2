import style from "./header.module.css"
import {useDispatch, useSelector} from "react-redux";
import {setUser} from "../../redux/authentication/authenticationReducer";
import {NavLink} from "react-router-dom";
import {useLocation} from "react-router";
import {getMyName} from "../../redux/authentication/authenticationSelector";
import icon from "../../icons/open-book.png"
import exit from "../../icons/logout.png"
import classNames from "classnames";

export const Header = (props) => {
    const path = useLocation().pathname.split("/").pop()
    const name = useSelector(state => getMyName(state))
    let isRegistration = false
    let isLogin = false
    if (path === "registration" && !props.isAuthentication) {
        isLogin = true
    }
    if (path === "login" && !props.isAuthentication) {
        isRegistration = true
    }
    const dispatch = useDispatch()
    const onExitClick = () => {
        sessionStorage.setItem("userId", '')
        sessionStorage.setItem("userName", '')
        dispatch(setUser({id: "", name: ""}))
    }

    return (
        <header className={style.header_wrapper}>
            <div className={style.header_logo}>
                <NavLink to="/" style={{textDecoration: 'none'}}>
                    <img src={icon} alt="open book"/>
                </NavLink>
            </div>
            <div onClick={props.onBurgerClick}
                 className={classNames(style.header_burger, {
                     [style.burger_active]: props.isShowBurgerMenu
                 })}>
                <span className={style.child_1}></span>
                <span className={style.child_2}></span>
                <span className={style.child_3}></span>
            </div>
            <div className={style.header_title}>
                <NavLink to="/" style={{textDecoration: 'none'}}>
                    <h1>Бортовой журнал</h1>
                </NavLink>
            </div>
            {props.isAuthentication &&
            <>
                <div className={style.header_button} onClick={onExitClick}>
                    {name}
                    <img src={exit} alt="exit"/>
                </div>
            </>
            }
            {isLogin &&
            <NavLink to="/login" className={style.header_button}>
                Ввход
            </NavLink>}
            {isRegistration &&
            <NavLink to="/registration" className={style.header_button}>
                Регистрация
            </NavLink>
            }
        </header>
    )
}