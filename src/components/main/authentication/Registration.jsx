import style from "./authentication.module.css"
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {authentication, registrationNewUser, setMessage} from "../../../redux/authentication/authenticationReducer";
import {getMessage} from "../../../redux/authentication/authenticationSelector";
import {Redirect} from "react-router";

export const Registration = (props) => {
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [repeatPassword, setRepeatPassword] = useState("")
    const onNameChange = (e) => {
        setName(e.target.value)
    }
    const message = useSelector(state=> getMessage(state))
    const onPasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const onRepeatPasswordChange = (e) => {
        setRepeatPassword(e.target.value)
    }
    const onEntranceClick = () => {
    dispatch(authentication(name, password))
    }
    const onRegistranionClick = () =>{
        dispatch(setMessage(""))
        if(name.length<2 || password<3 || password !== repeatPassword){
            dispatch(setMessage("Введены некоректные данные"))
        } else {
            dispatch(registrationNewUser(name,password))
            setName("")
            setPassword("")
            setRepeatPassword("")
        }
    }
    if(props.isAuthentication) {return <Redirect to="/"/>}

    return (
        <div className={style.entrance_wrapper}>

            {props.isEntrance
                ? <h2>Вход</h2>
                : <h2>Регистрация</h2>}

            <input type="text" value={name} onChange={onNameChange}
                   placeholder="Логин"/>
            <input type="password" value={password} onChange={onPasswordChange}
                   placeholder="Пароль"/>
            {!props.isEntrance &&
            <input type="password" value={repeatPassword} onChange={onRepeatPasswordChange}
                   placeholder="Повторите пароль"/>}

            <span className={style.errormessage}>{message}</span>
            {props.isEntrance
                ? <button onClick={onEntranceClick}>Войти</button>
                : <button onClick={onRegistranionClick}>Заригистрироваться</button>}

        </div>
    )
}