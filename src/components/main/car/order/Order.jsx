import style from "../car.module.css";
import {AddNewOrder} from "./add_new_order/AddNewOrder";

export const Order = (props) =>{
    return(
        <div className={style.car_section_wrapper}>
            <AddNewOrder {...props}/>
            order
        </div>
    )
}