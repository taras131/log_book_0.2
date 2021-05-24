import style from "./car.module.css"
import {Redirect, Route, useLocation} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {getCarById} from "../../../../redux/cars/carsSelector";
import {deleteCarThunk} from "../../../../redux/cars/carsReducer";
import {CarDescription} from "./cardescription/CarDescription";
import {CarMenu} from "./carmenu/CarMenu";
import {MaintenanceRecord} from "./maintenancerecord/MaintenanceRecord";
import {Insurance} from "./insurance/Insurance";
import {Notice} from "./notice/Notice";
import {TechnicalInspection} from "./technicalinspection/TechnicalInspection";
import {getMaintenanceRecordList} from "../../../../redux/technicalmaintenancerecords/technicalMaintenanceSelector";
import {getMyId} from "../../../../redux/authentication/authenticationSelector";
import {getInsuranceDateValidById} from "../../../../redux/Insurance/InsuranceSelector";
import {Repairs} from "./repairs/Repairs";
import {getRepairsByCarId} from "../../../../redux/repairs/repairsSelector";

export const Car = () => {
    const id = useLocation().pathname.split("/").pop()
    const car = useSelector(state => getCarById(state, id))
    const maintenanceList = useSelector(state => getMaintenanceRecordList(state, id))
    const repairsList = useSelector(state => getRepairsByCarId(state, id))
    console.log(repairsList)
    const lastRecording = maintenanceList[maintenanceList.length - 1]
    const dateInsuranceIsValid = useSelector(state => getInsuranceDateValidById(state, id))
    const userId = useSelector(state => getMyId(state))
    const dispatch = useDispatch()
    const onDeleteCarClick = () => {
        dispatch(deleteCarThunk(id))
    }
    if (!car) {
        return (
            <Redirect to={"/"}/>
        )
    }
    const pathDescription = `/car/${id}`
    const pathMaintenanceRecord = `/car/maintenancerecord/${id}`
    const pathInsurance = `/car/insurance/${id}`
    const pathNotice = `/car/notice/${id}`
    const pathTechnicalInspection = `/car/technicalinspection/${id}`
    const pathRepairs = `/car/repairs/${id}`
    return (
        <div className={style.car_wrapper}>
            <Route exact path={pathDescription} render={() => <CarDescription lastRecording={lastRecording}
                                                                              dateInsuranceIsValid={dateInsuranceIsValid} {...car}/>}/>
            <Route exact path={pathMaintenanceRecord} render={() => <MaintenanceRecord
                id={id} maintenanceList={maintenanceList} dispatch={dispatch}/>}/>
            <Route exact path={pathRepairs} render={() => <Repairs
                carId={id} dispatch={dispatch} userId={userId}
                repairsList={repairsList}/>}/>
            <Route exact path={pathInsurance} render={() => <Insurance {...car} />}/>
            <Route exact path={pathTechnicalInspection} render={() => <TechnicalInspection {...car} />}/>
            <Route exact path={pathNotice} render={() => <Notice {...car} />}/>
            <CarMenu onDeleteCarClick={onDeleteCarClick} {...car} pathMaintenanceRecord={pathMaintenanceRecord}
                     pathInsurance={pathInsurance} pathNotice={pathNotice}
                     pathTechnicalInspection={pathTechnicalInspection}
                     pathRepairs={pathRepairs}/>
        </div>
    )
}