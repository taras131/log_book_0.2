import axios from "axios";

const host = "http://localhost"
//const host = "http://mossnabitkana1792.ru.fozzyhost.com"

export const APICars = {
    getCars() {
        return (
            fetch(`${host}/getCars.php`, {
                method: "GET",
                header: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
        )
    },
    addCar(newCar) {
        return  axios.post(`${host}/addCar.php`, {
                id: newCar.id,
                brand: newCar.brand,
                model: newCar.model,
                yearManufacture: newCar.yearManufacture,
            })
                .then(response => response.data)
    },
    deleteCar(id) {
        return  axios.post(`${host}/deleteCar.php`, {
            id: id,
        })
            .then(response => response.data)
    },
}

export const APIAuthentication ={
    registration(login,password) {
        return  (axios.post(`${host}/registration.php`, {
            login: login,
            password: password,
        })
            .then(response => response.data))
    },
    entrance(login, password) {

        return  (axios.post(`${host}/entrence.php`, {
            login: login,
            password: password,
        })
            .then(response => response.data)
        )
    }
}