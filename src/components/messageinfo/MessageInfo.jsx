import style from "./messageinfo.module.css";
import classNames from "classnames";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {resetMessageInfo} from "../../redux/messageinfo/MessageInfoReducer";

export const MessageInfo = (props) => {
    const messageInfo = useSelector(state => state.messageInfo.message)
    const sort = useSelector(state => state.messageInfo.sort)
    const isShow = useSelector(state => state.messageInfo.isShow)
    const dispatch = useDispatch()
    useEffect(()=> {
        if(isShow){
            setTimeout(()=>{
                dispatch(resetMessageInfo())
            }, 4000)
        }
    },[isShow])
    return (
        <div className={classNames(style.message_window_wrapper, {
            [style.message_window_hidden]: !isShow || !messageInfo,
            [style.negative]: sort === "negative"
        })}>
            <div className={style.message_window_content}>{messageInfo}</div>
        </div>
    )
}