import axios from "axios";


export const APICars = {
    getCars() {
        return (
            fetch("http://localhost", {
                method: "GET",
                header: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
        )
    },
    addCar(newCar) {
        axios.post('http://localhost/addCar.php', {
            id: newCar.id,
            brand: newCar.brand,
            model: newCar.model,
            yearManufacture: newCar.yearManufacture
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

    }
}