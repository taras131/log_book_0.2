import style from "./authentication.Module.css"
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {authentication, registrationNewUser, setMessage} from "../../redux/authentication/authenticationReducer";
import {getMessage} from "../../redux/authentication/authenticationSelector";
import {useHistory, useLocation} from "react-router";
import {HOME_PAGE, LOGIN_ROUTE,} from "../../utils/const";

export const Authentication = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [repeatPassword, setRepeatPassword] = useState("")
    const history = useHistory()
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const onNameChange = (e) => {
        setName(e.target.value)
    }
    const message = useSelector(state => getMessage(state))
    const onPasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const onRepeatPasswordChange = (e) => {
        setRepeatPassword(e.target.value)
    }
    const onAuthClick = async () => {
        if (name.length < 2 || password < 3) {
            dispatch(setMessage("Введены некоректные данные"))
            return
        }
        if (isLogin) {
            const data = await dispatch(authentication(name, password))
            history.push(HOME_PAGE)
        } else {
            if (password !== repeatPassword) {
                dispatch(setMessage("Введены некоректные данные"))
                return
            }
            dispatch(registrationNewUser(name, password))
            setName("")
            setPassword("")
            setRepeatPassword("")
            history.push(HOME_PAGE)
        }

    }
    return (
        <div className={style.authentication_wrapper}>
            {isLogin
                ? <h2>Вход</h2>
                : <h2>Регистрация</h2>}

            <input type="text" value={name} onChange={onNameChange}
                   placeholder="Логин"/>
            <input type="password" value={password} onChange={onPasswordChange}
                   placeholder="Пароль"/>
            {!isLogin &&
            <input type="password" value={repeatPassword} onChange={onRepeatPasswordChange}
                   placeholder="Повторите пароль"/>}

            <div className={style.errormessage}>{message}</div>
            {isLogin
                ? <button onClick={onAuthClick}>Войти</button>
                : <button onClick={onAuthClick}>Заригистрироваться</button>}

        </div>
    )
}