import style from "../maintenancerecord/maintenanceitemwrapper.module.css";
import {AddRepairRecord} from "./AddReparsRecord";

export const Repairs = (props) => {
    return(
        <div className={style.maintenance_wrapper}>
            <AddRepairRecord {...props}/>
        </div>
    )
}