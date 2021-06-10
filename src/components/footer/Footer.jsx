import style from "./footer.Module.css"
import {NavLink} from "react-router-dom";
import {setIsSettingShow} from "../../redux/setting/settingReducer";
import {useDispatch} from "react-redux";

export const Footer = ({isAuthentication}) => {
    const dispatch = useDispatch()
    const onSettingClick = () => {
        dispatch(setIsSettingShow(true))
    }
    return (
        <footer className={style.footer_wrapper}>
            {isAuthentication &&
            <div className={style.footer_container}>
                <NavLink to ="/" className={style.footer_item}>
                    Главная
                </NavLink>
                <NavLink to ="/0" className={style.footer_item}>
                    Легковые
                </NavLink>
                <NavLink to ="/1" className={style.footer_item}>
                    Грузовые
                </NavLink>
                <NavLink to ="/2" className={style.footer_item}>
                    Спецтехника
                </NavLink>
                <NavLink to ="/add_new_car" className={style.footer_item}>
                    Добавить
                </NavLink>
                <div onClick={onSettingClick} className={style.footer_item}>
                    Настройки
                </div>
                <NavLink to = "/orders_review" className={style.footer_item}>
                    Заявки
                </NavLink>
            </div>
            }
            <div className={style.footer_support}>
                mossnabitkana@gmail.com
            </div>
        </footer>
    )
}