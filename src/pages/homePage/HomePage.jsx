import style from "./homepage.Module.css";
import {HomePageItem} from "../../components/main/homePage/homepageitem/HomePageItem";
import {useSelector} from "react-redux";
import {getCars} from "../../redux/cars/carsSelector";
import {useParams} from "react-router-dom";
import {useLocation} from "react-router";

export const HomePage = () => {

    const category = useLocation().pathname.split("/").pop()
    console.log(category)
    const carsList = useSelector(state => getCars(state, category))
    const tabList = carsList.map(item => <HomePageItem key={item.id} {...item}/>)
    return (
        <div className={style.homepage_wrapper}>
            <table className={style.tab_wrapper}>
                <thead>
                <tr>
                    <td align="center">Марка</td>
                    <td align="center">Номер</td>
                    <td align="center">ТО</td>
                    <td align="center" className={style.repair_header}>Ремонт</td>
                    <td align="center">Тех осмотр до:</td>
                    <td align="center">Страховка до:</td>
                    <td align="center">Заметки</td>
                </tr>
                </thead>
                <tbody>
                {tabList}
                </tbody>
            </table>
            <div className={style.help}>
                <div className={style.help_item_wrapper}>
                    <div className={style.help_example_warning}>

                    </div>
                    <div className={style.help_description}>
                        - до конца дествия страховки или техосмотра меньше месяца.
                    </div>
                </div>
                <div className={style.help_item_wrapper}>
                    <div className={style.help_example_danger}>

                    </div>
                    <div className={style.help_description}>
                        - до конца дествия страховки или техосмотра меньше 5 дней.
                    </div>
                </div>
                <div className={style.help_item_wrapper}>
                    <div className={style.help_example_no_data}>
                        нет данных
                    </div>
                    <div className={style.help_description}>
                        - вы пока не внесли данные в соответствующие разделы.
                    </div>
                </div>
                <div className={style.help_item_wrapper}>
                    <div className={style.help_description}>
                        По всем разделам таблицы можно переходить, кликнув по ним.
                    </div>
                </div>
            </div>
        </div>
    )
}