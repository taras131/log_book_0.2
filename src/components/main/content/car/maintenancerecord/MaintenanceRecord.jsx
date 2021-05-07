import {getMaintenanceRecordListById} from "../../../../../redux/maintenancerecordSelector";
import {MaintenanceItem} from "./MaintenanceItem";
import {useSelector} from "react-redux";
import style from "./maintenanceitemwrapper.module.css"
import {AddMaintenanceRecord} from "./AddMaintenanceRecord";

export const MaintenanceRecord = (props) => {
    const maintenanceList = useSelector(state => getMaintenanceRecordListById(state, props.id))
    if (maintenanceList.length === 0) {
        return (
            <div>
                Записей пока нет
            </div>
        )
    }
    const maintenanceItem = maintenanceList.map(item => <MaintenanceItem {...item}/>)
    return (
        <div className={style.maintenance_wrapper}>
            MaintenanceRecord
            {maintenanceItem}
            <AddMaintenanceRecord {...props}/>
        </div>
    )
}