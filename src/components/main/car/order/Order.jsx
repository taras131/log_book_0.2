import style from "../car.module.css";
import {AddNewOrder} from "./add_new_order/AddNewOrder";
import {OrderItem} from "./OrderItem";

export const Order = (props) => {
    const carOrders = props.carOrdersList.map(item => <OrderItem key={item.id} {...item}/>)
    return (
            <div className={style.car_section_wrapper}>
            <AddNewOrder {...props}/>
            {carOrders}
        </div>
    )
}