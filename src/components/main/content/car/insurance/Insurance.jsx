import style from "../car.module.css"
import {useState} from "react";
import {getCurrentDate} from "../../../../../common/getCurrentDate";
import {calculateDate} from "../../../../../common/calculateDate";
import {useDispatch, useSelector} from "react-redux";
import {addNewInsurance} from "../../../../../redux/Insurance/InsuranceReducer";
import {getInsuranceDateValidById} from "../../../../../redux/Insurance/InsuranceSelector";

export const Insurance = (props) => {
    const dispatch = useDispatch()
    const [insuranceDate, setInsuranceDate] = useState(getCurrentDate())
    const [period, setPeriod] = useState("oneYear")
    const [error, setError] = useState(false)
    const [insuranceIsValid, setiIsuranceIsValid] = useState(calculateDate(insuranceDate, period))
    const dateInsuranceIsValid = useSelector(state => getInsuranceDateValidById(state, props.id))
    const onSelectPeriod = (e) => {
        setPeriod(e.target.value)
        setiIsuranceIsValid(calculateDate(insuranceDate, e.target.value))
    }
    const onChangeInsuranceDate = (e) => {
        setError(false)
        const [day,month,year] = e.target.value.split('.')
        if (day.length < 3 && month.length < 3 && year.length < 5 && day.length >0 && month.length > 0 && year.length > 0) {
            if (!isNaN(day) && !isNaN(month) && !isNaN(year)){
                setInsuranceDate(e.target.value)
                setiIsuranceIsValid(calculateDate(e.target.value, period))
            }
        }
    }
    const onAddClick = () => {
        const [day,month,year] = insuranceDate.split('.')
        if(+day>0 && +day<32 && +month>0 && +month<12 && +year>1900 && +year<2022){
            dispatch(addNewInsurance(insuranceIsValid, props.id, props.userId))
        } else {
            setError(true)
        }
    }
    return (
        <div className={style.car_item_wrapper}>
            <div className={style.insurance_info}>
                <div>
                    Страховка действует до: {dateInsuranceIsValid}
                </div>
            </div>
            <div>
                <form>
                    <h3>Установить новую дату:</h3>
                    <label htmlFor="date">Застрахована:</label>
                    <input className = {error ? style.input_error : ""} onChange={onChangeInsuranceDate}  type="text" name="date"
                           value={insuranceDate}/>
                    <label htmlFor="date">Действительна до:</label>
                    <input className = {error ? style.input_error : ""} placeholder="действительна до" type="text" value={insuranceIsValid} readOnly/>
                    <label htmlFor="date">Срок страхования:</label>
                    <select onChange={onSelectPeriod} id="period" name="period" value={period}>
                        <option value="sixMonths">6 месяцев</option>
                        <option value="oneYear">1 год</option>
                    </select>
                    <div className={style.add_button} onClick={onAddClick}>Обновить данные</div>
                </form>
            </div>
        </div>
    )
}