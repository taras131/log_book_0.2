import style from "./main.module.css"
import {Navigation} from "./navigation/Navigation";
import {Content} from "./content/Content";
import {Redirect} from "react-router";

export const Main = (props) => {
    if (!props.isAuthentication) return <Redirect to = "/login"/>
    return (
        <div className={style.main_wrapper}>
            <Navigation isAuthentication = {props.isAuthentication}/>
            <Content isAuthentication = {props.isAuthentication}/>
        </div>
    )
}

