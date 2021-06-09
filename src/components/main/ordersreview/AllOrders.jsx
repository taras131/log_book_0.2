import {OrderItem} from "../car/order/OrderItem";
import style from "./ordersReview.Module.css"
export const AllOrders =(props)=>{
    const carOrders = props.carsOrdersList.map((item,index) => <OrderItem key={index} {...item}/>)
    return(
        <div className={style.orders_wrapper}>
            {carOrders}
        </div>
    )
}