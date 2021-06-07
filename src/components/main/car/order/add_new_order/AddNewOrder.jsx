import style from "../../car.module.css";
import upIcon from "../../../../../icons/up-arrow.png";
import downIcon from "../../../../../icons/down-arrow.png";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {OrderInputBlock} from "./OrderInputBlock";
import {addOrder} from "../../../../../redux/order/orderReducer";
import {getInputList} from "../../../../../redux/order/orderSelector";

export const AddNewOrder = (props) => {
    const dispatch = useDispatch()
    const [edit, setEdit] = useState(false)
    const inputList = useSelector(state => getInputList(state))
    const inputs = inputList.map((item, index) => <OrderInputBlock key ={index} {...item} index={index}/>)
    const onEditClick = () => {
        setEdit(!edit)
    }
    const onAddClick = () => {
        dispatch(addOrder(props.userId, props.id, inputList))
    }
    return (
        <div className={style.car_add_new_record}>
            <div className={style.car_item_subheader}>
                <h3>Добавление новой заявки:</h3>
                <div className={style.car_icon_wrapper}>
                    {edit
                        ? <img onClick={onEditClick} src={upIcon} alt="save"/>
                        : <img onClick={onEditClick} src={downIcon} alt="back"/>}
                </div>
            </div>
            <div className={!edit ? style.car_add_hidden : style.add_form}>
                {inputs}
                <button onClick={onAddClick}>Добавить запись</button>
            </div>
        </div>
    )
}