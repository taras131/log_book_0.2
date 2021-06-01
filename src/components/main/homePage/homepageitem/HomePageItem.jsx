import {useSelector} from "react-redux";
import style from "./homepageitem.module.css"
import {getLastMaintenanceRecording,} from "../../../../redux/technicalmaintenancerecords/technicalMaintenanceSelector";
import {getInsuranceDateValidById} from "../../../../redux/insurance/insuranceSelector";
import {getLastRepairsByCarId} from "../../../../redux/repairs/repairsSelector";
import {getInspectionDateValidById} from "../../../../redux/technicalinspection/technicalInspectionSelector";
import {checkDate} from "../../../../common/checkDate";
import classNames from "classnames";
import {NavLink} from "react-router-dom";
import {getCountNoticeByCarId} from "../../../../redux/notice/noticeSelector";

export const HomePageItem = (props) => {
    const lastMaintenanceRecording = useSelector(state => getLastMaintenanceRecording(state, props.id))
    const dateInsuranceIsValid = useSelector(state => getInsuranceDateValidById(state, props.id))
    const lastRepairRecording = useSelector(state => getLastRepairsByCarId(state, props.id))
    const dateTechnicalInspectionValid = useSelector(state => getInspectionDateValidById(state, props.id))
    const noticeCount = useSelector(state => getCountNoticeByCarId(state, props.id))
    let maintenanceStatus = null
    if (lastMaintenanceRecording) {
        maintenanceStatus = checkDate(lastMaintenanceRecording.datecommission, 365)
    }
    const insuranceStatus = checkDate(dateInsuranceIsValid)
    const technicalInspectionStatus = checkDate(dateTechnicalInspectionValid)
    const pathDescription = `car/${props.id}`
    const pathMaintenanceRecord = `/car/maintenancerecord/${props.id}`
    const pathInsurance = `/car/insurance/${props.id}`
    const pathTechnicalInspection = `/car/technicalinspection/${props.id}`
    const pathRepairs = `/car/repairs/${props.id}`
    const pathNotice = `/car/notice/${props.id}`
    return (
        <tr>
            <td align="center">
                <NavLink to={pathDescription} style={{textDecoration: 'none'}}>
                    {props.brand}
                </NavLink>
            </td>
            <td align="center">
                <NavLink to={pathDescription} style={{textDecoration: 'none'}}>
                    <div>
                        {props.num}
                    </div>
                </NavLink>
            </td>
            <td align="center">
                <NavLink to={pathMaintenanceRecord} className={classNames(style.just, {
                    [style.ok]: maintenanceStatus === "ok",
                    [style.warning]: maintenanceStatus === "warning",
                    [style.danger]: maintenanceStatus === "danger",
                })}>
                    {lastMaintenanceRecording
                        ? lastMaintenanceRecording.odometer + " - " + lastMaintenanceRecording.datecommission
                        : "нет данных"}
                </NavLink>
            </td>
            <td align="center">
                <NavLink to={pathRepairs} className={classNames(style.just, {
                    [style.ok]: maintenanceStatus === "ok",
                    [style.warning]: maintenanceStatus === "warning",
                    [style.danger]: maintenanceStatus === "danger",
                })}>
                    {lastRepairRecording.odometer
                        ? lastRepairRecording.odometer + " - " + lastRepairRecording.date
                        : "нет данных"}
                </NavLink>
            </td>
            <td align="center">
                <NavLink to={pathTechnicalInspection} className={classNames(style.just, {
                    [style.ok]: technicalInspectionStatus === "ok",
                    [style.warning]: technicalInspectionStatus === "warning",
                    [style.danger]: technicalInspectionStatus === "danger",
                })}>
                    {dateTechnicalInspectionValid
                        ? "до: " + dateTechnicalInspectionValid
                        : "нет данных"}
                </NavLink>
            </td>
            <td align="center">
                <NavLink to={pathInsurance} className={classNames(style.just, {
                    [style.ok]: insuranceStatus === "ok",
                    [style.warning]: insuranceStatus === "warning",
                    [style.danger]: insuranceStatus === "danger",
                })}>
                    {"до: " + dateInsuranceIsValid}
                </NavLink>
            </td>
            <td align="center">
                <NavLink to={pathNotice} style={{textDecoration: 'none'}}>
                    {noticeCount}
                </NavLink>
            </td>
        </tr>
    )
}