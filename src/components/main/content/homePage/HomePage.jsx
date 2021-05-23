import style from "./homepage.module.css";
import {HomePageItem} from "./homepageitem/HomePageItem";
import {useSelector} from "react-redux";
import {getCars} from "../../../../redux/cars/carsSelector";

export const HomePage = () => {
   const carsList = useSelector(state=> getCars(state))
    const tabList = carsList.map(item=><HomePageItem key ={item.id} {...item}/>)
    return (
        <div>
            <div className={style.homepage_wrapper}>
                <h3>Сводка:</h3>
                <table className={style.tab_wrapper}>
                    <tbody>
                    <tr>
                        <td>Марка</td>
                        <td>Модель</td>
                        <td>Номер</td>
                        <td>ТО</td>
                        <td>Ремонт</td>
                        <td>Тех осмотр</td>
                        <td>Страховка</td>
                    </tr>
                    {tabList}
                    </tbody>
                </table>
            </div>
        </div>
    )
}