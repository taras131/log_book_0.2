import style from "./header.Module.css"
import {useDispatch, useSelector} from "react-redux";
import {logOut, setUser} from "../../redux/authentication/authenticationReducer";
import {NavLink} from "react-router-dom";
import {useLocation} from "react-router";
import {getMyName} from "../../redux/authentication/authenticationSelector";
import icon from "../../icons/open-book.png"
import exit from "../../icons/logout.png"
import setting from "../../icons/setting.png"
import cart from "../../icons/cart.png"
import classNames from "classnames";
import {setIsSettingShow} from "../../redux/setting/settingReducer";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../../utils/const";

export const Header = (props) => {
    console.log(props.isAuthentication)
    const path = useLocation().pathname.split("/").pop()
    const name = useSelector(state => state.authInfo.user.name)
    console.log(name)
    let isRegistration = false
    let isLogin = false
    if (path === "registration" && !props.isAuthentication) {
        isLogin = true
    }
    if (path === "login" && !props.isAuthentication) {
        isRegistration = true
    }
    const dispatch = useDispatch()
    const onSettingClick = () => {
        dispatch(setIsSettingShow(true))
    }
    const onExitClick = () => {
        dispatch(logOut())
    }

    return (
        <header>
            <div className={style.header_wrapper}>
                <div className={style.container}>
                    <div className={style.first_header_section}>
                        <NavLink to="/" className={style.header_logo}>
                            <div className={style.icon_wrapper}>
                                <img src={icon} alt="open book"/>
                            </div>
                        </NavLink>
                        {props.isAuthentication &&
                        <div onClick={props.onBurgerClick}
                             className={classNames(style.header_burger, {
                                 [style.burger_active]: props.isShowBurgerMenu
                             })}>
                            <span className={style.child_1}></span>
                            <span className={style.child_2}></span>
                            <span className={style.child_3}></span>
                        </div>
                        }
                    </div>

                    <div className={style.second_header_section}>
                        <NavLink to="/" style={{textDecoration: 'none'}}>
                            <h1>???????????????? ????????????</h1>
                        </NavLink>
                    </div>

                    <div className={style.third_header_section}>
                        {props.isAuthentication &&
                        <div className={style.right_section}>
                            <div className={style.right_section_mame}>
                                {name}
                            </div>
                            <div className={style.icons_wrapper}>
                            <NavLink className={style.icon_wrapper} to="/orders_review">
                                <img className={style.right_section_icon} src={cart} alt="cart"/>
                            </NavLink>
                            <div className={style.icon_wrapper}>
                                <img onClick={onSettingClick} className={style.right_section_icon} src={setting}
                                     alt="setting"/>
                            </div>
                            <div className={style.icon_wrapper}>
                                <img onClick={onExitClick} className={style.right_section_icon} src={exit} alt="exit"/>
                            </div>
                            </div>
                        </div>
                        }
                        {isLogin &&
                        <NavLink to={LOGIN_ROUTE} className={style.header_button}>
                            ??????????
                        </NavLink>}
                        {isRegistration &&
                        <NavLink to={REGISTRATION_ROUTE} className={style.header_button}>
                            ??????????????????????
                        </NavLink>
                        }
                    </div>
                </div>
            </div>
        </header>
    )
}