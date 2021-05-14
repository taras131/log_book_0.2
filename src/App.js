import './App.css';
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import {Main} from "./components/main/Main";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCars} from "./redux/carsReducer";
import {Route} from "react-router-dom";
import {Registration} from "./components/main/authentication/Registration";
import {Switch} from "react-router";

function App() {
    const isAuthentication = useSelector(state => state.authInfo.isAuthentication)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getCars())
    },[])
  return (
    <div className="app_wrapper">
        <Header isAuthentication = {isAuthentication}/>
        <Route path="/" render={() => <Main isAuthentication = {isAuthentication}/>}/>
        <Route exact path="/login" render={() => <Registration isEntrance={true}
                                                         isAuthentication={isAuthentication}/>}/>
        <Route exact path="/registration" render={() => <Registration/>}/>
        <Footer/>
    </div>
  );
}

export default App;
