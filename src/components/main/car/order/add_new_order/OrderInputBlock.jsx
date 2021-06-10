import style from "../../car.Module.css";
import {useState} from "react";
import {inputBlockChangeName, setNewInputBlock} from "../../../../../redux/order/orderReducer";
import {useDispatch} from "react-redux";

export const OrderInputBlock = (props) => {
    const [firstChange, setFirstChange] = useState(true)
    const dispatch = useDispatch()
    const onInputChange = (e) => {
        if (firstChange && e.target.name === "partName") {
            dispatch(setNewInputBlock())
            setFirstChange(false)
        }
        dispatch(inputBlockChangeName(e.target.name, e.target.value, props.index))
    }
    return (
        <div className={style.input_block}>
            <input style={{maxWidth: 15, marginTop: 0, textAlign:"center"}} value={props.index + 1} readOnly name="itemNumber"/>
            <input style={{maxWidth: 270, marginTop: 0}} value={props.partName} placeholder="наименование"
                   name="partName" onChange={onInputChange}/>
            <input style={{maxWidth: 270, marginTop: 0}} value={props.catalogNumber} placeholder="каталожный номер"
                   name="catalogNumber" onChange={onInputChange}/>
            <input style={{maxWidth: 30, marginTop: 0, textAlign:"center" }} value={props.partCount} placeholder="к-во" name="partCount"
                   onChange={onInputChange}/>
        </div>
    )
}