export const APICars = {
    getCars() {
        console.log("api")
        fetch("http://localhost", {
            method: "GET",
            header: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(response => console.log(response))
    }
}