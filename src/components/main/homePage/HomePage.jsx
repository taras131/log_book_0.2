import style from "./homepage.module.css";
import {HomePageItem} from "./homepageitem/HomePageItem";
import {useSelector} from "react-redux";
import {getCars} from "../../../redux/cars/carsSelector";

export const HomePage = (props) => {
   const carsList = useSelector(state=> getCars(state, props.category))
    const tabList = carsList.map(item=><HomePageItem key ={item.id} {...item}/>)
    return (
        <div>
            <div className={style.homepage_wrapper}>
                {props.category === "all" &&  <h3>Все:</h3>}
                {props.category === "0" &&  <h3>Легковые:</h3>}
                {props.category === "1" &&  <h3>Грузовые:</h3>}
                {props.category === "2" &&  <h3>Спецтехника:</h3>}
                <table className={style.tab_wrapper}>
                    <tbody>
                    <tr>
                        <td align="center">Марка</td>
                        <td align="center">Номер</td>
                        <td align="center">ТО</td>
                        <td align="center">Ремонт</td>
                        <td align="center">Тех осмотр до:</td>
                        <td align="center">Страховка до:</td>
                        <td align="center">Заметки</td>
                    </tr>
                    {tabList}
                    </tbody>
                </table>
            </div>
        </div>
    )
}