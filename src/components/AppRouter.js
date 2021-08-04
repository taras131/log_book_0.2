import React from 'react';
import {authRoutes, publicRoutes} from "../routes";
import {Route, Switch} from "react-router-dom";
import style from "../pages/main/main.Module.css";
import {useHistory} from "react-router";
import {LOGIN_ROUTE} from "../utils/const";

const AppRouter = ({isAuthentication}) => {
    const history = useHistory()
    if(!isAuthentication){
        history.push(LOGIN_ROUTE)
    }
    return (
        <div className={style.main_wrapper}>
            <div className={style.container}>
                <Switch>
                    {isAuthentication && authRoutes.map(({path, Component}) => {
                        return <Route key={path} path={path} component={Component} exact/>
                    })}
                    {publicRoutes.map(({path, Component}) => {
                        return <Route key={path} path={path} component={Component} exact/>
                    })}

                </Switch>
            </div>
        </div>
    );
};

export default AppRouter;