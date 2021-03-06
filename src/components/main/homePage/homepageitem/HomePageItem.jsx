import {useSelector} from "react-redux";
import style from "../../../../pages/homePage/homepage.Module.css"
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
            <td aria-label="Марка:" align="center">
                <NavLink to={pathDescription} style={{textDecoration: 'none'}}>
                    {props.brand}
                </NavLink>
            </td>
            <td aria-label="Номер:" align="center">
                <NavLink to={pathDescription} style={{textDecoration: 'none'}}>
                    <div>
                        {props.num}
                    </div>
                </NavLink>
            </td>
            <td aria-label="Последнее ТО:" align="center" className={classNames(style.just, {
                [style.ok]: maintenanceStatus === "ok",
                [style.warning]: maintenanceStatus === "warning",
                [style.danger]: maintenanceStatus === "danger",
            })}>
                <NavLink to={pathMaintenanceRecord} className={style.just}>
                    {lastMaintenanceRecording
                        ? lastMaintenanceRecording.odometer + " - " + lastMaintenanceRecording.datecommission
                        : "нет данных"}
                </NavLink>
            </td>
            <td aria-label="Последний ремонт:" align="center" className={style.repair}>
                <NavLink to={pathRepairs} className={classNames(style.just)}>
                    {lastRepairRecording.odometer
                        ? lastRepairRecording.odometer + " - " + lastRepairRecording.date
                        : "нет данных"}
                </NavLink>
            </td>
            <td aria-label="Техосмотр до:" align="center" className={classNames(style.just, {
                [style.ok]: technicalInspectionStatus === "ok",
                [style.warning]: technicalInspectionStatus === "warning",
                [style.danger]: technicalInspectionStatus === "danger",
            })}>
                <NavLink to={pathTechnicalInspection} className={style.just}>
                    {dateTechnicalInspectionValid
                        ? dateTechnicalInspectionValid
                        : "нет данных"}
                </NavLink>
            </td>
            <td aria-label="Страховка до:" align="center" className={classNames(style.just, {
                [style.ok]: insuranceStatus === "ok",
                [style.warning]: insuranceStatus === "warning",
                [style.danger]: insuranceStatus === "danger",
            })}>
                <NavLink to={pathInsurance} className={style.just}>
                    {dateInsuranceIsValid}
                </NavLink>
            </td>
            <td aria-label="Напоминания:" align="center">
                <NavLink to={pathNotice} style={{textDecoration: 'none'}}>
                    {noticeCount}
                </NavLink>
            </td>
        </tr>
    )
}