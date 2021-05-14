import style from "./content.module.css"
import {AddNewCar} from "./addNewCar/AddNewCar";
import {Car} from "./car/Car";
import {Route} from "react-router-dom"
import {HomePage} from "./homePage/HomePage";
import {Redirect, Switch} from "react-router";
import {Registration} from "../authentication/Registration";

export const Content = (props) => {

    return (
        <div className={style.content_wrapper}>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/car" component={Car}/>
                <Route exact path="/add_new_car" component={AddNewCar}/>
            </Switch>
        </div>
    )
}