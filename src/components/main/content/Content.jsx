import style from "./content.module.css"
import {AddNewCar} from "./addNewCar/AddNewCar";
import {Car} from "./car/Car";
import {Route} from "react-router-dom"
import {HomePage} from "./homePage/HomePage";

export const Content = () => {
    return(
        <div className={style.content_wrapper}>
            <Route exact path="/" component={HomePage}/>
            <Route path="/car" component={Car}/>
            <Route path="/add_new_car" component={AddNewCar}/>
        </div>
    )
}