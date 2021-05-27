import {getCurrentDate} from "./getCurrentDate";

export const checkDate = (endDate, period = 0) => {
    if(endDate){
        const currentDate = getCurrentDate()
        const [endDay,endMonths,endYear] = endDate.split('.')
        const endDateNumber = +endDay +(+endMonths*30) + (+endYear*365) + period
        const [currentDay,currentMonths,currentYear] = currentDate.split('.')
        const currentDateNumber = +currentDay +(+currentMonths*30) + (+currentYear*365)

        if((endDateNumber - currentDateNumber)<5){
            return "danger"
        }
        if((endDateNumber - currentDateNumber)<30){
            return "warning"
        }
        return "ok"
    } else{
        return "null"
    }
}