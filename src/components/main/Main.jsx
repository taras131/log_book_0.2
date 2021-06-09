import React, {Suspense, lazy} from 'react';
import style from "./main.module.css"
import {Navigation} from "./navigation/Navigation";
import {Redirect, Switch} from "react-router";
import {Route} from "react-router-dom";
import {HomePage} from "./homePage/HomePage";
import {Car} from "./car/Car";
import {AddNewCar} from "./addNewCar/AddNewCar";
import {Preloader} from "../preloader/Preloader";


const OrdersReview = lazy(() => import('./ordersreview/OrdersReview'))
export const Main = (props) => {
    if (!props.isAuthentication) return <Redirect to="/login"/>
    return (
        <div className={style.main_wrapper}>
            <div className={style.container}>
                <Navigation isAuthentication={props.isAuthentication}/>
                <Route exact path="/" render={() => <HomePage category="all"/>}/>
                <Route exact path="/0" render={() => <HomePage category="0"/>}/>
                <Route exact path="/1" render={() => <HomePage category="1"/>}/>
                <Route exact path="/2" render={() => <HomePage category="2"/>}/>
                <Route path="/car" component={Car}/>
                <Route exact path="/add_new_car" component={AddNewCar}/>
                <Suspense fallback={<Preloader/>}>
                    <Switch>
                        <Route path="/orders_review" render={() => <OrdersReview/>} />
                    </Switch>
                </Suspense>
            </div>
        </div>
    )
}

