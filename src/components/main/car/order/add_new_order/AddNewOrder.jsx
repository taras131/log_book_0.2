import style from "../../car.module.css";
import upIcon from "../../../../../icons/up-arrow.png";
import downIcon from "../../../../../icons/down-arrow.png";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {getCurrentDate} from "../../../../../common/getCurrentDate";
import {addNewNoticeRecord} from "../../../../../redux/notice/noticeReducer";
import {OrderInputBlock} from "./OrderInputBlock";

export const AddNewOrder = (props) => {
    const dispatch = useDispatch()
    const [edit, setEdit] = useState(false)
    const [inputCount, setInputCount] = useState(1)
    console.log(inputCount)
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

                <button>Добавить запись</button>
            </div>
        </div>
    )
}