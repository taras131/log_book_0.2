import classNames from "classnames";
import style from "./preloader.module.css";
import {useSelector} from "react-redux";
import {getIsLoading} from "../../redux/preloader/preloaderSelector";
import gear from "../../icons/Gear.gif"
import {useEffect} from "react";

export const Preloader = (props) => {
    const isShow = useSelector(state => getIsLoading(state))
    useEffect(() => {
        const body = document.querySelector('body');
        body.style.overflow = isShow ? 'hidden' : 'auto';
    }, [isShow])
    return (
        <div className={classNames(style.preloader_window_wrapper, {
            [style.preloader_window_hidden]: !isShow
        })}>
            <div className={style.preloader_img_wrapper}>
            <img src={gear} alt="gear"/>
            </div>
        </div>
    )
}