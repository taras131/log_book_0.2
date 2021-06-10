import style from "../car.Module.css";
import saveIcon from "../../../../icons/save.png";
import deleteIcon from "../../../../icons/delete.png";
import backIcon from "../../../../icons/back.png";
import editIcon from "../../../../icons/edit.png";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {setAnswer} from "../../../../redux/answerwindow/answerWindowReducer";
import {deleteOrder, resetInputList, sendOrder, setInputList} from "../../../../redux/order/orderReducer";
import {OrderItemBlock} from "./OrderItemBlock";
import {getEmailList} from "../../../../redux/setting/settingSelector";
import {getCurrentDate} from "../../../../common/getCurrentDate";
import {getCarById} from "../../../../redux/cars/carsSelector";
import {AddNewOrder} from "./add_new_order/AddNewOrder";
import {OrderTitle} from "../../ordersreview/OrderTitle";

export const OrderItem = (props) => {
    const emailList = useSelector(state => getEmailList(state))
    const title = `Заявка от ${getCurrentDate()} статус: ${props.typeOrder}`
    const car = useSelector(state => getCarById(state, props.carId))
    const dispatch = useDispatch()
    const orderItemBlocks = props.arr_data.map((item, index) => <OrderItemBlock key={index} {...item} index={index}/>)
    const [edit, setEdit] = useState(false)
    const onEditClick = () => {
       dispatch(setInputList(props.arr_data))
        setEdit(!edit)
    }
    const onDeleteRecordClick = () => {
        const delRecord = deleteOrder(props.id, props.userId)
        dispatch(setAnswer("удалить заявку", delRecord))
    }
    const onSendClick = () => {
        dispatch(sendOrder(emailList[0], emailList[1], emailList[2], title, car.brand, car.model, car.yearManufacture,
            car.num, car.vin, props.arr_data,{...props}))
    }

    if(edit){
        return <AddNewOrder orderEdit = {true} orderId = {props.id} userId = {props.userId}
                            setEdit = {setEdit} carId ={props.carId}/>
    } else {
        return (
            <div className={style.car_item_wrapper}>
                {props.title && <h3>{props.title}</h3>}
                <div className={style.car_item_subheader}>
                    {!props.title &&
                    <div className={style.car_icon_wrapper}>
                        {edit
                            ? <img src={saveIcon} alt="save"/>
                            : <img onClick={onDeleteRecordClick} src={deleteIcon} alt="back"/>}
                    </div>}
                    <div className={style.date_odometer_wrapper}>
                        <div style={{color: "black"}}>Дата: {props.date}</div>
                        <div style={{marginLeft: 45, color: "black"}}>Срочность: {props.typeOrder}</div>
                    </div>
                    {!props.title &&
                    <div className={style.car_icon_wrapper}>
                        {!edit &&
                             <img onClick={onEditClick} src={editIcon} alt="back"/>}
                    </div>}
                </div>
                <div className={style.hr}></div>
                    <table className={style.tab_wrapper}>
                        <tbody>
                        <tr>
                            <td style={{color: "black"}} align="center">Пункт</td>
                            <td style={{color: "black"}} align="center">Наименование</td>
                            <td style={{color: "black"}} align="center">Кат номер</td>
                            <td style={{color: "black"}} align="center">Кол-во</td>
                        </tr>
                        {orderItemBlocks}
                        </tbody>
                    </table>

                    <div className={style.date_odometer_wrapper}>
                        <div style={{color: "black"}}>Статус: {props.statusOrder}</div>
                        {props.statusOrder === "не отправлено" &&
                        <button style ={{marginLeft: 45}} onClick={onSendClick}>Отправить</button>}
                    </div>


            </div>
    )}
}