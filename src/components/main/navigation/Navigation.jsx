import style from "./navigation.module.css"
import {NavigationButtons} from "./navigationButtons/NavigationButtons";

export const Navigation = () => {
    return(
        <div className={style.navigation_wrapper}>
            <NavigationButtons/>
        </div>
    )
}