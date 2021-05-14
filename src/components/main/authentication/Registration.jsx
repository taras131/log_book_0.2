import style from "./authentication.module.css"
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {registrationNewUser, setMessage} from "../../../redux/authenticationReducer";
import {getMessage} from "../../../redux/authenticationSelector";
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
    const onAddClick = () => {

    }
    const onRegistranionClick = () =>{
        dispatch(setMessage(""))
        if(name.length<2 || password<3 || password !== repeatPassword){
            dispatch(setMessage("Введены некоректные данные"))
        } else {
            dispatch(registrationNewUser(name,password))
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
            <input type="text" value={password} onChange={onPasswordChange}
                   placeholder="Пароль"/>
            {!props.isEntrance &&
            <input type="text" value={repeatPassword} onChange={onRepeatPasswordChange}
                   placeholder="Повторите пароль"/>}

            <span className={style.errormessage}>{message}</span>
            {props.isEntrance
                ? <button onClick={onAddClick}>Войти</button>
                : <button onClick={onRegistranionClick}>Заригистрироваться</button>}

        </div>
    )
}