import style from "./ordersReview.Module.css";
import {OrderItem} from "../car/order/OrderItem";

export const OrdersParts = (props) => {
    const partsOrders = props.partsOrdersList.map((item,index) => <OrderItem key={index} {...item}/>)
    return(
        <div className={style.orders_wrapper}>
            {partsOrders}
        </div>
    )
}