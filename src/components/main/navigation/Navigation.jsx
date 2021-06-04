import style from "./navigation.module.css"
import {NavigationButtons} from "./NavigationButtons";

export const Navigation = (props) => {
    if(!props.isAuthentication){
        return <div></div>
    }
    return(
        <div className={style.navigation_wrapper}>
           <NavigationButtons isAuthentication={props.isAuthentication}/>
        </div>
    )
}