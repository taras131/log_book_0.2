import style from "../../../../pages/carPage/car.module.css";
import upIcon from "../../../../icons/up-arrow.png";
import downIcon from "../../../../icons/down-arrow.png";
import backIcon from "../../../../icons/back.png";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {OrderInputBlock} from "./OrderInputBlock";
import {addOrder, resetInputList, setNewInputBlock, updateOrder} from "../../../../redux/order/orderReducer";
import {getInputList} from "../../../../redux/order/orderSelector";
import {getCurrentDate} from "../../../../common/getCurrentDate";
import {ItemTitle} from "../../car_common/ItemTitle";

export const AddNewOrder = ({userId, carId, brand, num, id, orderId, orderEdit, setEdit}) => {
    const dispatch = useDispatch()
    const [editAdd, setEditAdd] = useState(false)
    useEffect(() => {
        if (orderEdit) {
            setEditAdd(true)
            dispatch(setNewInputBlock())
        }
    }, [orderEdit])
    const [typeOrder, setTypeOrder] = useState("Плановый ремонт")
    const inputList = useSelector(state => getInputList(state))
    const inputs = inputList.map((item, index) => <OrderInputBlock key={index} {...item} index={index}/>)
    const onEditClick = () => {
        setEditAdd(!editAdd)
    }
    const onAddClick = () => {
        if (orderEdit) {
            dispatch(updateOrder(orderId, userId, carId, inputList.filter(item => item.partName), typeOrder,
                "не отправлено", getCurrentDate()))
            setEdit(false)
        } else {
            dispatch(addOrder(userId, id, inputList.filter(item => item.partName), typeOrder, "не отправлено",
                getCurrentDate()))

        }
    }
    const onSelectCategory = (e) => {
        setTypeOrder(e.target.value)
    }
    const onBackClick = () => {
        dispatch(resetInputList())
        setEdit(false)
    }
    return (
        <div className={style.car_add_new_record}>
            {!orderEdit &&
            <>
                <ItemTitle brand={brand} num={num}/>
                <div className={style.new_record_header}>
                    <h4>Добавление новой заявки:</h4>
                    <div className={style.car_icon_wrapper}>
                        {editAdd
                            ? <img onClick={onEditClick} src={upIcon} alt="save"/>
                            : <img onClick={onEditClick} src={downIcon} alt="back"/>}
                    </div>
                </div>
            </>
            }
            <div className={!editAdd ? style.car_add_hidden : style.add_form}>
                <div className={style.edit_order_subheader}>
                    <div className={style.type_order}>
                        <div>Срочность выполнения:</div>
                        <select style={{height: 40, padding: 5, marginTop: 5}} onChange={onSelectCategory} name="period"
                                value={typeOrder}>
                            <option style={{height: 40}} value="Плановый ремонт">Плановый ремонт</option>
                            <option style={{height: 40}} value="Срочный ремонт">Срочный ремонт</option>
                        </select>
                    </div>
                    {orderEdit &&
                    <img src={backIcon} alt="backIcon" onClick={onBackClick}/>
                    }
                </div>
                {inputs}
                <button onClick={onAddClick}>Сохранить запись</button>
                <h6>Поля с неуказанным наименованием не будут учтены при сохранении <br/>
                   После сохранения заявку можно будет отправить по указанным в настройках email</h6>
            </div>
        </div>
    )
}