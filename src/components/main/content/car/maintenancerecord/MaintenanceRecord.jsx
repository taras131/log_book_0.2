import {MaintenanceItem} from "./MaintenanceItem";
import style from "./maintenanceitemwrapper.module.css"
import {AddMaintenanceRecord} from "./AddMaintenanceRecord";
import {deleteMaintenanceRecord} from "../../../../../redux/technicalmaintenancerecords/technicalMaintenanceReducer";


export const MaintenanceRecord = (props) => {
    if (!props.maintenanceList) {
        return <div>
            Записей пока нет
        </div>
    }
    const onDeleteClick = (id) => {
        props.dispatch(deleteMaintenanceRecord(id))
    }
    const maintenanceItem = props.maintenanceList.map(item => <MaintenanceItem key={item.id} {...item}
                                                                               onDeleteClick={onDeleteClick}/>)
    return (
        <div className={style.maintenance_wrapper}>
            <AddMaintenanceRecord id={props.id}/>
            {maintenanceItem}
        </div>
    )
}