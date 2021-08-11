import './App.css';
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCars} from "./redux/cars/carsReducer";
import {authMe, getMyId, getMyName} from "./redux/authentication/authenticationSelector";
import {setUser} from "./redux/authentication/authenticationReducer";
import {getMaintenanceRecord} from "./redux/technicalmaintenancerecords/technicalMaintenanceReducer";
import {getInsuranceDate} from "./redux/insurance/insuranceReducer";
import {getRepairRecord} from "./redux/repairs/repairsReducer";
import {AnswerWindow} from "./components/answerwindow/AnswerWindow";
import {getNoticeRecords} from "./redux/notice/noticeReducer";
import {getTechnicalInspection} from "./redux/technicalinspection/technicalInspectionReducer";
import {MessageInfo} from "./components/messageinfo/MessageInfo";
import {Preloader} from "./components/preloader/Preloader";
import {BurgerMenu} from "./components/burgermenu/BurgerMenu";
import {Setting} from "./components/setting/Setting";
import {getSetting} from "./redux/setting/settingReducer";
import {getOrders} from "./redux/order/orderReducer";
import AppRouter from "./components/AppRouter";

function App() {
    const dispatch = useDispatch()
    const isAuthentication = useSelector(state => authMe(state))
    console.log(isAuthentication)
    const userId = useSelector(state => getMyId(state))
    const [isShowBurgerMenu, setIsShowBurgerMenu] = useState(false)
    const onBurgerClick = () => {
        setIsShowBurgerMenu(!isShowBurgerMenu)
    }

    useEffect(() => {
        if (isAuthentication) {
     //       dispatch(getCars(userId))
//            dispatch(getInsuranceDate(userId))
 //           dispatch(getRepairRecord(userId))
//            dispatch(getNoticeRecords(userId))
 //           dispatch(getTechnicalInspection(userId))
 //           dispatch(getSetting(userId))
 //           dispatch(getOrders(userId))
        }
    }, [isAuthentication])
    return (
        <div className="app_wrapper">
            <Header isAuthentication={isAuthentication} onBurgerClick={onBurgerClick}
                    isShowBurgerMenu={isShowBurgerMenu}/>
            <AppRouter isAuthentication={isAuthentication}/>
            <AnswerWindow/>
            <MessageInfo/>
            <Setting userId={userId}/>
            <Preloader/>
            <BurgerMenu onBurgerClick={onBurgerClick} isAuthentication={isAuthentication}
                        isShowBurgerMenu={isShowBurgerMenu}/>
            <Footer/>
        </div>
    );
}

export default App;

