import style from "./navigation.module.css"
import {NavigationButtons} from "./NavigationButtons";

export const Navigation = (props) => {
    return(
        <div className={style.navigation_wrapper}>
           <NavigationButtons isAuthentication={props.isAuthentication}/>
        </div>
    )
}