import React from 'react';
import style from "../../header/header.Module.css";
import {useHistory} from "react-router-dom";
import {ADD_NEW_CAR} from "../../../utils/const";
import classNames from "classnames";
import car from "../../../icons/car.png";
import truck from "../../../icons/truck.png";
import bulldozer from "../../../icons/bulldozer.png";
import add from "../../../icons/add.png";

const HomePageNavigation = ({category, setCategory}) => {
    const history = useHistory()
    return (
        <div>
            <div className={style.subheader_wrapper}>
                <div className={style.subheader_container}>
                    <div onClick = {()=>setCategory(0)} className={classNames(style.subheader_item, {
                        [style.active]: category === 0
                    })}>
                        Все
                    </div>
                    <div onClick = {()=>setCategory("0")} className={classNames(style.subheader_item, {
                        [style.active]: category === "0"
                    })}>
                        <p>Легковые</p>
                        <img src={car} alt="car"/>
                    </div>
                    <div onClick = {()=>setCategory("1")} className={classNames(style.subheader_item, {
                        [style.active]: category === "1"
                    })}>
                        <p>Грузовые</p>
                        <img src={truck} alt="truck"/>
                    </div>
                    <div onClick = {()=>setCategory("2")} className={classNames(style.subheader_item, {
                        [style.active]: category === "2"
                    })}>
                        <p>Спецтехника</p>
                        <img src={bulldozer} alt="bulldozer"/>
                    </div>
                    <div onClick = {()=>history.push(ADD_NEW_CAR)} className={classNames(style.subheader_item, {
                        [style.active]: category === {ADD_NEW_CAR}
                    })}>
                        <p>Добавить</p>
                        <img src={add} alt="add"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePageNavigation;