import {useEffect, useState} from "react";
import classNames from "classnames";
import style from "./answerwindow.module.css";
import {useDispatch, useSelector} from "react-redux";
import {resetAnswer} from "../../redux/answerwindow/answerWindowReducer";

export const AnswerWindow =(props)=> {
    const isShow = useSelector(state=> state.answerInfo.isShow)
    const message = useSelector(state=> state.answerInfo.message)
    const func  = useSelector(state=> state.answerInfo.func)
    const dispatch = useDispatch()
    useEffect(() => {
        const body = document.querySelector('body');
        body.style.overflow = isShow ? 'hidden' : 'auto';
    }, [isShow])
    const onYesClick = () => {
        dispatch(func)
        dispatch(resetAnswer())
    }
    const onNoClick = () => {
        dispatch(resetAnswer())
}
    return(
        <div className={classNames(style.answer_window_wrapper, {
            [style.answer_window_hidden]: !isShow})}>
            <div className={style.answer_window_content}>
                <div>Вы действительно хотите</div>
                <div>{message} ?</div>
                <div className={style.answer_button_wrapper}>
                    <button onClick={onYesClick}>Да</button>
                    <button onClick={onNoClick }>Нет</button>
                </div>
            </div>
        </div>
    )
}