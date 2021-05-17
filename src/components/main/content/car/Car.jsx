import style from "./car.module.css"
import {Redirect, Route, useLocation} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {getCarById} from "../../../../redux/carsSelector";
import {deleteCar, deleteCarThunk} from "../../../../redux/carsReducer";
import {CarDescription} from "./cardescription/CarDescription";
import {CarMenu} from "./carmenu/CarMenu";
import {MaintenanceRecord} from "./maintenancerecord/MaintenanceRecord";
import {Insurance} from "./insurance/Insurance";
import {Notice} from "./notice/Notice";
import {TechnicalInspection} from "./technicalinspection/TechnicalInspection";
import {getMaintenanceRecordList} from "../../../../redux/maintenancerecordSelector";
import {getMaintenanceRecord} from "../../../../redux/maintenancerecordReducer";
import {useEffect} from "react";

export const Car = () => {
    const id = useLocation().pathname.split("/").pop()
    const car = useSelector(state => getCarById(state, id))
    const maintenanceList = useSelector(state => getMaintenanceRecordList(state))
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getMaintenanceRecord(id))
    },[id])

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
    return (
        <div className={style.car_wrapper}>
            <Route exact path={pathDescription} render={() => <CarDescription {...car}/>}/>
            <Route exact path={pathMaintenanceRecord} render={() => <MaintenanceRecord
                id ={id} maintenanceList = {maintenanceList}/>}/>
            <Route exact path={pathInsurance} render={() => <Insurance {...car} />}/>
            <Route exact path={pathNotice} render={() => <TechnicalInspection {...car} />}/>
            <Route exact path={pathTechnicalInspection} render={() => <Notice {...car} />}/>
            <CarMenu onDeleteCarClick={onDeleteCarClick} {...car} pathMaintenanceRecord={pathMaintenanceRecord}
                     pathInsurance = {pathInsurance} pathNotice = {pathNotice}
                     pathTechnicalInspection ={pathTechnicalInspection}/>
        </div>
    )
}