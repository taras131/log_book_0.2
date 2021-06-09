import style from "./ordersReview.Module.css"
import {useSelector} from "react-redux";
import {getAllOrders, getMaterialsOrders, getPartsOrders, getToolsOrders} from "../../../redux/order/orderSelector";
import {OrderNavigation} from "./ordernavigation/OrderNavigation";
import {Route} from "react-router";
import {AllOrders} from "./AllOrders";
import {OrdersParts} from "./OrdersParts";
import {OrdersTools} from "./OrdersTools";
import {OrdersMaterial} from "./OrdersMaterial";

const OrdersReview = (props) => {
    const carsOrdersList = useSelector(state=>getAllOrders(state))
    const partsOrdersList = useSelector(state => getPartsOrders(state))
    const toolsOrdersList = useSelector(state => getToolsOrders(state))
    const materialsOrdersList = useSelector(state => getMaterialsOrders(state))
    const patchAll = "/orders_review"
    const patchParts = "/orders_review/orders_parts"
    const patchTools = "/orders_review/orders_tools"
    const patchExpendableMaterial = "/orders_review/expendable_material"
    return(
        <div className={style.order_review_wrapper}>
            <Route exact path = {patchAll} render={() => <AllOrders carsOrdersList = {carsOrdersList} />}/>
            <Route exact path = {patchParts} render={() => <OrdersParts partsOrdersList ={partsOrdersList} />}/>
            <Route exact path = {patchTools} render={() => <OrdersTools toolsOrdersList ={toolsOrdersList} />}/>
            <Route exact path = {patchExpendableMaterial} render={() => <OrdersMaterial materialsOrdersList ={materialsOrdersList} />}/>
            <OrderNavigation patchAll ={patchAll} patchParts={patchParts} patchTools={patchTools}
                             patchExpendableMaterial ={patchExpendableMaterial}/>
        </div>
    )
}

export default OrdersReview