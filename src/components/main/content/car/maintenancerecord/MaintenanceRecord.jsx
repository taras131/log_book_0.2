import {MaintenanceItem} from "./MaintenanceItem";
import style from "./maintenanceitemwrapper.module.css"
import {AddMaintenanceRecord} from "./AddMaintenanceRecord";


export const MaintenanceRecord = (props) => {
    console.log(props.maintenanceList)
    if(!props.maintenanceList){
        return <div>
            Записей пока нет
        </div>
    }
    const maintenanceItem = props.maintenanceList.map(item => <MaintenanceItem key={item.id} {...item}/>)
    return (
        <div className={style.maintenance_wrapper}>
            MaintenanceRecord
            {maintenanceItem}
            <AddMaintenanceRecord id = {props.id}/>
        </div>
    )
}