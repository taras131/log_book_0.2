import axios from "axios";

//const host = "http://localhost"
const host = "http://mossnabitkana1792.ru.fozzyhost.com"

export const APICars = {
    getCars(userId) {
        return axios.get(`${host}/getCars.php?userId=${userId}`, {
            params: {
                userId: userId
            }
        }).then(response => response.data)
    },
    addCar(newCar) {
        return axios.post(`${host}/addCar.php`, {
            userId: newCar.userId,
            id: newCar.id,
            brand: newCar.brand,
            model: newCar.model,
            yearManufacture: newCar.yearManufacture,
        })
            .then(response => response.data)
    },
    deleteCar(id) {
        return axios.post(`${host}/deleteCar.php`, {
            id: id,
        })
            .then(response => response.data)
    },
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
    getMaintenance(carId) {
        return axios.get(`${host}/getmaintenance.php?carId=${carId}`, {
            params: {
                carId: carId
            }
        }).then(response => response.data)
    },
    addMaintenance(maintenanceRecord) {
        console.log(maintenanceRecord)
        return axios.post(`${host}/addmaintenance.php`, {
            id: maintenanceRecord.id,
            carId: maintenanceRecord.carId,
            date: maintenanceRecord.date,
            odometer: maintenanceRecord.odometer,
            text: maintenanceRecord.text,
        }).then(response => response.data)
    },
    deleteMaintenance(id, carId){
        console.log(id)
        return axios.post(`${host}/deletemaintenance.php`, {
            data: {
                id: id,
            }
        }).then(response => response.data)
    }
}