import axios from "axios";
import {host} from "./api";

export const APIAuthentication = {
    registration(login, password) {
            return (axios.post(`${host}api/auth/registration`, {
                email: login,
                password: password,
            })
                .then(response => response.data))

    },
    login(login, password) {
        return (axios.post(`${host}api/auth/login`, {
                email: login,
                password: password,
            })
                .then(response => response.data)
        )
    }
}