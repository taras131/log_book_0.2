import saveIcon from "../../../icons/save.png";
import deleteIcon from "../../../icons/delete.png";
import backIcon from "../../../icons/back.png";
import editIcon from "../../../icons/edit.png";
import style from "../../../pages/carPage/car.module.css"

export const CarItemSubheader = ({title,onSaveClick,onDeleteRecordClick,data,onDataChange,edit,onEditClick  }) =>{
    return(
            <div className={style.car_item_subheader}>
                {!title &&
                <div className={style.car_icon_wrapper}>
                    {edit
                        ? <img onClick={onSaveClick} src={saveIcon} alt="save"/>
                        : <img onClick={onDeleteRecordClick} src={deleteIcon} alt="back"/>}
                </div>}
                {edit
                    ? <div className={style.date_odometer_wrapper}>
                        <input className={style.subheader_input_date} value={data.date} placeholder="Дата" name="date"
                               onChange={onDataChange}/>
                        <input className={style.subheader_input_odometer} value={data.odometer} placeholder="Пробег"
                               name="odometer" onChange={onDataChange}/>
                    </div>
                    : <div className={style.date_odometer_wrapper} >
                        <div>Дата: {data.date}</div>
                        <div className={style.date_odometer}>Пробег: {data.odometer}</div>
                    </div>}
                {!title &&
                <div className={style.car_icon_wrapper}>
                    {edit
                        ? <img onClick={onEditClick} src={backIcon} alt="edit"/>
                        : <img onClick={onEditClick} src={editIcon} alt="back"/>}
                </div>}
            </div>
    )
}