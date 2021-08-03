import {ADD_NEW_CAR, HOME_PAGE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "./utils/const";
import {Authentication} from "./pages/authentication/Registration";
import {AddNewCar} from "./pages/addNewCar/AddNewCar";
import {HomePage} from "./pages/homePage/HomePage";

export const authRoutes = [
    {
        path: HOME_PAGE,
        Component: HomePage
    },
    {
        path: HOME_PAGE+'/:category',
        Component: HomePage
    },
    {
        path: ADD_NEW_CAR,
        Component: AddNewCar
    },

]
export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Authentication
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Authentication
    },
]