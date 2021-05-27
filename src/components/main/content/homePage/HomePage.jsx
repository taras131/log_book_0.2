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
                        <td align="center">Марка</td>
                        <td align="center">Модель</td>
                        <td align="center">Номер</td>
                        <td align="center">ТО</td>
                        <td align="center">Ремонт</td>
                        <td align="center">Тех осмотр</td>
                        <td align="center">Страховка</td>
                    </tr>
                    {tabList}
                    </tbody>
                </table>
            </div>
        </div>
    )
}