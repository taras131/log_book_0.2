import style from "../car.module.css";
import {AddNewOrder} from "./add_new_order/AddNewOrder";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getOrders} from "../../../../redux/order/orderReducer";

export const Order = (props) =>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getOrders(props.userId))
    },[])
    return(
        <div className={style.car_section_wrapper}>
            <AddNewOrder {...props}/>
            order
        </div>
    )
}