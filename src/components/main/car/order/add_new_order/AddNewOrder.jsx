import style from "../../car.module.css";
import upIcon from "../../../../../icons/up-arrow.png";
import downIcon from "../../../../../icons/down-arrow.png";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {OrderInputBlock} from "./OrderInputBlock";
import {addOrder} from "../../../../../redux/order/orderReducer";

export const AddNewOrder = (props) => {
    const dispatch = useDispatch()
    const [edit, setEdit] = useState(false)
    const [inputCount, setInputCount] = useState(1)
    console.log(props)
    const inputList = [...Array(inputCount)].map((item, index) => <OrderInputBlock {...props}
                                                                                   key={index}
                                                                                   setInputCount={setInputCount}
                                                                                   index={index+1}
                                                                                   inputCount={inputCount}/>)
    //   useEffect(() => {
    //       setData({...data, date: getCurrentDate()})
    //  }, [props.id])
    const onEditClick = () => {
        setEdit(!edit)
    }
    const onAddClick = () => {
        dispatch(addOrder(props.userId, props.id))
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

                {inputList}

                <button onClick={onAddClick}>Добавить запись</button>
            </div>
        </div>
    )
}