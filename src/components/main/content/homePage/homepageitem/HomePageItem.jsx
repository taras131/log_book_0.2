import {useSelector} from "react-redux";
import {
    getLastMaintenanceRecording,
    getLastRecording,
    getMaintenanceRecordList
} from "../../../../../redux/technicalmaintenancerecords/technicalMaintenanceSelector";
import {getInsuranceDateValidById} from "../../../../../redux/Insurance/InsuranceSelector";
import {getLastRepairsByCarId} from "../../../../../redux/repairs/repairsSelector";

export const HomePageItem = (props) => {
    const lastMaintenanceRecording = useSelector(state => getLastMaintenanceRecording(state, props.id))
    const dateInsuranceIsValid = useSelector(state => getInsuranceDateValidById(state, props.id))
    const lastRepairRecording = useSelector(state =>  getLastRepairsByCarId(state, props.id))

    return (
        <tr>
            <td>{props.brand}</td>
            <td>{props.model}</td>
            <td>{props.num}</td>
            <td>{lastMaintenanceRecording
                ? lastMaintenanceRecording.odometer + " - " + lastMaintenanceRecording.datecommission
                : "нет данных"}</td>
            <td>{lastRepairRecording
                ? lastRepairRecording.odometer + " - " + lastRepairRecording.date
                : "нет данных"}</td>
            <td>нет данных</td>
            <td>{dateInsuranceIsValid}</td>
        </tr>
    )
}