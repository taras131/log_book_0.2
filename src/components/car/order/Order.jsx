import style from "../../../pages/carPage/car.module.css";
import {AddNewOrder} from "./add_new_order/AddNewOrder";
import {OrderItem} from "./OrderItem";

export const Order = (props) => {
    const carOrders = props.carOrdersList.map((item,index) => <OrderItem key={index} {...item}/>)
    return (
            <div className={style.car_section_wrapper}>
            <AddNewOrder {...props}/>
            {carOrders}
        </div>
    )
}