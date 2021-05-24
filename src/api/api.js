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
    updateCar(updateCar){
        console.log(updateCar)
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
        return axios.get(`${host}/getmaintenance.php?userId=${userId}`, {
            params: {
                userId: userId
            }
        }).then(response => response.data)
    },
    addMaintenance(maintenanceRecord) {
        return axios.post(`${host}/addmaintenance.php`, {
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
        }).then(response => response)
    }
}
export const APIInsurance = {
    addInsurance(date, carId, userId) {
        console.log(userId)
        return axios.post(`${host}/insurance.php`, {
            date: date,
            carId: carId,
            userId: userId
        }).then(response => response.data)
    },
    getInsurance(userId){
        return axios.get(`${host}/insurance.php?userId=${userId}`,{
            params: {
                userId: userId
            }
        }).then(response=> response.data)
    }
}
export const  APIRepair ={
    addRepair(newRecord){
        return axios.post(`${host}/repairs.php`,{
            carId: newRecord.data.carId,
            userId: newRecord.data.userId,
            odometer: newRecord.data.odometer,
            date: newRecord.data.date,
            reasonsRepairs: newRecord.data.reasonsRepairs,
            usedParts: newRecord.data.usedParts,
            accomplishedWork: newRecord.data.accomplishedWork,
            result: newRecord.data.result
        }).then(response => response)
    },
    getRepairs(userId){
        return axios.get(`${host}/repairs.php?userId=${userId}`,{
            params:{
                userId: userId
            }
        }).then(response => response.data)
    }
}