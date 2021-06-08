import style from "../car.module.css";
import {AddNoticeRecord} from "./AddNoticeRecord";
import {NoticeItem} from "./NoticeItem";

export const Notice = (props) => {
    console.log(props)
const notice = props.noticeList.map(item => <NoticeItem key={item.id} {...item}/>)
    return (
        <div className={style.car_section_wrapper}>
            <AddNoticeRecord {...props}/>
            {notice}
        </div>
    )
}