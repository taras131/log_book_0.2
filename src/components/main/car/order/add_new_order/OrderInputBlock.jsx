import style from "../../car.module.css";
import {useState} from "react";
import {addNewNoticeRecord} from "../../../../../redux/notice/noticeReducer";

export const OrderInputBlock = (props) => {
    console.log(props.index)
    const [firstChange, setFirstChange] = useState(true)
    const [data, setData] = useState({
        userId: props.userId,
        carId: props.id,
        name: ``,
        catalogNumber: ``,
        count: '1'
    })
    const onDataChange = (event) => {
        if(firstChange){
            setFirstChange(false)
            props.setInputCount(props.inputCount+1)
        }
        setData({...data, [event.target.name]: event.target.value})
    }
    const onAddClick = () => {
        setData({
            userId: props.userId,
            carId: props.id,
            odometer: ``,
            date: ``,
            text: ''
        })
    }
    return(
        <div className={style.input_block}>
            <input style={{width: 15, marginTop: 0}} value={props.index} name="date"/>
            <input style={{width: 170, marginTop: 0}} value={data.name} placeholder="наименование"
                   name="name" onChange={onDataChange}/>
            <input style={{width: 170, marginTop: 0}} value={data.catalogNumber} placeholder="каталожный номер"
                   name="catalogNumber" onChange={onDataChange}/>
            <input style={{width: 30, marginTop: 0}} value={data.count} placeholder="к-во" name="count"
                   onChange={onDataChange}/>
        </div>
    )
}