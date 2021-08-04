import {OrderItem} from "../../car/order/OrderItem";
import style from "../../../pages/carPage/car.module.css"
export const AllOrders =(props)=>{
    const carOrders = props.carsOrdersList.map((item,index) => <OrderItem  key={index} {...item}/>)
    return(
        <div className={style.car_section_wrapper}>
            {carOrders}
        </div>
    )
}