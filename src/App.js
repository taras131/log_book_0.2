import './App.css';
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import {Main} from "./components/main/Main";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCars} from "./redux/cars/carsReducer";
import {Route} from "react-router-dom";
import {Registration} from "./components/main/authentication/Registration";
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

function App() {
    const dispatch = useDispatch()
    const isAuthentication = useSelector(state => authMe(state))
    const userId = useSelector(state => getMyId(state))
    const userName = useSelector(state => getMyName(state))
    const [isShowBurgerMenu, setIsShowBurgerMenu] = useState(false)
    const onBurgerClick = () => {
        setIsShowBurgerMenu(!isShowBurgerMenu)
    }
    if (isAuthentication) {
        sessionStorage.setItem("userId", userId)
        sessionStorage.setItem("userName", userName)
    }
    if (!isAuthentication) {
        const id = sessionStorage.getItem("userId")
        const name = sessionStorage.getItem("userName")
        dispatch(setUser({id: id, name: name}))
    }
    useEffect(() => {
        if(isAuthentication){
            dispatch(getCars(userId))
            dispatch(getMaintenanceRecord(userId))
            dispatch(getInsuranceDate(userId))
            dispatch(getRepairRecord(userId))
            dispatch(getNoticeRecords(userId))
            dispatch(getTechnicalInspection(userId))
            dispatch(getSetting(userId))
            dispatch(getOrders(userId))
        }
    }, [isAuthentication])
    return (
        <div className="app_wrapper">
            <Header isAuthentication={isAuthentication} onBurgerClick={onBurgerClick}
                    isShowBurgerMenu={isShowBurgerMenu}/>
            <Route path="/" render={() => <Main isAuthentication={isAuthentication}/>}/>
            <Route exact path="/login"
                   render={() => <Registration isEntrance={true} isAuthentication={isAuthentication}/>}/>
            <Route exact path="/registration" render={() => <Registration/>}/>
            <Footer/>
            <AnswerWindow/>
            <MessageInfo/>
            <Setting userId={userId}/>
            <Preloader/>
            <BurgerMenu onBurgerClick={onBurgerClick} isAuthentication={isAuthentication}
                        isShowBurgerMenu={isShowBurgerMenu}/>
        </div>
    );
}

export default App;
