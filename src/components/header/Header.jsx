import style from "./header.module.css"

export const Header = () => {
    return (
        <header className={style.header_wrapper}>
            <div className={style.header_logo}>

            </div>
            <div className={style.header_title}>
                <h1>Бортовой журнал</h1>
            </div>
            <div className={style.header_button}>
                выйти
            </div>
        </header>
    )
}