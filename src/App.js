import './App.css';
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import {Main} from "./components/main/Main";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getCars} from "./redux/carsReducer";

function App() {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getCars())
    },[])
  return (
    <div className="app_wrapper">
        <Header/>
        <Main/>
        <Footer/>
    </div>
  );
}

export default App;
