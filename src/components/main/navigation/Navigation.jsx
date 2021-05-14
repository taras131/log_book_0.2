import style from "./navigation.module.css"
import {NavigationButtons} from "./navigationButtons/NavigationButtons";

export const Navigation = (props) => {
    return(
        <div className={style.navigation_wrapper}>
            {props.isAuthentication && <NavigationButtons/>}
        </div>
    )
}