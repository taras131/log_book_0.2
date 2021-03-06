import style from "../../../pages/carPage/car.module.css";
import {OrderItem} from "../../car/order/OrderItem";
import {AddNewOrder} from "../../car/order/add_new_order/AddNewOrder";

export const OrdersParts = (props) => {
    const partsOrders = props.partsOrdersList.map((item,index) => <OrderItem key={index} {...item}/>)
    return(
        <div className={style.car_section_wrapper}>
            <AddNewOrder userId = {props.userId} id={'part'} carId = {'part'} brand ={'part'} num = {'part'}/>
            {partsOrders}
        </div>
    )
}
