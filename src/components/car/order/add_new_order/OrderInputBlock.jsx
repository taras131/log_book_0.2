import style from "../../../../pages/carPage/car.module.css";
import {useState} from "react";
import {inputBlockChange, setNewInputBlock} from "../../../../redux/order/orderReducer";
import {useDispatch} from "react-redux";
import plus from "../../../../icons/plus.png"
import minus from "../../../../icons/minus.png"

export const OrderInputBlock = (props) => {
    const [firstChange, setFirstChange] = useState(true)
    const dispatch = useDispatch()
    const onInputChange = (e) => {
        if (firstChange && e.target.name === "partName") {
            dispatch(setNewInputBlock())
            setFirstChange(false)
        }
        dispatch(inputBlockChange(e.target.name, e.target.value, props.index))
    }
    const onPlusClick = () => {
        dispatch(inputBlockChange("partCount", +props.partCount + 1, props.index))
    }
    const onMinusClick = () => {
        if (props.partCount > 1) {
            dispatch(inputBlockChange("partCount", +props.partCount - 1, props.index))
        }
    }
    return (
        <div className={style.input_block}>
            {props.index + 1}
            <div className={style.name_number_input_section}>
                <input value={props.partName} placeholder="наименование"
                       name="partName" onChange={onInputChange}/>
                <input value={props.catalogNumber}
                       placeholder="каталожный номер"
                       name="catalogNumber" onChange={onInputChange}/>
            </div>
            <div className={style.count_input_section}>
                <img className={style.input_minus} onClick={onMinusClick}
                     src={minus} alt="minus"/>
                <input style={{width: 25,height: 15, margin: 2, textAlign: "center", marginLeft: 5, marginRight: 5}}
                       value={props.partCount}
                       placeholder="к-во" name="partCount"
                       onChange={onInputChange}/>
                <img className={style.input_plus} onClick={onPlusClick} src={plus} alt="plus"/>
            </div>

        </div>
    )
}