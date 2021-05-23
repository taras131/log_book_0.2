export const calculateDate = (startDate, period) => {
    let [day,Months,Year] = ['','','']
    let newYear
    let newMonths
    switch (period) {
        case "sixMonths":
            [day,Months,Year] = startDate.split('.')
            if(+Months+6>12){
                newYear = +Year+1
                newMonths = +Months-6
                return day+"."+Months-6+"."+Year+1
            } else{
                newMonths = +Months+6
                return day+"."+newMonths+"."+Year
            }
        case "oneYear":
           [day,Months,Year] = startDate.split('.')
            newYear = +Year +1
            return day+"."+Months+"."+newYear
        default:
            return ``
    }
}