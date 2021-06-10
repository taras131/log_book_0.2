import style from "../car.Module.css";
import {AddRepairRecord} from "./AddReparsRecord";
import {RepairItem} from "./RepairItem";

export const Repairs = (props) => {
    const repairs = props.repairsList.map(item => <RepairItem key={item.id} {...item}/> )
    return(
        <div className={style.car_section_wrapper}>
            <AddRepairRecord {...props}/>
            {repairs}
        </div>
    )
}