import axios from "axios";

const host = "http://localhost"
//const host = "http://mossnabitkana1792.ru.fozzyhost.com"

export const APICars = {
    getCars(userId) {
        return axios.get(`${host}/cars.php?userId=${userId}`, {
            params: {
                userId: userId
            }
        }).then(response => response.data)
    },
    addCar(newCar) {
        console.log(newCar.vin)
        return axios.post(`${host}/cars.php`, {
            userId: newCar.userId,
            id: newCar.id,
            brand: newCar.brand,
            model: newCar.model,
            yearManufacture: newCar.yearManufacture,
            num: newCar.num,
            vin: newCar.vin,
            category: newCar.category,
        }).then(response => response.data)
    },
    deleteCar(id) {
        return axios.post(`${host}/deleteCar.php`, {
            id: id,
        })
            .then(response => response.data)
    },
    updateCar(updateCar) {
        return axios.post(`${host}/updateCar.php`, {
            userId: updateCar.userId,
            id: updateCar.id,
            brand: updateCar.brand,
            model: updateCar.model,
            yearManufacture: updateCar.yearManufacture,
            num: updateCar.num,
            vin: updateCar.vin,
            category: updateCar.category,
        }).then(response => response.data)
    }
}

export const APIAuthentication = {
    registration(login, password) {
        return (axios.post(`${host}/registration.php`, {
            login: login,
            password: password,
        })
            .then(response => response.data))
    },
    entrance(login, password) {
        return (axios.post(`${host}/entrence.php`, {
                login: login,
                password: password,
            })
                .then(response => response.data)
        )
    }
}

