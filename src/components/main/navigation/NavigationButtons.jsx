import style from "./navigation.module.css";
import {useSelector} from "react-redux";
import {getCars} from "../../../redux/cars/carsSelector";
import {ButtonItem} from "./ButtonItem";

export const NavigationButtons = (props) => {
    const carsList = useSelector(state => getCars(state))
    const buttonsList = carsList.map(item => <ButtonItem key={item.id} {...item} />)
    return(
        <div className={style.navigation_buttons}>
            {props.isAuthentication &&
            <div className={style.buttons_wrapper }>
                {buttonsList}
            </div>
            }
        </div>
    )
}