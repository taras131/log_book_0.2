import style from "../answerwindow/answerwindow.module.css";
import classNames from "classnames";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {resetMessageInfo} from "../../redux/messageinfo/MessageInfoReducer";

export const MessageInfo = (props) => {
    const dispatch = useDispatch()
    const [isShow, setIsShow] = useState(false)
    if (props.message) {
        setIsShow(true)
    }
    setTimeout(dispatch(resetMessageInfo()), 500)
    return (
        <div className={classNames(style.answer_window_wrapper, {
            [style.answer_window_hidden]: !isShow
        })}>
            <div className={style.answer_window_content}>
                <div>{props.message}</div>
            </div>
        </div>
    )
}