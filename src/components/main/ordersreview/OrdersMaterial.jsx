import style from "./ordersReview.Module.css";
import {AddNewOrder} from "../car/order/add_new_order/AddNewOrder";
import {OrderItem} from "../car/order/OrderItem";

export const OrdersMaterial = (props) => {
    const materialOrders = props.materialsOrdersList.map((item,index) => <OrderItem key={index} {...item}/>)
    return(
        <div className={style.orders_wrapper}>
            <AddNewOrder/>
            {materialOrders}
        </div>
    )
}