export const APIMaintenanceRecord = {
    getMaintenance(userId) {
        return axios.get(`${host}/maintenance.php?userId=${userId}`, {
            params: {
                userId: userId
            }
        }).then(response => response.data)
    },
    addMaintenance(maintenanceRecord) {
        console.log(maintenanceRecord.userId)
        return axios.post(`${host}/maintenance.php`, {
            id: maintenanceRecord.id,
            carId: maintenanceRecord.carId,
            datecommission: maintenanceRecord.datecommission,
            odometer: maintenanceRecord.odometer,
            text: maintenanceRecord.text,
            userId: maintenanceRecord.userId,
        }).then(response => response.data)
    },
    deleteMaintenance(id, carId) {
        return axios.post(`${host}/deletemaintenance.php`, {
            id: id,
            carId: carId
        }).then(response => response.data)
    },
    updateMaintenance(maintenanceRecord) {
        console.log(maintenanceRecord)
        return axios.post(`${host}/updatemaintenance.php`, {
            id: maintenanceRecord.id,
            carId: maintenanceRecord.carId,
            datecommission: maintenanceRecord.datecommission,
            odometer: maintenanceRecord.odometer,
            text: maintenanceRecord.text,
            userId: maintenanceRecord.userId,
        }).then(response => response.data)
    }
}
export const APIInsurance = {
    addInsurance(date, carId, userId) {
        return axios.post(`${host}/insurance.php`, {
            date: date,
            carId: carId,
            userId: userId
        }).then(response => response.data)
    },
    getInsurance(userId) {
        return axios.get(`${host}/insurance.php?userId=${userId}`, {
            params: {
                userId: userId
            }
        }).then(response => response.data)
    }
}
export const APIRepair = {
    addRepair(newRecord) {
        return axios.post(`${host}/repairs.php`, {
            carId: newRecord.data.carId,
            userId: newRecord.data.userId,
            odometer: newRecord.data.odometer,
            date: newRecord.data.date,
            reasonsRepairs: newRecord.data.reasonsRepairs,
            usedParts: newRecord.data.usedParts,
            accomplishedWork: newRecord.data.accomplishedWork,
            result: newRecord.data.result
        }).then(response => response.data)
    },
    getRepairs(userId) {
        return axios.get(`${host}/repairs.php?userId=${userId}`, {
            params: {
                userId: userId
            }
        }).then(response => response.data)
    },
    updateRepair(newRecord) {
        return axios.post(`${host}/updaterepair.php`, {
            userId: newRecord.userId,
            carId: newRecord.carId,
            id: newRecord.id,
            date: newRecord.date,
            odometer: newRecord.odometer,
            reasonsRepair: newRecord.reasonsRepair,
            usedParts: newRecord.usedParts,
            accomplishedWork: newRecord.accomplishedWork,
            result: newRecord.result
        }).then(response => response.data)
    },
    deleteRepair(id) {
        return axios.post(`${host}/deleterepair.php`, {
            id: id
        }).then(response => response.data)
    },
}
export const ApiNotice = {
    addNotice(newRecord) {
        return axios.post(`${host}/notice.php`, {
            userId: newRecord.userId,
            carId: newRecord.carId,
            date: newRecord.date,
            odometer: newRecord.odometer,
            text: newRecord.text
        }).then(response => response.data)
    },
    getNotice(userId) {
        return axios.get(`${host}/notice.php?userId=${userId}`, {
            params: {
                userId: userId
            }
        }).then(response => response.data)
    },
    updateNotice(upRecord) {
        return axios.post(`${host}/updatenotice.php`, {
            id: +upRecord.id,
            userId: upRecord.userId,
            carId: upRecord.carId,
            date: upRecord.date,
            odometer: upRecord.odometer,
            text: upRecord.text
        }).then(response => response.data)
    },
    deleteNotice(id) {
        return axios.post(`${host}/deletenotice.php`, {
            id: +id
        }).then(response => response.data)
    },
}
export const APITechnicalInspection = {
    addInspection(dateIsValid, carId, userId) {
        return axios.post(`${host}/technicalinspection.php`, {
            dateIsValid: dateIsValid,
            carId: carId,
            userId: userId
        }).then(response => response.data)
    },
    getInspection(userId) {
        return axios.get(`${host}/technicalinspection.php?userId=${userId}`, {
            params: {
                userId: userId
            }
        }).then(response => response.data)
    }
}
export const APISetting = {
    getSetting(userId) {
        return axios.get(`${host}/setting.php?userId=${userId}`, {
            params: {
                userId: userId
            }
        }).then(response => response.data)
    },
    updateSetting(emailList) {
        return axios.post(`${host}/setting.php`, {
            userId: emailList.userId,
            email_1: emailList.email_1,
            email_2: emailList.email_2,
            email_3: emailList.email_3,
        }).then(response => response.data)
    },
}
export const APIOrder = {
    addOrder(userId, carId, inputsString, typeOrder, statusOrder, date) {
        return axios.post(`${host}/order.php`, {
            userId: userId,
            carId: "" + carId,
            inputsString: inputsString,
            typeOrder: typeOrder,
            statusOrder: statusOrder,
            date: date
        }).then(response => response.data)
    },
    getOrders(userId) {
        return axios.get(`${host}/order.php?userId=${userId}`, {
            params: {
                userId: userId
            }
        }).then(response => response.data)
    },
    deleteOrder(id, userId) {
        return axios.post(`${host}/deleteorder.php`, {
            id: id,
            userId: userId
        }).then(response => response.data)
    },
    updateOrder(id, userId, carId, inputsString, typeOrder, statusOrder, date){
        return axios.post(`${host}/updateorder.php`, {
            id: id,
            userId: userId,
            carId: "" + carId,
            inputsString: inputsString,
            typeOrder: typeOrder,
            statusOrder: statusOrder,
            date: date
        }).then(response => response.data)
    }
}
export const APISendMail = (email_1,email_2,email_3, title, brand, model, yearManufacture,
                            num, vin, arr_data1) => {
    let arr_data = arr_data1.map(item => Object.values(item))
    return axios.post(`${host}/sendMail.php`, {
        email_1: email_1,
        email_2: email_2,
        email_3: email_3,
        title: title,
        brand: brand,
        model: model,
        yearManufacture: yearManufacture,
        num: num,
        vin: vin,
        arr_data: arr_data,
    }).then(response => response.data)
}