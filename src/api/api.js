import axios from "axios";

//const host = "http://localhost"
const host = "http://mossnabitkana1792.ru.fozzyhost.com"

export const APICars = {
    getCars(userId) {
        return axios.get(`${host}/cars.php?userId=${userId}`, {
            params: {
                userId: userId
            }
        }).then(response => response.data)
    },
    addCar(newCar) {
        return axios.post(`${host}/cars.php`, {
            userId: newCar.userId,
            id: newCar.id,
            brand: newCar.brand,
            model: newCar.model,
            yearManufacture: newCar.yearManufacture,
            num: newCar.num
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
            num: updateCar.num
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