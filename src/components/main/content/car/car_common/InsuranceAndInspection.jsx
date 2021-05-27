import style from "../car.module.css"
import {useState} from "react";
import {getCurrentDate} from "../../../../../common/getCurrentDate";
import {calculateDate} from "../../../../../common/calculateDate";

export const InsuranceAndInspection = (props) => {
    const [startDate, setStartDate] = useState(getCurrentDate())
    const [period, setPeriod] = useState("oneYear")
    const [error, setError] = useState(false)
    const [validUntil, setValidUntil] = useState(calculateDate(startDate, period))
    const onSelectPeriod = (e) => {
        setPeriod(e.target.value)
        setValidUntil(calculateDate(startDate, e.target.value))
    }
    const onChangeInsuranceDate = (e) => {
        setError(false)
        const [day,month,year] = e.target.value.split('.')
        if (day.length < 3 && month.length < 3 && year.length < 5 && day.length >0 && month.length > 0 && year.length > 0) {
            if (!isNaN(day) && !isNaN(month) && !isNaN(year)){
                setStartDate(e.target.value)
                setValidUntil(calculateDate(e.target.value, period))
            }
        }
    }
    const onAddClick = () => {
        const [day,month,year] = startDate.split('.')
        if(+day>0 && +day<32 && +month>0 && +month<12 && +year>1900 && +year<2024){
            props.addNew(validUntil, props.id, props.userId)
        } else {
            setError(true)
        }
    }
    return (
        <div className={style.car_section_wrapper}>
                <div className={style.car_add_newrecord}>
                    <div className={style.car_item_subheader}>{props.title} до: {props.dateIsValid}</div>
                    <div className={style.hr}></div>
                    <h4>Установить новую дату:</h4>
                    <label htmlFor="date">{props.startDateTitle}</label>
                    <input className = {error ? style.input_error : ""} onChange={onChangeInsuranceDate}  type="text" name="date"
                           value={startDate}/>
                    <label htmlFor="date">{props.untilDateTitle}</label>
                    <input className = {error ? style.input_error : ""} placeholder="действительна до" type="text" value={validUntil} readOnly/>
                    <label htmlFor="date">{props.periodTitle}</label>
                    <select style={{height: 40, padding: 5, marginTop:10}} onChange={onSelectPeriod} id="period" name="period" value={period}>
                        <option style={{height: 40}} value="sixMonths">6 месяцев</option>
                        <option style={{height: 40}} value="oneYear">1 год</option>
                    </select>
                    <button onClick={onAddClick}>Обновить данные</button>
                </div>
        </div>
    )
}