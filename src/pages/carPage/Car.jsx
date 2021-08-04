import style from "./car.module.css"
import {Redirect, useLocation} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {getCarById} from "../../redux/cars/carsSelector";
import {CarDescription} from "../../components/car/cardescription/CarDescription";
import {CarMenu} from "../../components/car/carmenu/CarMenu";
import {MaintenanceRecord} from "../../components/car/maintenancerecord/MaintenanceRecord";
import {Notice} from "../../components/car/notice/Notice";
import {getMaintenanceRecordList} from "../../redux/technicalmaintenancerecords/technicalMaintenanceSelector";
import {getMyId} from "../../redux/authentication/authenticationSelector";
import {Repairs} from "../../components/car/repairs/Repairs";
import {getRepairsByCarId} from "../../redux/repairs/repairsSelector";
import {getLastNoticeRecord, getNoticeRecordByCarId} from "../../redux/notice/noticeSelector";
import {InsuranceWrapper} from "../../components/car/insurance/InsuranceWrapper";
import {TechnicalInspectionWrapper} from "../../components/car/technicalinspection/TechnicalInspectionWrapper";
import {Order} from "../../components/car/order/Order";
import {getOrdersByCarId} from "../../redux/order/orderSelector";
import {useState} from "react";

export const Car = () => {
    const [activeCategory, setActiveCategory] = useState("description")
    const id = useLocation().pathname.split("/").pop()
    const car = useSelector(state => getCarById(state, id))
    const maintenanceList = useSelector(state => getMaintenanceRecordList(state, id))
    const repairsList = useSelector(state => getRepairsByCarId(state, id))
    const noticeList = useSelector(state => getNoticeRecordByCarId(state, id))
    const lastRecording = maintenanceList[maintenanceList.length - 1]
    const lastNoticeRecord = useSelector(state => getLastNoticeRecord(state, id))
    const userId = useSelector(state => getMyId(state))
    const carOrdersList = useSelector(state => getOrdersByCarId(state, id))
    const dispatch = useDispatch()
    if (!car) {
        return (
            <Redirect to={"/"}/>
        )
    }
    return (
        <div className={style.car_wrapper}>
            {activeCategory === "description" &&
            <CarDescription lastRecording={lastRecording}
                            car = {car}
                            lastNoticeRecord={lastNoticeRecord}/>}
            {activeCategory === "maintenanceRecord" &&
            <MaintenanceRecord
                maintenanceList={maintenanceList} dispatch={dispatch} carId={id} userId={userId} brand={car.brand}
                num={car.num}/>}
            {activeCategory === "repairs" &&
            <Repairs
                carId={id} dispatch={dispatch} userId={userId}
                repairsList={repairsList} brand={car.brand} num={car.num}/>
            }
            {activeCategory === "insurance" &&
            <InsuranceWrapper {...car} />
            }
            {activeCategory === "technicalInspection" &&
            <TechnicalInspectionWrapper {...car} />
            }
            {activeCategory === "order" &&
            <Order {...car} carOrdersList={carOrdersList}/>
            }
            {activeCategory === "notice" &&
            <Notice {...car} noticeList={noticeList}/>
            }
            <CarMenu activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
        </div>
    )
}