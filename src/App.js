import './App.css';
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import {Main} from "./components/main/Main";
import {useEffect} from "react";
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

function App() {
    const dispatch = useDispatch()
    const isAuthentication = useSelector(state => authMe(state))
    const userId = useSelector(state => getMyId(state))
    const userName = useSelector(state => getMyName(state))
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
        dispatch(getCars(userId))
        dispatch(getMaintenanceRecord(userId))
        dispatch(getInsuranceDate(userId))
        dispatch(getRepairRecord(userId))
        dispatch(getNoticeRecords(userId))
        dispatch(getTechnicalInspection(userId))
    }, [isAuthentication])
    return (
        <div className="app_wrapper">
            <Header isAuthentication={isAuthentication}/>
            <Route path="/" render={() => <Main isAuthentication={isAuthentication}/>}/>
            <Route exact path="/login" render={() => <Registration isEntrance={true}
                                                                   isAuthentication={isAuthentication}/>}/>
            <Route exact path="/registration" render={() => <Registration/>}/>
            <Footer/>
            <AnswerWindow/>
        </div>
    );
}

export default App;
