import style from "../../../pages/carPage/car.module.css";
import {AddNoticeRecord} from "./AddNoticeRecord";
import {NoticeItem} from "./NoticeItem";

export const Notice = (props) => {
const notice = props.noticeList.map(item => <NoticeItem key={item.id} {...item}/>)
    return (
        <div className={style.car_section_wrapper}>
            <AddNoticeRecord {...props}/>
            {notice}
        </div>
    )
}