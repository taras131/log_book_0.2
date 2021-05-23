import { useSelector} from "react-redux";
import {
    getLastRecording,
    getMaintenanceRecordList
} from "../../../../../redux/technicalmaintenancerecords/technicalMaintenanceSelector";
import {getInsuranceDateValidById} from "../../../../../redux/Insurance/InsuranceSelector";

export const HomePageItem = (props) => {
    const maintenanceList = useSelector(state => getMaintenanceRecordList(state ,props.id))
    const dateInsuranceIsValid = useSelector(state => getInsuranceDateValidById(state, props.id))
    const lastRecording  = maintenanceList[maintenanceList.length-1]
    console.log(lastRecording)
    return (
        <tr>
            <td>{props.brand}</td>
            <td>{props.model}</td>
            <td>{props.num}</td>
            <td>{lastRecording
            ? lastRecording.odometer +" - "+lastRecording.datecommission
                : "нет данных"}</td>
            <td>нет данных</td>
            <td>нет данных</td>
            <td>{dateInsuranceIsValid}</td>
        </tr>
    )
}