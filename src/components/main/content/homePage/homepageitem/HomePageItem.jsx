import { useSelector} from "react-redux";
import {
    getLastRecording,
    getMaintenanceRecordList
} from "../../../../../redux/technicalmaintenancerecords/technicalMaintenanceSelector";

export const HomePageItem = (props) => {
    const maintenanceList = useSelector(state => getMaintenanceRecordList(state ,props.id))
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
            <td>нет данных</td>
        </tr>
    )
}