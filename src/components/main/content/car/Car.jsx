import style from "./car.module.css"
import {Redirect, useLocation} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {getCarById} from "../../../../store/carsSelector";
import {useEffect} from "react";
import {deleteCar} from "../../../../store/carsReducer";
import {CarDiscription} from "./cardiscription/CarDiscription";

export const Car = () => {
    const id = +useLocation().pathname.split("/").pop()
    const car = useSelector(state => getCarById(state, id))
    const dispatch = useDispatch()
    useEffect(() => {

    }, [id])
    const onDeleteCarClick = () => {
        dispatch(deleteCar(id))
    }
    if (!car) {
        return (
            <Redirect to={"/"}/>
        )
    }
    return (
        <div className={style.car_wrapper}>
           <CarDiscription {...car}/>
            <button onClick={onDeleteCarClick}>Удалить</button>
        </div>
    )
}