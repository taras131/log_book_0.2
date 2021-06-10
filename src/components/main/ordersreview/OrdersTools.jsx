import style from "./ordersReview.Module.css";
import {AddNewOrder} from "../car/order/add_new_order/AddNewOrder";
import {OrderItem} from "../car/order/OrderItem";

export const OrdersTools = (props) => {
    const toolsOrders = props.toolsOrdersList.map((item,index) => <OrderItem key={index} {...item}/>)
    return(
        <div className={style.orders_wrapper}>
            <AddNewOrder userId = {props.userId} id={'tool'} carId = {'tool'} brand ={'tool'} num = {'tool'}/>
            {toolsOrders}
        </div>
    )
}