import style from "../../car.module.css";
import upIcon from "../../../../../icons/up-arrow.png";
import downIcon from "../../../../../icons/down-arrow.png";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {OrderInputBlock} from "./OrderInputBlock";
import {addOrder} from "../../../../../redux/order/orderReducer";
import {getInputList} from "../../../../../redux/order/orderSelector";
import {getCurrentDate} from "../../../../../common/getCurrentDate";

export const AddNewOrder = (props) => {
    const dispatch = useDispatch()
    const [edit, setEdit] = useState(false)
    const [typeOrder, setTypeOrder] = useState("Плановый ремонт")
    const inputList = useSelector(state => getInputList(state))
    const inputs = inputList.map((item, index) => <OrderInputBlock key ={index} {...item} index={index}/>)
    const onEditClick = () => {
        setEdit(!edit)
    }
    const onAddClick = () => {
        dispatch(addOrder(props.userId, props.id, inputList.filter(item=> item.partName), typeOrder, "не отправлено", getCurrentDate()))
    }
    const onSelectCategory = (e) => {
        setTypeOrder(e.target.value)
    }
    return (
        <div className={style.car_add_new_record}>
            <div className={style.car_description_section}>
                <div className={style.car_description_item}>
                    <div className={style.subtitle}>Марка:</div>
                    <div className={style.car_item_data}>
                        {props.brand}
                    </div>
                </div>
                <div className={style.car_description_item}>
                    <div className={style.subtitle}>Номер:</div>
                    <div className={style.car_item_data}>
                        {props.num}
                    </div>
                </div>
            </div>
            <div className={style.car_item_subheader}>
                <h3 style={{marginTop: 10}}>Добавление новой заявки:</h3>
                <div className={style.car_icon_wrapper}>
                    {edit
                        ? <img onClick={onEditClick} src={upIcon} alt="save"/>
                        : <img onClick={onEditClick} src={downIcon} alt="back"/>}
                </div>
            </div>
            <div className={!edit ? style.car_add_hidden : style.add_form}>
                <div className={style.type_order}>
                    <div>Срочность выполнения:</div>
                    <select style={{height: 40, padding: 5, marginTop:5}} onChange={onSelectCategory} name="period" value={typeOrder}>
                        <option style={{height: 40}} value="Плановый ремонт">Плановый ремонт</option>
                        <option style={{height: 40}} value="Срочный ремонт">Срочный ремонт</option>
                    </select>
                </div>
                {inputs}
                <button onClick={onAddClick}>Добавить запись</button>
                <h6>После сохранения заявку можно будет отправить по указанным в настройках email</h6>
            </div>
        </div>
    )
}