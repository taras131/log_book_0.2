import style from "./main.module.css"
import {Content} from "./content/Content";
import {Navigation} from "./navigation/Navigation";

export const Main = () => {
    return(
        <div className={style.main_wrapper}>
            <Navigation/>
            <Content/>
        </div>
    )
}