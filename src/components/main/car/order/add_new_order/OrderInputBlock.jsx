import style from "../../car.module.css";
import {useState} from "react";
import {useSelector} from "react-redux";
import {getPartListItemByItemNumber} from "../../../../../redux/order/orderSelector";
import {onPartListChange} from "../../../../../redux/order/orderReducer";

export const OrderInputBlock = (props) => {
    console.log(props.index)
    const [firstChange, setFirstChange] = useState(true)
    const [data, setData] = useState({
        namePart: ``,
        catalogNumber: ``,
        countPart: '1'
    })
    const onDataChange = (event) => {
        if(firstChange){
            setFirstChange(false)
            props.setInputCount(props.inputCount+1)
        }
        setData({...data, [event.target.name]: event.target.value})
        onPartListChange(props.index, event.target.name, event.target.value)
    }
    const partListItem = useSelector(state=>getPartListItemByItemNumber(state, props.index))
    console.log(partListItem)
    return(
        <div className={style.input_block}>
            <input style={{width: 15, marginTop: 0}} value={partListItem.itemNumber} name="itemNumber"/>
            <input style={{width: 170, marginTop: 0}} value={partListItem.partName} placeholder="наименование"
                   name="partName" onChange={onDataChange}/>
            <input style={{width: 170, marginTop: 0}} value={partListItem.catalogNumber} placeholder="каталожный номер"
                   name="catalogNumber" onChange={onDataChange}/>
            <input style={{width: 30, marginTop: 0}} value={partListItem.partCount} placeholder="к-во" name="partCount"
                   onChange={onDataChange}/>
        </div>
    )
}