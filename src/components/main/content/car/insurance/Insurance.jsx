import style from "./insurance.module.css"
import {useState} from "react";
import {getCurrentDate} from "../../../../../common/getCurrentDate";
import {calculateDate} from "../../../../../common/calculateDate";

export const Insurance = () => {
    const [insuranceDate, setInsuranceDate] = useState(getCurrentDate())
    const [insuranceIsValid, setiIsuranceIsValid] = useState(calculateDate())
    const [period, setPeriod] = useState("oneYear")
    const onSelectPeriod = (e) => {
        setPeriod(e.target.value)
        setiIsuranceIsValid(calculateDate(insuranceDate,e.target.value))
    }
    return(
        <div className={style.insurance_wrapper}>
            <div className={style.insurance_info}>
                <div>
                    Застраховано:
                </div>
                <div>
                    Страховка действует до:
                </div>
            </div>
            <form>
                <h3>Установить новую дату</h3>
                <input placeholder="застрахована" type="text" value={insuranceDate}/>
                <input placeholder="действительна до" type="text" value={insuranceIsValid}/>
                Срок страхования:
                <select onChange={onSelectPeriod} id="period" name="period" value={period}>
                    <option value="sixMonths">6 месяцев</option>
                    <option value="oneYear">1 год</option>
                </select>
                <button>Обновить</button>
            </form>
        </div>
    )
}