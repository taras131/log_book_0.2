import {MaintenanceItem} from "./MaintenanceItem";
import style from "../../../pages/carPage/car.module.css"
import {AddMaintenanceRecord} from "./AddMaintenanceRecord";
import {InsuranceAndInspection} from "../car_common/InsuranceAndInspection";

export const MaintenanceRecord = (props) => {
    if (!props.maintenanceList) {
        return <div>
            Записей пока нет
        </div>
    }
    const maintenanceItem = props.maintenanceList.map(item => <MaintenanceItem key={item.id} {...item}/>)
    return (
        <div className={style.car_section_wrapper}>
            <AddMaintenanceRecord carId={props.carId} userId={props.userId} brand={props.brand}
                                  num={props.num}/>
            {maintenanceItem}
        </div>
    )
}