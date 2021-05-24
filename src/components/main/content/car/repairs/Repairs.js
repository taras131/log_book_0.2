import style from "../car.module.css";
import {AddRepairRecord} from "./AddReparsRecord";
import {RepairItem} from "./RepairItem";

export const Repairs = (props) => {
    console.log(props.repairsList)
    const repairs = props.repairsList.map(item => <RepairItem key={item.id} {...item}/> )
    return(
        <div className={style.car_section_wrapper}>
            <AddRepairRecord {...props}/>
            {repairs}
        </div>
    )
}