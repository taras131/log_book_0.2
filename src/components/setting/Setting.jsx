import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import classNames from "classnames";
import style from "./Setting.module.css";
import {getEmailList, getSettingIsShow} from "../../redux/setting/settingSelector";
import saveIcon from "../../icons/save.png";
import exitIcon from "../../icons/logout.png";
import backIcon from "../../icons/back.png";
import editIcon from "../../icons/edit.png";
import {setIsSettingShow, updateSetting} from "../../redux/setting/settingReducer";

export const Setting = (props) => {
    const [edit, setEdit] = useState(false)
    const [data, setData] = useState({
        email_1: "",
        email_2: "",
        email_3: "",
    })
    const isShow = useSelector(state => getSettingIsShow(state))
    const emailList = useSelector(state => getEmailList(state))
    useEffect(() => {
        setData({
            email_1: emailList[0],
            email_2: emailList[1],
            email_3: emailList[2],
        })
    }, [isShow])
    const dispatch = useDispatch()
    useEffect(() => {
        const body = document.querySelector('body');
        body.style.overflow = isShow ? 'hidden' : 'auto';
    }, [isShow])
    const onDataChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }
    const onEditClick = () => {
        setEdit(!edit)
    }
    const onExitClick = () => {
        dispatch(setIsSettingShow(false))
    }
    const onSaveClick = () => {
        dispatch(updateSetting({
            userId: props.userId,
            email_1: data.email_1,
            email_2: data.email_2,
            email_3: data.email_3,
        }))
        onEditClick()
        onExitClick()
    }
    return (
        <div className={classNames(style.setting_window_wrapper, {
            [style.setting_window_hidden]: !isShow
        })}>
            <div className={style.setting_window_content}>
                <div className={style.setting_header}>
                    <div className={style.img_wrapper}>
                        {edit
                            ? <img onClick={onSaveClick} src={saveIcon} alt="save"/>
                            : <img onClick={onExitClick} src={backIcon} alt="exitIcon"/>}
                    </div>
                    <h3>Настройки</h3>
                    <div className={style.img_wrapper}>
                        {edit
                            ? <img onClick={onEditClick} src={backIcon} alt="backIcon"/>
                            : <img onClick={onEditClick} src={editIcon} alt="editIcon"/>}
                    </div>
                </div>

                <div className={style.hr}></div>
                <div>
                    <h5>Установите email для отправки заявок:</h5>
                    <h6>Можно установить до трех штук, заявка будет отсылаться по всем установленным email
                        одновременно</h6>
                </div>
                <div className={style.email_wrapper}>
                    <div className={style.email_item}>Первый email: {edit
                        ? <input className={style.email_item_input} value={data.email_1} name="email_1"
                                 onChange={onDataChange}/>
                        : <div style={{marginLeft: 15}}>{data.email_1}</div>} </div>
                    <div className={style.email_item}>Второй email: {edit
                        ? <input className={style.email_item_input} value={data.email_2} name="email_2"
                                 onChange={onDataChange}/>
                        : <div style={{marginLeft: 15}}>{data.email_2}</div>}</div>
                    <div className={style.email_item}>Третий email: {edit
                        ? <input className={style.email_item_input} value={data.email_3} name="email_3"
                                 onChange={onDataChange}/>
                        : <div style={{marginLeft: 15}}>{data.email_3}</div>}</div>
                </div>
            </div>
        </div>
    )
}