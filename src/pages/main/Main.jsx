import React, {Suspense, lazy} from 'react';
import style from "./main.Module.css"
import {Navigation} from "../../components/main/navigation/Navigation";
import {Redirect, Switch} from "react-router";
import {Route} from "react-router-dom";
import {HomePage} from "../homePage/HomePage";
import {Car} from "../carPage/Car";
import {AddNewCar} from "../addNewCar/AddNewCar";
import {Preloader} from "../../components/preloader/Preloader";
const OrdersReview = lazy(() => import('../../components/main/ordersreview/OrdersReview'))

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

                <Suspense fallback={<Preloader/>}>
                    <Switch>
                        <Route path="/orders_review" render={() => <OrdersReview/>} />
                    </Switch>
                </Suspense>
            </div>
        </div>
    )
}

