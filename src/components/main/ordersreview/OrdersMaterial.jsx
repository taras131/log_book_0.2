import style from "../car/car.Module.css";
import {AddNewOrder} from "../car/order/add_new_order/AddNewOrder";
import {OrderItem} from "../car/order/OrderItem";

export const OrdersMaterial = (props) => {
    const materialOrders = props.materialsOrdersList.map((item,index) => <OrderItem key={index} {...item}/>)
    return(
        <div className={style.car_section_wrapper}>
            <AddNewOrder userId = {props.userId} id={'material'} carId = {'material'} brand ={'material'} num = {'material'}/>
            {materialOrders}
        </div>
    )
}